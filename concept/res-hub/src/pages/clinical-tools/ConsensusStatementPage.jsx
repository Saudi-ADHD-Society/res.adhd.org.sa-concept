import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ConsensusStatementPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const contentRef = useRef(null);
  const highlightRefs = useRef([]);

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without triggering navigation
      window.history.pushState({}, '', `${window.location.pathname}${anchorId}`);
    }
  };

  // Function to extract text content from an element and its children
  const getTextContent = (element) => {
    if (!element) return '';
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true);
    // Remove script and style elements
    const scripts = clone.querySelectorAll('script, style');
    scripts.forEach(el => el.remove());
    return clone.textContent || clone.innerText || '';
  };

  // Function to find the parent section for an element
  const findParentSection = (element) => {
    let current = element;
    while (current && current !== document.body) {
      if (current.tagName === 'SECTION' && current.id) {
        return current;
      }
      current = current.parentElement;
    }
    return null;
  };

  // Function to get section title
  const getSectionTitle = (section) => {
    if (!section) return 'Unknown Section';
    const heading = section.querySelector('h2');
    return heading ? heading.textContent.trim() : section.id;
  };

  // Function to create excerpt with context
  const createExcerpt = (text, keywords, maxLength = 150) => {
    const lowerText = text.toLowerCase();
    const lowerKeywords = keywords.map(k => k.toLowerCase());
    
    // Find the first occurrence of any keyword
    let firstIndex = -1;
    for (const keyword of lowerKeywords) {
      const index = lowerText.indexOf(keyword);
      if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
        firstIndex = index;
      }
    }
    
    if (firstIndex === -1) return text.substring(0, maxLength);
    
    // Extract context around the keyword
    const start = Math.max(0, firstIndex - 50);
    const end = Math.min(text.length, firstIndex + maxLength);
    let excerpt = text.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    return excerpt;
  };

  // Function to highlight keywords in text (returns React elements)
  const highlightKeywords = useCallback((text, keywords) => {
    if (!keywords || keywords.length === 0 || !text) return text;
    
    const escapedKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (!part) return null;
      const isKeyword = keywords.some(k => 
        part.toLowerCase() === k.toLowerCase()
      );
      return isKeyword ? (
        <mark key={index} className="bg-yellow-200 text-slate-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      );
    }).filter(Boolean);
  }, []);

  // Function to remove highlights (defined first since other functions depend on it)
  const removeHighlights = useCallback(() => {
    const contentArea = contentRef.current || document.querySelector('[data-searchable-content]');
    if (!contentArea) return;
    
    const marks = contentArea.querySelectorAll('mark');
    marks.forEach((mark) => {
      const parent = mark.parentElement;
      if (parent) {
        const textNode = document.createTextNode(mark.textContent);
        parent.replaceChild(textNode, mark);
        parent.normalize();
      }
    });
  }, []);

  // Function to highlight keywords in the page (depends on removeHighlights)
  const highlightKeywordsInPage = useCallback((keywords) => {
    // First remove existing highlights
    removeHighlights();

    if (!keywords || keywords.length === 0) return;

    const contentArea = contentRef.current || document.querySelector('[data-searchable-content]');
    if (!contentArea) return;

    const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    
    const walker = document.createTreeWalker(
      contentArea,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (parent && (
            parent.tagName === 'SCRIPT' ||
            parent.tagName === 'STYLE' ||
            parent.tagName === 'MARK' ||
            parent.closest('mark')
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim().length > 0 && regex.test(node.textContent)) {
        textNodes.push(node);
      }
    }

    // Highlight matches
    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      const matches = [...text.matchAll(regex)];
      
      if (matches.length > 0) {
        const parent = textNode.parentElement;
        if (parent && parent.tagName !== 'MARK') {
          const fragment = document.createDocumentFragment();
          let lastIndex = 0;
          
          matches.forEach((match) => {
            if (match.index > lastIndex) {
              fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
            }
            
            const mark = document.createElement('mark');
            mark.className = 'bg-yellow-200 text-slate-900 px-1 rounded';
            mark.textContent = match[0];
            fragment.appendChild(mark);
            
            lastIndex = match.index + match[0].length;
          });
          
          if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
          }
          
          parent.replaceChild(fragment, textNode);
        }
      }
    });
  }, [removeHighlights]);

  // Search function (depends on removeHighlights and highlightKeywordsInPage)
  const performSearch = useCallback((query) => {
    if (!query || query.trim().length === 0) {
      setSearchResults([]);
      removeHighlights();
      return;
    }

    const keywords = query.trim().split(/\s+/).filter(k => k.length > 0);
    if (keywords.length === 0) {
      setSearchResults([]);
      removeHighlights();
      return;
    }

    const results = [];
    const contentArea = contentRef.current || document.querySelector('[data-searchable-content]');
    
    if (!contentArea) {
      setSearchResults([]);
      return;
    }

    // Get all text nodes and elements with text content
    const walker = document.createTreeWalker(
      contentArea,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // Skip if parent is script, style, or mark (to avoid double highlighting)
          const parent = node.parentElement;
          if (parent && (
            parent.tagName === 'SCRIPT' ||
            parent.tagName === 'STYLE' ||
            parent.tagName === 'MARK' ||
            parent.closest('mark')
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim().length > 0) {
        textNodes.push(node);
      }
    }

    // Search through text nodes
    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      const lowerText = text.toLowerCase();
      
      // Check if any keyword appears in this text
      const hasMatch = keywords.some(keyword => 
        lowerText.includes(keyword.toLowerCase())
      );
      
      if (hasMatch) {
        const parentSection = findParentSection(textNode.parentElement);
        const sectionId = parentSection ? parentSection.id : 'consensus-statement-title';
        const sectionTitle = getSectionTitle(parentSection);
        const excerpt = createExcerpt(text, keywords);
        
        // Check if we already have a result for this section
        const existingResult = results.find(r => r.sectionId === sectionId);
        
        if (!existingResult) {
          results.push({
            sectionId,
            sectionTitle,
            excerpt,
            element: textNode.parentElement
          });
        }
      }
    });

    setSearchResults(results);
    highlightKeywordsInPage(keywords);
  }, [removeHighlights, highlightKeywordsInPage]);

  // Effect to perform search when query changes
  useEffect(() => {
    if (!searchQuery || searchQuery.trim().length === 0) {
      setSearchResults([]);
      removeHighlights();
      return;
    }

    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300); // Debounce search

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, removeHighlights, performSearch]);

  // Cleanup highlights on unmount
  useEffect(() => {
    return () => {
      removeHighlights();
    };
  }, [removeHighlights]);

  // Function to scroll to search result
  const scrollToResult = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Highlight the section briefly
      element.style.transition = 'background-color 0.3s';
      element.style.backgroundColor = '#fef3c7';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb onNavigate={onNavigate} />

      {/* Header */}
      <div id="consensus-statement-title" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center">
          The World Federation of ADHD International Consensus Statement: <br />
          <strong>208 Evidence-based conclusions about the disorder</strong>
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-4">
            The Saudi ADHD Society participated in the World Federation of ADHD project to update the International Consensus Statement on ADHD published by Barkley et al. (2002). The English text below was published in{' '}
            <em>
              Neuroscience and Biobehavioral Reviews, Sept 2021, Issue 128, pages 789-818. doi:{' '}
              <a href="https://dx.doi.org/10.1016/j.neubiorev.2021.01.02" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
                10.1016/j.neubiorev.2021.01.02
              </a>
            </em>{' '}
            and is also available on the{' '}
            <a href="https://www.adhdevidence.org/evidence" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
              ADHD Evidence
            </a>{' '}
            website. The Arabic version is available to{' '}
            <a href="https://hcp.adhd.org.sa/ar/البيان-الدولي-الصادر-بالإجماع-عن-الات/" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
              read online here
            </a>
            , or to download as a PDF from the{' '}
            <a href="https://www.adhd-federation.org/publications/international-consensus-statement.html" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
              World Federation of ADHD
            </a>
            .
          </p>
          <p className="text-slate-600 text-center mb-6">
            You may perform a keyword search using the search box below to quickly find the information you are searching for, or select a section from the table of contents.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-6">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="w-full px-4 py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Search …"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          </form>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-4 bg-white border border-slate-200 rounded-lg shadow-sm p-4 max-h-96 overflow-y-auto">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </h3>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <div
                    key={`${result.sectionId}-${index}`}
                    className="border-b border-slate-100 last:border-b-0 pb-3 last:pb-0"
                  >
                    <button
                      onClick={() => scrollToResult(result.sectionId)}
                      className="text-left w-full hover:bg-slate-50 p-2 rounded transition-colors"
                    >
                      <div className="text-sm font-semibold text-emerald-600 mb-1">
                        {result.sectionTitle}
                      </div>
                      <div className="text-sm text-slate-600 line-clamp-2">
                        {highlightKeywords(result.excerpt, searchQuery.trim().split(/\s+/).filter(k => k.length > 0))}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {searchQuery.trim().length > 0 && searchResults.length === 0 && (
            <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600 text-center">
                No results found for "{searchQuery}"
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-slate-500 italic">
          <strong>Draft Content</strong> References and reference links to be added.
        </p>
      </div>

      {/* Two Column Layout: Content Left, TOC Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Wide Left Column */}
        <div ref={contentRef} className="lg:col-span-8 space-y-8" data-searchable-content>
        {/* Highlights */}
        <section id="highlights" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>ADHD occurs in 5.9 % of youth and 2.5 % of adults.</li>
            <li>Most cases of ADHD are caused by the combined effects of many genetic and environmental risks.</li>
            <li>There are small differences in the brain between people with and without ADHD.</li>
            <li>Untreated ADHD can lead to many adverse outcomes.</li>
            <li>ADHD costs society hundreds of billions of dollars each year, worldwide.</li>
          </ul>
        </section>

        {/* Abstract */}
        <section id="abstract" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Abstract</h2>
          <div className="space-y-4 text-slate-600">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Background</h3>
              <p>
                Misconceptions about ADHD stigmatise affected people, reduce credibility of providers, and prevent/delay treatment. To challenge misconceptions, we curated findings with strong evidence base.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Methods</h3>
              <p>
                We reviewed studies with more than 2000 participants or meta-analyses from five or more studies or 2000 or more participants. We excluded meta-analyses that did not assess publication bias, except for meta-analyses of prevalence. For network meta-analyses we required comparison adjusted funnel plots. We excluded treatment studies with waiting-list or treatment as usual controls. From this literature, we extracted evidence-based assertions about the disorder.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Results</h3>
              <p>
                We generated 208 empirically supported statements about ADHD. The status of the included statements as empirically supported is approved by 80 authors from 27 countries and 6 continents. The contents of the manuscript are endorsed by 366 people who have read this document and agree with its contents.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Conclusions</h3>
              <p>
                Many findings in ADHD are supported by meta-analysis. These allow for firm statements about the nature, course, outcome causes, and treatments for disorders that are useful for reducing misconceptions and stigma.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">1.</small> Introduction
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              Nearly two decades ago, an international team of scientists published the first International Consensus Statement on attention-deficit hyperactivity disorder (ADHD) (Barkley, 2002). They sought to present the wealth of scientific data attesting to the validity of ADHD as a mental disorder and to correct misconceptions about the disorder that stigmatized affected people, reduced the credibility of health care providers, and prevented or delayed treatment of individuals challenged by the disorder.
            </p>
            <p>
              This paper updates the International Consensus Statement by cataloging important scientific discoveries from the last 20 years. We do not intend to present an encyclopaedia of ADHD or guidelines for diagnosis and treatment. The latter can be found in the references cited. Our aim is to provide current and accurate information about ADHD supported by a substantial and rigorous body of evidence.
            </p>
          </div>
        </section>

        {/* Methods */}
        <section id="methods" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">2.</small> Methods
          </h2>
          <p className="text-slate-600">
            We identified evidence-based statements about ADHD through expert scrutiny of published high quality meta-analyses and very large studies. Expert scrutiny was provided by a project Steering Committee which included representatives from the following professional groups dedicated to research and clinical care of ADHD: The World Federation of ADHD, EUropean NETwork for Hyperkinetic DIsorderS (Eunethydis), the American Professional Society of ADHD and Related Disorders, the Canadian ADHD Resource Alliance, the Asian Federation of ADHD, the Latin American League of ADHD, the Australian ADHD Professionals Association, the Israeli Society of ADHD, the Saudi ADHD Society, Neurodevelopmental Disorders Across Lifespan section of the European Psychiatric Association, the ADHD Guidelines Group of the Association of Medical Scientific Societies in Germany, the ADHD Network of European College of Neuropsychopharmacology, the Chinese Society of Child and Adolescent Psychiatry and the ADHD Section of the World Psychiatric Association.
          </p>
        </section>

        {/* Overview of Results */}
        <section id="overview-of-results" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">3.</small> Overview of results
          </h2>
          <p className="text-slate-600">
            Our search strategy generated 208 empirically supported statements about ADHD. For details, see the PRISMA diagram in Supplemental Figure 1. The status of the included statements as empirically supported has been approved by the 80 authors from 27 countries and 6 continents (Supplemental Figure 2). It has been endorsed by 366 people who have read this document and agree with its contents (Supplemental Table 2). Table 1 summarizes our findings along with the item numbers that support each statement. A limitation of this consensus statement is that we do not report well-established research findings for which meta-analyses or very large studies do not exist. The absence of such a study is not always an indication of knowledge of absence of an effect.
          </p>
        </section>

        {/* Brief History */}
        <section id="brief-history" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">4.</small> A Brief history: ADHD is not a new disorder
          </h2>
          <p className="text-slate-600 mb-4">
            The concept of ADHD has a long history, starting with clinical reports from European countries. The clinical significance of the signs and symptoms of the disorder has been recognized for over two centuries. Although these early reports did not use the term "ADHD", they described children who showed the symptoms and impairments we now recognize as ADHD. Here are highlights from the early history of ADHD:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
            <li>1775: Melchior Adam Weikard, a German physician, wrote the first textbook description of a disorder with the hallmarks of ADHD.</li>
            <li>1798: Alexander Crichton from the Royal College of Physicians (United Kingdom) described a similar disorder in a medical textbook.</li>
            <li>1845: Heinrich Hoffmann, who later became head of the first psychiatric hospital in Frankfurt am Main, Germany, described hyperactivity and attention deficits in a children's book which documented ADHD-like behaviors and their associated impairments.</li>
            <li>1887-1901: Désiré-Magloire Bourneville, Charles Boulanger, Georges Paul-Boncour, and Jean Philippe described an equivalent of ADHD in French medical and educational writings.</li>
            <li>1902: George Still, a physician in the United Kingdom, wrote the first description of the disorder in a scientific journal.</li>
            <li>1907: Augusto Vidal Perera wrote the first Spanish compendium of child psychiatry. He described the impact of inattention and hyperactivity among schoolchildren.</li>
            <li>1917: the Spanish neurologist and psychiatrist Gonzalo Rodriguez-Lafora described symptoms of ADHD in children and said they were probably caused by a brain disorder with genetic origins.</li>
            <li>1932: Franz Kramer and Hans Pollnow, from Germany, described an ADHD-like syndrome and coined the term "hyperkinetic disorder", which was later adopted as a term by the World Health Organization.</li>
            <li>1937: Charles Bradley, from the USA, discovered that an amphetamine medication reduced ADHD-like symptoms.</li>
            <li>1940s: ADHD-like symptoms in children described as "minimal brain dysfunction"</li>
            <li>1956–1958: First hint in follow-up study of the persistence of minimal brain dysfunction-related behaviors into adulthood.</li>
            <li>1960s: U.S. Food and Drug Administration approved methylphenidate (Ritalin) for behavioral disorders in children.</li>
            <li>1970s to today: Diagnostic criteria for ADHD evolved based on research showing that the diagnosis predicts treatment response, clinical course, and family history of the disorder.</li>
          </ol>
          <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-slate-700">
              <strong>See also:</strong>{' '}
              <a href="https://adhd.org.sa/en/2023/11/18/a-brief-history-of-adhd/" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
                A brief history of ADHD
              </a>
            </p>
          </div>
        </section>

        {/* How is ADHD Diagnosed */}
        <section id="how-diagnosed" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">5.</small> How is ADHD diagnosed?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              ADHD can only be diagnosed by a licensed clinician who interviews the parent or caregiver and/or patient to document criteria for the disorder. It cannot be diagnosed by rating scales alone, neuropsychological tests, or methods for imaging the brain.
            </p>
            <p>
              The diagnosis of ADHD has been criticized as being subjective because it is not based on a biological test. This criticism is unfounded. ADHD meets standard criteria for validity of a mental disorder established by Robins and Guze (1970). The disorder is considered valid because: 1) well-trained professionals in a variety of settings and cultures agree on its presence or absence using well-defined criteria and 2) the diagnosis is useful for predicting a) additional problems the patient may have (e.g., difficulties learning in school); b) future patient outcomes (e.g., risk for future drug abuse); c) response to treatment (e.g., medications and psychological treatments); and d) features that indicate a consistent set of causes for the disorder (e.g., findings from genetics or brain imaging). Professional associations have endorsed and published guidelines for diagnosing ADHD.
            </p>
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>See also:</strong>{' '}
                <a href="https://cpg.adhd.org.sa" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
                  Evidence Based Clinical Practice Guidelines for the Diagnosis and Management of ADHD in Saudi Arabia
                </a>
              </p>
            </div>
            <p className="font-semibold text-slate-900">The main features of the diagnosis are:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The diagnosis requires: 1) the presence of developmentally inappropriate levels of hyperactive-impulsive and/or inattentive symptoms for at least 6 months; 2) symptoms occurring in different settings (e.g., home and school); 3) symptoms that cause impairments in living; 4) some of the symptoms and impairments first occurred in early to mid-childhood; and 4) no other disorder better explains the symptoms.</li>
              <li>The clinical presentation of ADHD can be described as primarily inattentive, primarily hyperactive-impulsive, or combined, depending on the nature of their symptoms. Meta-analyses indicate that inattention is more strongly associated with academic impairment, low self-esteem, negative occupational outcomes, and lower overall adaptive functioning. Hyperactive-impulsive symptoms are associated with peer rejection, aggression, risky driving behaviors, and accidental injuries.</li>
              <li>ADHD impairs the functioning of highly intelligent people, so the disorder can be diagnosed in this group.</li>
              <li>In adolescence and young adulthood, many individuals with a history of childhood ADHD continue to be impaired by the disorder, although they often show reduced hyperactivity and impulsivity while retaining symptoms of inattention.</li>
              <li>Many large epidemiologic and clinical studies show that ADHD often co-occurs with other psychiatric disorders, especially depression, bipolar disorder, autism spectrum disorders, anxiety disorders, oppositional defiant disorder, conduct disorder, eating disorders, and substance use disorders. Their presence does not rule out a diagnosis of ADHD.</li>
              <li>A meta-analysis comprising 25 studies with over eight million participants found that children and adolescents who are relatively younger than their classmates are more likely to have been diagnosed with ADHD.</li>
            </ol>
          </div>
        </section>

        {/* How Common is ADHD */}
        <section id="how-common" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">6.</small> How common is ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            ADHD occurs throughout the developed and developing world and is more common in males compared with females. It has not become more common over the past three decades although due to increased recognition by clinicians, the disorder is more likely to be diagnosed today than in prior decades.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
            <li>A meta-analysis of 19 studies with over 55,000 participants found that 5.9 % of youths meet diagnostic criteria for ADHD. Another meta-analysis, with 135 studies and about a quarter of a million youths, found no significant differences in prevalence between North America and Europe, Asia, Africa, South America, and Oceania.</li>
            <li>The latter meta-analysis found no increase in the prevalence of ADHD in children and adolescents over the past three decades. Although the prevalence of ADHD has not changed in this time period, large studies from the U.S. and Sweden indicate that ADHD is more likely to have been diagnosed in recent years, which reflects changes in administrative and clinical practices.</li>
            <li>A meta-analysis of six studies with over 5300 participants estimated the prevalence of ADHD in adulthood to be 2.5 %. A meta-analysis of 20 studies encompassing 13 countries and seven regions/metropolitan areas, involving more than 26,000 participants, estimated that 2.8 % of adults meet criteria for ADHD.</li>
            <li>A meta-analysis of nine studies with a total of over 32,000 older adults found a prevalence of 2.2 % based on ADHD rating scales, dropping to 1.5 % when limited to persons at least fifty years old.</li>
            <li>A meta-analysis of 19 studies encompassing over 150,000 U.S. Black youths under 18 years old reported an ADHD prevalence rate of 14 %.</li>
            <li>ADHD is more common in males. A meta-analysis of parent ratings of symptoms in 29 studies with over 42,000 participants, and teacher ratings in 24 studies with over 56,000 participants, found a roughly two-to-one male/female ratio in youth.</li>
          </ol>
        </section>

        {/* What Causes ADHD */}
        <section id="what-causes" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">7.</small> What causes ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            For most people with ADHD, many genetic and environmental risk factors accumulate to cause the disorder. The environmental risks for ADHD exert their effects very early in life, during the fetal or early postnatal period. In rare cases, however, ADHD-like symptoms can be caused by extreme deprivation early in life, a single genetic abnormality, or traumatic brain injury early in life. These findings are helpful to understand the causes of ADHD but are not useful for diagnosing the disorder.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">7.1 Genetic causes of ADHD</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
            <li>A review of 37 twin studies from the United States, Europe, Scandinavia, and Australia found that genes and their interaction with the environment must play a substantial role in causing ADHD.</li>
            <li>In a genomewide study, an international team analyzed DNA from over 20,000 people with ADHD and over 35,000 without ADHD from the United States, Europe, Scandinavia, China, and Australia. They identified many genetic risk variants, each having a small effect on the risk for the disorder.</li>
            <li>Additional genes have been implicated by meta-analyses, but their status as risk genes remains uncertain until validated in a genomewide study.</li>
            <li>The polygenic risk for ADHD predicts ADHD symptoms in the population, suggesting that the genetic causes of ADHD as a disorder also influence sub-threshold levels of ADHD symptoms in the population.</li>
            <li>In the population, those with a high polygenic risk for ADHD are more likely to have been diagnosed with ADHD, anxiety, or depression.</li>
            <li>ADHD can also be the result of rare single gene defects or abnormalities of the chromosomes.</li>
            <li>Family, twin, and DNA studies show that genetic and environmental influences are partially shared between ADHD and many other psychiatric disorders.</li>
            <li>Very large studies of families suggest that ADHD shares genetic or familial causes with autoimmune diseases, hypospadias, and intellectual disability.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Environmental correlates of ADHD: exposure to toxicants</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={34}>
            <li>A pair of meta-analyses found small correlations between lead burden and inattention symptoms (27 studies, over 9300 youths) and hyperactivity-impulsivity symptoms (23 studies, over 7800 youths).</li>
            <li>Three meta-analyses with over twenty studies covering more than three million persons have found prenatal exposure to maternal smoking associated with a greater than 50 % increase in incidence of ADHD.</li>
            <li>A meta-analysis of nine studies spanning three continents and over 100,000 participants found that childhood exposure to secondhand cigarette smoke was associated with a 60 % greater likelihood of ADHD.</li>
            <li>In a meta-analysis of 15 double-blind, placebo-controlled trials with 219 participants, artificial food dyes were associated with a small increase in hyperactivity in children.</li>
            <li>In a Taiwanese study of over 10,000 births, maternal use of acetaminophen during pregnancy was associated with a 33 % greater likelihood of ADHD in their children.</li>
            <li>A nationwide study using the Danish national registers looked at 913,000 children born between 1997 and 2011. Prenatal exposure to the anti-epileptic drug valproate was associated with a 50 % greater risk of ADHD.</li>
            <li>In a Norwegian registry study, 297 children with ADHD and 553 controls were randomly sampled from an eligible population of over 24,000. Children of mothers in the highest quintile of phthalate metabolite levels were three times more likely to have had ADHD as children compared with those in the bottom quintile.</li>
            <li>Organophosphate pesticides are potent neurotoxins. In a sample of 1139 children from the U.S. population, a tenfold increase in the organophosphate metabolite dimethyl alkylphosphate (DMAP) was associated with 55 % increase in the probability of having ADHD.</li>
            <li>A meta-analysis found no significant effect of two classes of air pollutants – particulate matter (six studies, over 51,000 persons) and nitrogen oxides (five studies, over 51,000 persons).</li>
            <li>A nationwide cohort study used the South Korean national health insurance registry to identify all 7200 hospital admissions of adolescents with a primary diagnosis of ADHD from 2013 to 2015, and daily readings of three air pollutants from 318 monitoring stations distributed across the country over the same period.</li>
            <li>A meta-analysis of nine European population studies encompassing 4826 mother-child pairs examined the relationship between exposure to Perfluoroalkyl Substances (PFAS) via breast milk in infancy and development of ADHD. No associations were found with ADHD in offspring.</li>
            <li>A meta-analysis of seven studies encompassing a total of over 25,000 participants from six countries on three continents found no evidence of an association between sugar consumption and ADHD in youth.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Environmental correlates of ADHD: nutrient deficiencies</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={46}>
            <li>A pair of meta-analyses found no difference in serum iron levels in youths with ADHD (six studies, 617 participants) but small-to-moderate reductions in serum ferritin, a protein that stores iron (ten studies, over 2100 participants).</li>
            <li>A meta-analysis of nine studies and 586 people found moderately lower overall blood levels of omega-3 PUFAs in ADHD than non-ADHD youth.</li>
            <li>A nationwide population-based case-control study using the Finnish national registers compared 1067 patients with ADHD born between 1998 and 1999 with 1067 matched controls. Lower maternal vitamin D levels were associated with a roughly 50% greater likelihood of ADHD in their children.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Environmental correlates of ADHD: events during pregnancy and birth</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={49}>
            <li>A meta-analysis of twelve studies with over 6000 participants found a threefold increase in the rate of ADHD among very/extremely preterm or very/extremely low birth weight babies.</li>
            <li>A meta-analysis of six studies combining 1.4 million people found that children whose mothers had hypertensive disorders during pregnancy had a 25 % increase in the rate of ADHD.</li>
            <li>A nationwide population-based cohort study using Swedish registers and covering more than two million children, 115,000 of them with ADHD, found that maternal preeclampsia during pregnancy is associated with a 15 % greater subsequent likelihood of ADHD in offspring.</li>
            <li>Two meta-analyses, one with seven studies with over 28,000 participants and another with three studies and over 1.4 million participants, found that children of obese mothers were roughly 60 % more likely to develop ADHD.</li>
            <li>A meta-analysis of two large cohort studies with a combined total of over 3.1 million persons found a slight but significant association between maternal hyperthyroidism during pregnancy and ADHD in offspring.</li>
            <li>A nationwide cohort study using Danish national registers examined over a million births, comparing offspring of mothers with a single prior miscarriage and mothers with more than one prior miscarriage with mothers with no history of miscarriage.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Environmental correlates of ADHD: deprivation, stress, infection, poverty and trauma</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={55}>
            <li>A Taiwan-wide longitudinal cohort study based on the country's universal coverage National Health Insurance Research Database compared over 14,000 enterovirus patients (ER71) with an equal number of controls matched by age and sex.</li>
            <li>A nationwide population-based cohort study using Danish registers compared over 29,000 children born to women who lost a close relative during pregnancy with a million other children in the same cohort and found that boys born to these women were twice as likely to have ADHD.</li>
            <li>A U.S. population-based study of over 14,000 participants in the National Longitudinal Study of Adolescent Health found that after adjusting for demographic, socioeconomic, and familial risk factors for child maltreatment, ADHD inattentive type was associated with having been exposed to sexual abuse and physical neglect.</li>
            <li>A nationwide population-based cohort study of over 18,000 children from the South Korean National Health Insurance database found that lower levels of family income were associated with increased rates of ADHD.</li>
            <li>A Danish national register longitudinal cohort study of a million people found that Rutter's indicators of adversity were predictive of ADHD.</li>
            <li>A countrywide population study using Danish national registers looked at over 630,000 youths and found dose-response relationships between lower parental educational attainment, parental unemployment, and parental relative poverty and higher risk of ADHD in offspring.</li>
            <li>A Swedish national register cohort study of over 540,000 people found a dose-response relationship between cumulative indicators of adversity in the family and ADHD.</li>
            <li>In a sample of 4122 U.S. youths with ADHD from the 2016 U.S. National Survey of Children's Health, greater family cohesion and community support decreased the risk for moderate to severe ADHD.</li>
          </ol>
        </section>

        {/* Brain Studies */}
        <section id="brain-studies" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">8.</small> What have we learned from studying the brains of people with ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            There are two broad classes of research findings about the brains of people with ADHD. The first comes from studies of the performance of patients on psychological tests that study mental processes. The second comes from methods that directly examine brain structure or function with neuroimaging scans. Although many of these studies have found differences between groups of people who are and are not diagnosed with ADHD, the differences are typically small and do not dramatically differ between people with ADHD and those with other disorders. They are, therefore, not useful for diagnosing the disorder. These differences are not caused by drug treatment and, for some patients, diminish or change as patients grow out of the disorder.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">8.1 Performance deficits in psychological processes</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={63}>
            <li>A meta-analysis of 137 studies with over 9400 participants of all ages found ADHD to be associated with moderately lower IQ and reading scores and larger decreases in spelling and arithmetic scores.</li>
            <li>A series of meta-analyses found that people with ADHD had small to moderate difficulties with abstract problem solving and working memory (12 studies, 952 persons), focused attention (22 studies, 1493 persons), sustained attention (13 studies, 963 persons), and verbal memory (8 studies, 546 persons).</li>
            <li>Two meta-analyses, one with 21 studies and over 3900 participants, the other with 15 studies with over a thousand participants, found that those diagnosed with ADHD have a moderate tendency to favor small immediate rewards over large delayed rewards.</li>
            <li>A meta-analysis of 37 studies with more than 2300 participants found a small-to-moderate association between ADHD and risky decision-making.</li>
            <li>A recent meta-meta-analysis included 34 meta-analyses of neurocognitive profiles in ADHD (all ages) concerning 12 neurocognitive domains. Those with ADHD had moderate impairments in multiple domains (working memory, reaction time variability, response inhibition, intelligence/achievement, planning/organization).</li>
            <li>A meta-analysis of 49 studies and over 8200 children and adolescents found moderate impairments in working memory in those with ADHD. These deficits declined with age.</li>
            <li>Among youths with ADHD, a series of meta-analyses found no significant sex differences in either total ADHD symptoms (15, studies, over 3400 youths), inattention symptoms (26 studies, over 5900 youths), or hyperactivity-impulsivity symptoms (24 studies, over 4900 youths).</li>
            <li>A meta-analysis of randomized controlled trials (RCTs) with preschoolers found that cognitive training led to moderate improvement in working memory (23 studies, over 2000 participants) and small-to-moderate improvement in inhibitory control (26 studies, over 2200 participants).</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">8.2 Differences in the brain found by neuroimaging studies</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={71}>
            <li>An analysis of structural magnetic resonance imaging (MRI) data from 36 cohorts with a total of over 4100 participants found slightly reduced total cortical surface area in children with ADHD.</li>
            <li>Comparative meta-analyses show that structural grey matter volume reductions in basal ganglia and insula are disorder-specific relative to OCD in 30 data sets with 1870 participants.</li>
            <li>A meta-analysis of ten diffusion tensor imaging studies with 947 participants found that the most consistent white matter differences between those with and without ADHD were located in the splenium of the corpus callosum.</li>
            <li>A meta-analysis of 21 functional MRI studies with 607 participants found that those with ADHD showed consistent and replicable under-activation in typical regions of inhibitory control such as right inferior frontal cortex, supplementary motor area and the basal ganglia relative to typically developing individuals.</li>
            <li>A meta-analysis of nine studies with over 1250 research participants found that elevations in the theta/beta on the electroencephalogram cannot be considered a reliable diagnostic measure for ADHD although it may have prognostic value in some patients.</li>
            <li>A meta-analysis of six studies with 148 participants examined mismatch negativity, which assesses the integrity of auditory sensory memory and involuntary attention switching.</li>
            <li>Meta-analyses and systematic reviews showed that the medications used to treat ADHD are not associated with observed deficits in brain structure, but with improved brain function, most prominently in inferior frontal and striatal regions.</li>
          </ol>
        </section>

        {/* Medical Problems */}
        <section id="medical-problems" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">9.</small> What kinds of non-psychiatric medical problems commonly occur among people with ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            A relatively new area of research into ADHD is examining what types of medical problems are more common than expected among people with ADHD. As you read this section, keep in mind that not all people with ADHD will suffer from all, or even only one, of these disorders.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">9.1 Obesity</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={78}>
            <li>A Swedish national register study of over 2.5 million people found ADHD patients had a threefold greater risk of obesity relative to their non-ADHD siblings and cousins.</li>
            <li>A meta-analysis found that compared with typically developing people, children and adolescents with unmedicated ADHD were about 20 % more likely to be overweight or obese (15 studies, over 400,000 participants), and adults with unmedicated ADHD almost 50 % more likely to be overweight or obese (9 studies, over 45,000 participants).</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">9.2 Allergies and asthma</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={80}>
            <li>A Swedish national register study of over 1.5 million people found that those with asthma were 45 % more likely to have ADHD even after adjustment for relevant variables.</li>
            <li>In a meta-analysis of six longitudinal studies with over 50,000 participants, those with asthma or atopic eczema were a third more likely to have ADHD than controls.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">9.3 Diabetes Mellitus</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={82}>
            <li>A retrospective analysis of over 650,000 children and adolescents in German diagnosis and prescription databases found ADHD was 40 % more likely to be diagnosed among children with type 1 diabetes (T1DM).</li>
            <li>A German multi-center registry study of over 56,000 children and adolescents found that those with both ADHD and T1DM suffered twice as often from diabetic ketoacidosis compared with diabetic patients without ADHD.</li>
            <li>A longitudinal study using the Taiwan National Health Insurance Research Database enrolled over 35,000 patients with ADHD and over 70,000 age- and sex-matched controls. Adolescents and young adults with ADHD were about three times more likely to develop type 2 diabetes mellitus.</li>
            <li>A cohort study using multiple Swedish national registers looked at over 1.6 million adults aged 50–64 years. Prevalence of type 2 diabetes mellitus was 70 % greater among adults with ADHD.</li>
            <li>A meta-analysis found that maternal pre-existing type 1 diabetes was associated with a small increased risk of ADHD in offspring (4 studies, over five million people).</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">9.4 Other somatic disorders</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={87}>
            <li>A meta-analysis of 18 studies with more than 2500 children and adolescents found a moderate association between sleep-disordered breathing and ADHD.</li>
            <li>A meta-analysis of sleep in adults with ADHD found no significant differences with normally developing adults, as measured by polysomnography.</li>
            <li>In a Norwegian national registry study of over 1.2 million males and over 1.2 million females, males with ADHD were 30 % more likely to be diagnosed with psoriasis, and women with ADHD more than 50 % more likely to be diagnosed with psoriasis, than normally developing controls.</li>
            <li>A Taiwan nationwide population cohort study of over 8000 people with ADHD and 32,000 matched controls explored associations with autoimmune diseases.</li>
            <li>A population-based cohort study of over 900,000 Danish children found that epilepsy was associated with a 2.7-fold increased risk for ADHD.</li>
            <li>A countrywide registry study of 1.9 million Swedes reported that those with epilepsy were three and a half times more likely to have ADHD.</li>
            <li>A longitudinal study using the Taiwan Health Insurance Research Database compared almost 18,000 adolescents and young adults with ADHD with over 70,000 age- and sex-matched controls. Those with ADHD were over three times more likely to develop sexually transmitted infections.</li>
            <li>A Danish national register cohort study of 1.1 million people found that hospitalization for serious infections was associated with a subsequent doubling in the rate of ADHD diagnosis.</li>
            <li>A Danish national register study of almost a million people found that children with autoimmune disease were 24 % more likely to develop ADHD.</li>
            <li>Using Taiwan's nationwide population-based dataset, over 116,000 children with ADHD were compared with the same number of randomly selected children without ADHD. Those with ADHD were much more likely to have significant abnormalities of the eye.</li>
            <li>In a study of over 2.5 million German youth, those with ADHD were nine times more likely to have metabolic disorders, five times more likely to develop viral pneumonia, four times more likely to have white blood cell disorders.</li>
            <li>A study of over 59,000 boys diagnosed with ADHD and over 52,000 healthy boys in Taiwan reported that those in the ADHD group were twice as likely to develop testicular dysfunction.</li>
            <li>A nationwide population cohort study using the Swedish national registers compared over 19,000 children with a diagnosis of biopsy-verified celiac disease with over 95,000 matched child controls.</li>
            <li>A Swedish nationwide study using national registers examined medical records of all individuals aged 18–64 years who were residing in Sweden during 2013 and identified 41,840 who filled at least one prescription for ADHD medicines.</li>
          </ol>
        </section>

        {/* Impact on Patients and Families */}
        <section id="impact" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">10.</small> What is the impact of ADHD on patients and families?
          </h2>
          <p className="text-slate-600 mb-4">
            ADHD is a disorder associated with serious distress and/or impairments in living. Although, as documented below, many severe adverse outcomes have been associated with ADHD, the typical patient does not experience all, or even most, of these problems. Many patients live enjoyable and productive lives, especially if they receive treatment.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.1 Quality of life</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={101}>
            <li>A meta-analysis of seven studies with over 5000 youths and their parents reported large impairments in the quality of life of youths with ADHD relative to typically developing peers, regardless of whether evaluated by the youths themselves or by their parents.</li>
            <li>A meta-analysis of 17 studies encompassing 647 families (over 2300 participants) evaluated the quality of life of parents whose children had ADHD relative to parents with typically developing children. Parents of the former reported a moderate deficit in quality of life relative to parents of the latter.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.2 Emotional and social impairment</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={103}>
            <li>A study of over 8600 youths from the U.S. National Health Interview Survey found that those with ADHD were four times as likely to have a high level of emotional and conduct problems and three times as likely to have a high level of peer problems.</li>
            <li>A meta-analysis of 22 studies with over 21,000 participants found that youths with ADHD were strongly impaired in the ability to modulate their reactivity to novel or stressful events.</li>
            <li>A meta-analysis found that children with ADHD had medium-to-large impairments in socializing with peers as measured by rejection/likability, popularity, and friendships (61 studies, over 24,000 children).</li>
            <li>A study of over 53,000 U.S. children from the National Survey of Children's Health found that those with ADHD were 2.4 times as likely to engage in bullying.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.3 Accidental injuries</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={107}>
            <li>A nationwide cohort study of over 50,000 youths with ADHD and an equal number of age-, sex-, and comorbidity-matched controls drawn from Taiwan's National Health Insurance Research Database reported that having ADHD was associated with a more than three-quarters greater likelihood of burn injury.</li>
            <li>A meta-analysis of 32 studies covering more than four million people found that those with ADHD had a 40–50 % greater risk of accidental physical injuries.</li>
            <li>A Swedish national registers study followed 17,408 individuals with ADHD from 2006 to 2009 and found that patients with ADHD had an almost 50 % greater risk of serious transport accidents.</li>
            <li>A U.S. study of over 8000 high school and collegiate athletes (predominantly male football players) found that those with ADHD were three times as likely to have had three or more reported concussions.</li>
            <li>A meta-analysis of 16 studies encompassing over 175,000 people estimated that controlling for mileage driven, those with ADHD were 23 % more likely to be involved in vehicular crashes.</li>
            <li>A retrospective cohort study of over 18,000 New Jersey drivers found that the crash risk for those with ADHD was a third greater than for those without.</li>
            <li>A meta-analysis of five studies, comprising over three thousand patients with minor traumatic brain injury (mTBI) and over nine thousand controls found that those with mTBI were twice as likely to have ADHD than those without mTBI.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.4 Premature death and suicide</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={114}>
            <li>A Danish study of almost two million people found ADHD is associated with a small risk for premature death, mostly due to accidents.</li>
            <li>A cohort study of more than 2.2 million Taiwanese found no increased risk of death from natural-causes associated with ADHD. But people with ADHD had twice the rate of suicide, twice the rate of death by homicide, and a 30 % greater rate of death from unintentional injury.</li>
            <li>Using nationwide registers in Denmark, a cohort study of 2.9 million people reported a fourfold higher rate of suicide attempts and deaths in patients with ADHD.</li>
            <li>A meta-analysis found that persons with ADHD attempted suicide at twice the rate of typically developing people (six studies, over 65,000 persons), had over three times the rate of suicidal ideation (23 studies, over 70,000 persons), and over six times the rate of completed suicide (four studies, over 130,000 persons).</li>
            <li>A Taiwanese study of over 20,000 adolescents and young adults with ADHD and over 61,000 age- and sex-matched non-ADHD individuals found that those with ADHD were almost four times as likely to attempt suicide, and over six times as likely to repeat suicide attempts.</li>
            <li>In a prospective cohort study of more than 2.6 million Swedes, adults with ADHD had a small increase in premature death, mostly due to accidents and suicide.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.5 Crime and delinquency</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={120}>
            <li>A study of the Danish population using nationwide registers found that, compared with other youth, those diagnosed with ADHD were more than twice as likely to be convicted of criminal offenses and were three times as likely to be incarcerated.</li>
            <li>A meta-analysis comprising 21 studies and over 19,500 prison inmates found that the prevalence of ADHD in prisons based on interview diagnoses was 20.5 % with no differences observed between males and females or adolescents and adults.</li>
            <li>A study using a nationally representative American sample of over 5000 adults found that those with ADHD were over twice as likely to be perpetrators of physical dating violence, and 65 % more likely to be victims of such violence.</li>
            <li>In a nationwide study of over 21,000 Icelandic adolescents and young adults, 14 % reported having been interrogated at a police station. Of these, 15 % reported making a false confession. Those with ADHD were twice as likely to make a false confession.</li>
            <li>A study using the Danish national registries looked at violent crimes against youths aged 7–18 years, among a total of 678,000 individuals. Children with ADHD were 2.7 times more likely to be victims of violent crimes than their typically developing peers.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.6 Educational underachievement</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={125}>
            <li>A study of a U.S. sample of almost 30,000 adults found that those with ADHD were twice as likely not to have graduated from high school on time, after adjusting for other psychiatric disorders.</li>
            <li>A nationwide cohort study of over 750,000 Scottish school children using linked national registers identified those who had been prescribed medicine for ADHD. Even while receiving medication, these children were more than three times as likely as typically developing peers to have low educational achievement.</li>
            <li>A meta-analysis of ten studies and 830 youths found that ADHD was strongly associated with poorer performance on measures of overall, expressive, receptive, and pragmatic language.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.7 Substance use disorders</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={128}>
            <li>A meta-analysis of twelve studies covering over 5400 people found that those with ADHD were almost three times more likely to be nicotine-dependent.</li>
            <li>A meta-analysis found that ADHD was associated with a more than twofold greater odds of alcohol-use disorders (13 studies, over 20,000 participants) and nicotine-related disorder (14 studies, over 1800 participants).</li>
            <li>A Swedish study of over half a million people found a more than threefold association between ADHD and subsequent drug use disorders after adjusting for sex and parental education.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">10.8 Other</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={131}>
            <li>Studies of 2.7 million girls from Denmark, 380,000 from Sweden and 7500 from Taiwan found that those with ADHD were more likely to have teen pregnancies than those without ADHD.</li>
            <li>A study of over 36,000 people from the U.S. reported that ADHD increased the risks for problem gambling, spending too much money, reckless driving, and quitting a job without a plan for what to do next.</li>
            <li>A nationwide study using Taiwan's National Health Insurance Research Database compared 675 adults with ADHD and 2025 without ADHD, matched by age and sex. After adjusting for other psychiatric disorders, urbanization level of residence, and monthly income, those with ADHD had 3.4 times the risk of developing dementia.</li>
            <li>A meta-analysis of nine studies encompassing almost a million and a half people found that ADHD is associated with a threefold greater risk of poisoning in children.</li>
            <li>A longitudinal study of some 15,000 U.S. adolescents reported that those with ADHD had a 12 % reduction in employment and a 34 % reduction in earnings relative to non-ADHD siblings.</li>
            <li>Using Danish registers, a nationwide population study of over 675,000 youths between the ages of 7 and 18 found that youths with ADHD were 3.7 times as likely to be reported as victims of sexual crimes than normally developing controls.</li>
          </ol>
        </section>

        {/* Economic Burden */}
        <section id="economic-burden" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">11.</small> What is the economic burden of ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            Given the many adverse outcomes associated with ADHD, it will come as no surprise to readers that these effects have a substantial economic cost to individual patients, families, and society.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={137}>
            <li>A systematic review of seven European studies of hundreds of thousands of participants estimated total ADHD-related costs in the Netherlands as €9860 to €14,483 per patient per year, with annual national costs more than €1 billion.</li>
            <li>A review of the costs of child, youth and adult ADHD in Australia estimated the total annual costs to be over $20 billion Australian dollars, or $25,000 per person with ADHD.</li>
            <li>A systematic review of 19 U.S. studies of hundreds of thousands of people found that ADHD was associated with overall national annual costs from $143 to $266 billion, mostly associated with adults ($105 to $194 billion).</li>
            <li>A study with over 7000 workers in ten nations found that those with ADHD had an average of 22 annual days of lost role performance compared with those without ADHD.</li>
            <li>A study of a U.S. national Fortune 100 company's database of over 100,000 beneficiaries compared healthcare costs for youths with ADHD with matched controls without ADHD. The annual average cost per family member was $2728 for non-ADHD family members of ADHD patients, almost double the $1440 for family members of matched controls.</li>
            <li>German health insurance records, including over 25,000 patients with ADHD, indicate that patients with ADHD cost roughly €1500 more annually than those without ADHD.</li>
            <li>Using the National Health Insurance Service claims data for the population aged 19 years or younger in South Korea (69,353 diagnosed with ADHD), the total annual economic burden due to ADHD was estimated to be $47.55 million.</li>
            <li>Using the Danish national registers, over 5000 adults with a diagnosis of ADHD in adulthood who had not received a diagnosis in childhood were identified. On average, adults with ADHD had an annual economic burden of just over €20,000 compared with their normally developing siblings.</li>
            <li>A nationwide cohort study of over 445,000 people in the Swedish national registers compared healthcare costs for three groups: those with childhood ADHD that persisted into adulthood, those whose ADHD remitted in adulthood, and those who never had ADHD.</li>
            <li>A nationwide population study of over 83,000 persons with ADHD and over a third of a million non-ADHD controls matched by age and sex used Danish national registries to calculate the net socioeconomic cost of ADHD. Relative to controls, and summing net direct health costs and net losses from lower income and employment, the yearly average cost per individual with ADHD came to just over €16,000.</li>
            <li>Using a database that tracks more than sixty German nationwide health insurance programs, a study of five million member records identified 2380 individuals first diagnosed with ADHD as adults. Their direct healthcare costs in the year following diagnosis averaged €4000.</li>
          </ol>
        </section>

        {/* Medications */}
        <section id="medications" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">12.</small> Which medications are safe and effective for treating ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            As determined by governmental regulatory agencies around the world, several medications are safe and effective for treating ADHD symptoms as determined by randomized controlled clinical trials that typically study patients for several weeks. These medications, which are as efficacious, or more efficacious, than many medications used for non-psychiatric disorders, are classified as either stimulants (methylphenidate and amphetamine) or non-stimulants (atomoxetine, extended release guanfacine, and extended release clonidine).
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">12.1 Effects of medications on symptoms: results from randomized, controlled clinical trials</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={148}>
            <li>Protocols for using medications for ADHD are well described in detailed guidelines prepared by professional health care associations.</li>
            <li>A network meta-analysis found stimulants to be highly effective in reducing the symptoms of ADHD. Compared with placebo, as rated by clinicians, amphetamines were associated with large improvements in all age groups (youths 6 studies with 2179 participants, adults 5 studies with 1521 participants), methylphenidate with large improvements in youths (9 studies, 2677 participants) and moderate ones in adults (11 studies, 2909 participants).</li>
            <li>A meta-analysis of 18 studies with over 2000 adults with ADHD found three amphetamine derivatives (dextroamphetamine, lisdexamfetamine, and mixed amphetamine salts) to be associated with moderate reductions in ADHD symptoms.</li>
            <li>A meta-analysis of 19 parallel group trials with over 1600 participants found methylphenidate produced moderate to large improvements in teacher-rated ADHD symptoms, teacher-rated behavior, and parent-rated quality of life.</li>
            <li>A meta-analysis found dexmethylphenidate strongly reduced youth ADHD symptoms relative to placebo (seven studies, almost 1500 participants), and had three times the clinical response rate (four studies, over 600 participants).</li>
            <li>A meta-analysis of seven studies with over 1600 participants reported that atomoxetine moderately reduced ADHD symptoms.</li>
            <li>A meta-analysis found that methylphenidate (13 studies, over 2200 adults) and lisdexamfetamine (five studies, over 2300 adults) led to small-to-moderate reductions in symptoms of emotional dysregulation.</li>
            <li>A meta-analysis reported moderate-to-strong improvements in ADHD symptoms with methylphenidate in ADHD patients with borderline intellectual functioning or intellectual disability (8 studies, 423 children).</li>
            <li>A meta-analysis of 23 studies with over 2900 children with ADHD reported that stimulant medications reduced anxiety by 14 % relative to placebo.</li>
            <li>A meta-analysis of nine studies with over 1300 participants found stimulants to be highly effective in reducing aggression, oppositional behavior, and conduct problems in youths with ADHD (with and without oppositional defiant disorder) and conduct disorder.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">12.2 Effects of medications on impairments associated with ADHD: results from naturalistic studies</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={158}>
            <li>A Swedish registry study of over 650,000 students found that treatment with ADHD medication for three months resulted in a more than nine-point gain in grade point sum (on a scale of 0–320); treatment was associated with an increase in the probability of completing upper secondary school by two-thirds.</li>
            <li>A Swedish national register study of over 61,000 youths with ADHD found that their test scores were higher during periods they were taking medication vs non-medicated periods.</li>
            <li>A Swedish cohort study of over 25,000 ADHD patients found a one-third reduction in criminality among men receiving ADHD medication, and a 40 % reduction for women.</li>
            <li>A Danish cohort study of over 700,000 people, including 4557 with ADHD, found that among teenagers with ADHD, stimulant treatment was associated with a decrease in rates of injuries (30 % for ten-year olds and 40 % for twelve-year olds).</li>
            <li>Using the Swedish national registries, a study followed 9421 youths with ADHD and 2986 youths with both ADHD and other psychiatric diagnoses from 2006 to 2013. It compared periods when they were taking ADHD medication with periods when they were not. During medicated periods both groups had a greater than 10 % reduction in unintended injuries, and a greater than 70 % reduction in traumatic brain injuries.</li>
            <li>A Taiwanese study of over 124,000 youths with ADHD found that methylphenidate treatment above an annual average cumulative defined daily dose of 84 halved the risk for traumatic brain injuries, after adjusting for confounders.</li>
            <li>A nationwide study compared 7200 Taiwanese youths with ADHD with 36,000 children without ADHD. After adjusting by age, sex, urbanization level, and geographic region, boys with ADHD were almost 40 % more likely and girls with ADHD 60 % more likely to suffer bone fractures.</li>
            <li>A population-based, electronic medical records database in Hong Kong identified over 17,000 individuals aged 6–19 years who had been prescribed methylphenidate. Of these, almost 5000 had at least one trauma-related emergency room admission. Researchers found a 9 % reduction in such admissions during periods covered by a methylphenidate prescription compared with periods with no active prescription.</li>
            <li>A meta-analysis of five studies with over 13,000 participants found that ADHD medications (primarily stimulants) were associated with a greater than 10 % reduction in unintentional injuries.</li>
            <li>Using Swedish national registers, a study of over 17,000 people with ADHD found that medication for ADHD was associated with a greater than 50 % reduction in the risk of serious transport accidents among males but not females.</li>
            <li>A longitudinal study using the Taiwan Health Insurance Research Database compared almost 18,000 adolescent and young adults with ADHD with over 70,000 age- and sex-matched controls. Short-term use of ADHD medications was associated with a 30 % reduction in sexually transmitted infections, and long-term use with a 40 % reduction, though these reductions were only among males.</li>
            <li>A nationwide longitudinal cohort study using the Swedish national registers found that among more than 38,000 individuals with ADHD, ADHD medication was associated with a greater than 40 % reduction in the risk for depression three years later.</li>
            <li>A Swedish population-based study of 38,000 people with ADHD found a 20 % decline in suicide related events among those prescribed stimulants during periods when they were under treatment as opposed to during periods when they were not under treatment.</li>
            <li>A Taiwanese study identified 85,000 youths with ADHD using National Health Insurance data to examine whether methylphenidate use affected suicide attempts. After adjusting for relevant variables, it found a 60 % lower risk of suicide in those using methylphenidate for 3 months to half a year, and a 70 % reduction among those using methylphenidate for more than half a year.</li>
            <li>A study using the Swedish national registers investigated the association between prescription stimulant medication for ADHD in 2006 and substance abuse during 2009 among all 38,753 people born between 1960 and 1998 and diagnosed with ADHD. After controlling for relevant variables, it found a greater than 30 % reduction in indicators of substance abuse among those prescribed stimulants.</li>
            <li>A nationwide study of over 7500 Taiwanese adolescents with ADHD and over 30,000 matched controls found that long-term use of ADHD medication use was associated with a 30 % decrease in teenage pregnancy.</li>
            <li>A nationwide population-based cohort using Taiwan's National Health Insurance Research Database identified over 68,000 children and adolescents with a diagnosis of ADHD and who were prescribed methylphenidate and compared them with an identical number of controls matched on age, gender, and year of first ADHD diagnosis.</li>
            <li>A nationwide population-based cohort using Taiwan's National Health Insurance Research Database identified over 90,000 individuals younger than 18 years with a diagnosis of ADHD, and compared risk of burn injury between those not on methylphenidate, those on methylphenidate for less than 90 days, and those on methylphenidate for more than 90 days.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">12.3 Effects of medications for ADHD on the brain</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={176}>
            <li>A meta-analysis of methylphenidate treatment for ADHD found moderate improvements in response inhibition (25 studies, 787 participants) and sustained attention (29 studies, 956 participants), but no significant effect on working memory (13 studies, 559 participants).</li>
            <li>A meta-analysis of 14 fMRI studies with 212 participants reported that medication treatment for ADHD made the brains of youths with ADHD function in a way that was more like the brains of people without ADHD in brain areas involved in the control of cognition, which is typically disrupted in ADHD.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">12.4 Adverse effects of ADHD medications</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={178}>
            <li>A meta-analysis found that stimulants moderately reduced total sleep time (7 studies, 223 children), delayed the onset of sleep (7 studies, 171 children), and slightly-to-moderately decreased sleep efficiency (7 studies, 155 children).</li>
            <li>A meta-analysis of twelve studies with over 3300 adults found that those taking atomoxetine were about 40 % more likely to discontinue treatment due to adverse events than those on placebo.</li>
            <li>Children treated with stimulants may show delays in expected height gains averaging two centimeters over one or two years. These sometimes attenuate over time and often reverse when treatment is stopped.</li>
            <li>A study using Danish national registers followed over 700,000 individuals for an average period of almost a decade. Looking at 8300 people with ADHD, stimulant users had more than twice the rate of cardiovascular events (primarily hypertension) than nonusers.</li>
            <li>A meta-analysis of five studies with over 43,000 children and adolescents found no significant difference in adverse cardiac events between methylphenidate and atomoxetine.</li>
            <li>A meta-analysis covering people of all ages reported methylphenidate was not associated with a higher risk of all-cause death (3 studies, over 1.4 million people), heart attack or stroke (3 studies, over half a million people).</li>
            <li>A cohort study of over 1.8 million pregnancies in the United States and over 2.5 million pregnancies in the health registries of Denmark, Finland, Sweden, Norway, and Iceland reported that use of methylphenidate (but not amphetamines) by pregnant women was associated with a higher risk for cardiac malformations.</li>
            <li>A meta-analysis examining the safety of atomoxetine found no significant increase in risk of irritability (3 studies, over 1100 children).</li>
            <li>The Hong Kong Clinical Data Analysis & Reporting System, a population-based, electronic medical records database, was used to examine over 25,000 people receiving methylphenidate for ADHD. During the 90-day period prior to initiation of treatment, individuals with ADHD were over six times more likely to attempt suicide than after treatment.</li>
            <li>Using the same Hong Kong database, the risk for psychosis did not differ between periods when patients were on and off methylphenidate treatment.</li>
            <li>A Swedish registry study of over 23,000 adolescents and young adults treated with methylphenidate for ADHD found no evidence for an association between psychosis and methylphenidate treatment.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">12.5 Misuse and diversion of stimulant medications</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={189}>
            <li>A systematic review of 109 studies concluded that the non-medical use of prescribed stimulants is a significant public health problem, especially in college students.</li>
            <li>The non-medical use of prescribed stimulants in individuals without ADHD is associated with lower educational attainment.</li>
            <li>A retrospective study compared 4.4 million people dispensed ADHD medications with 6.1 million people dispensed asthma medications. Obtaining prescriptions from multiple prescribers or filling prescriptions at multiple pharmacies was highly correlated with abuse, misuse, and diversion.</li>
            <li>A U.S. study of over 440,000 respondents found that use of illegal drugs or other non-medical use of prescription drugs preceded non-medical use of ADHD medication in more than three out of four cases.</li>
            <li>A study examined Swedish national pharmacy dispensing data for all 56,922 individuals who filled a methylphenidate prescription between 2010 and 2011. 4304 of the methylphenidate users (7.6 %) overused medication as measured by dispensed prescriptions.</li>
            <li>Large studies of calls to U.S. poison control centers related to ADHD medications find that intentional exposures, including suspected suicide and medication abuse and/or misuse is associated with admission to critical care units and, rarely, death especially when snorted or injected.</li>
          </ol>
        </section>

        {/* Non-Medication Treatments */}
        <section id="non-medication-treatments" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">13.</small> Which non-medication treatments are safe and effective for ADHD?
          </h2>
          <p className="text-slate-600 mb-4">
            Many non-medical treatments have been proposed for ADHD. Most of those offered on the Internet have not been tested or have been shown not to be effective. In this section, we distinguish between the effects of a treatment for ADHD symptoms and other benefits it may confer. Due to the way these therapies are implemented and recorded in the medical record, large scale naturalistic studies of longer-term outcomes are not possible.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">13.1 Behavioral and Cognitive-Behavioral Therapies</h3>
          <p className="text-slate-600 mb-4">
            Behavioral treatments for ADHD are diverse in nature and have a different content and focus depending on the age of the patient. For preschoolers and grade-school children, parents are trained to improve their method of disciplining and interacting with their children. For adolescents and adults, therapy helps patients improve their organizational skills. For some patients, teachers contribute to a program aimed at improving the child's behavior. Some of these therapies focus on improving social behaviors and developing practical skills. In this section, however, we focus only on the ability of such treatments to improve ADHD symptoms. Readers should keep in mind that the failure of a treatment to substantially improve ADHD symptoms does not mean it is not useful for other purposes.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={195}>
            <li>A meta-analysis found parent training for preschool children with ADHD to be associated with a moderate reduction in parent-reported ADHD symptoms (15 studies, few with active controls, over a thousand participants) and conduct problems (14 studies, few with active controls, over a thousand participants).</li>
            <li>A meta-analysis of 19 studies of cognitive behavior therapy (CBT) for adults with ADHD included 896 participants. It found associations with moderate improvements in self-reported ADHD symptoms and self-reported functioning.</li>
            <li>A meta-analysis of 32 studies with over two thousand participants found that cognitive training resulted in small to moderate improvements in executive functioning in preschoolers with ADHD.</li>
            <li>A meta-analysis explored the effectiveness of meditation-based therapy. It found moderate reductions in ADHD symptoms in both children and adolescents (6 RCTs, 240 participants) and adults (6 RCTs, 339 participants), but half the studies did not use active controls.</li>
            <li>A meta-analysis found that social skills training for youth with ADHD did not improve teacher-assessed social skills (11 studies, over 1200 youths), general behavior (8 studies, over 1000 youths), or school performance and grades (5 studies, over 600 youths).</li>
            <li>A meta-analysis of ten studies with 893 youths reported that organizational skills interventions led to moderate reductions in parent-reported inattention symptoms.</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">13.2 Computer-based cognitive training and neurofeedback</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={201}>
            <li>A meta-analysis of five randomized controlled trials (RCTs) with 263 participants exploring the efficacy of neurofeedback found a small reduction in inattention, but no significant reduction in hyperactivity-impulsivity or overall ADHD symptoms with ratings by probably blinded evaluators.</li>
            <li>The European ADHD Guidelines Group published meta-analyses of cognitive training and neurofeedback for youth. Probably blinded cognitive training studies with active controls (6 studies, 287 youths) reported no significant reduction in ADHD symptoms.</li>
            <li>A meta-analysis found that working memory training led to short-term improvements in both verbal working memory (21 studies, over 1300 participants) and visuospatial working memory (18 studies, over 1000 participants), with "no convincing evidence that even such near-transfer effects are durable."</li>
          </ol>
          <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">13.3 Supplements, diet, and exercise</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4" start={204}>
            <li>Omega-3 fatty acid supplementation was associated with small-to-medium improvements in ADHD symptoms in three meta-analyses (ten studies with 699 participants, 16 studies with 1408 participants, 7 studies with 534 participants).</li>
            <li>A meta-analysis found no evidence of any effect of omega-3 fatty acid supplements on parent-rated (5 studies, 650 children) or teacher-rated (3 studies, 598 children) emotional lability symptoms.</li>
            <li>A meta-analysis of five double-blind crossover studies with 164 participants found that restricting synthetic food colors from children's diets was associated with a small reduction in ADHD symptoms.</li>
            <li>A meta-analysis of ten studies (300 children) found exercise was associated with a moderate reduction in ADHD symptoms, but had no significant effect after adjusting for publication bias.</li>
            <li>A nationwide population study using the Swedish Twin Register identified almost 18,000 twins who completed a web-based survey examining the relationship between inattention and hyperactivity/impulsivity subtypes and dietary habits.</li>
          </ol>
        </section>

        {/* Discussion */}
        <section id="discussion" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            <small className="text-lg">14.</small> Discussion
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>
              This work has curated evidence-based statements about ADHD which paint a picture of the disorder that we summarize as follows:
            </p>
            <p>
              ADHD is a chronic disorder in which developmentally inappropriate symptoms of inattention and/or hyperactivity/impulsivity lead to impairments in many aspects of living. The disorder, which starts in childhood or early adolescence and is more common in boys than girls, affects 5.9 % of youth and 2.8 % of adults worldwide. There are multiple genetic and environmental risk factors that accumulate in various combinations to cause ADHD. These risk factors lead to subtle changes in multiple brain networks and in the cognitive, motivational, and emotional processes they control. People diagnosed with ADHD have an elevated risk for school failure, antisocial behavior, other psychiatric problems, somatic disorders, drug and alcohol abuse, accidental injuries, and premature death, including attempted and completed suicide. As a result, ADHD costs society hundreds of billions of dollars each year. Several medications are safe and effective for treating ADHD and for preventing many adverse outcomes. Non-medication treatments are available but, compared with medications, are less effective for reducing inattention, hyperactivity, and impulsivity.
            </p>
            <p>
              Despite this large body of evidence, we have much more to learn about the disorder and its various manifestations. Epidemiologic studies have taught us that ADHD occurs around the world, but we know little about how culture affects the expression of ADHD symptoms or the response to treatment. Because most research about ADHD is based on Caucasian and East Asian samples, we must be cautious in generalizing our assertions to other groups. In addition, far more research pertains to males than females. We also need to learn more about ADHD in older adults. Future research into ADHD should examine more diverse samples from a wider range of cultural contexts.
            </p>
            <p>
              We have learned much about the causes of ADHD but are only beginning to understand how genes and environment combine to cause the disorder and affect the brain to produce symptoms and impairments. Some of these causes may be shared with ADHD's somatic comorbidities. Examples include oxidative stress, inflammation, and insulin resistance. Future work should focus on biological and psychological causal mechanisms to find points of intervention that will improve the effectiveness of medical and non-medical treatments and, eventually, prevent onset of the disorder. Although the medications that treat ADHD are highly effective, we need better methods to prevent the misuse and diversion of these medications, especially among adolescents and young adults.
            </p>
            <p>
              Many decades of research have led to a method of diagnosing ADHD that is highly valid as a predictor of treatment response, family history of ADHD, many clinical features, measures of brain structure and function, and adverse outcomes. Nevertheless, there are several new directions for diagnosis. One is to better understand the nature and causes of emotional symptoms in ADHD and whether these should be incorporated into diagnostic criteria. Another is to determine if and how mild or sub-threshold cases of ADHD should be diagnosed and treated. Different trajectories of ADHD across the life-cycle need to be further investigated.
            </p>
            <p>
              Many researchers are trying to develop computerized or biological tests using information about the patient's behavior, brain and/or genetic makeup. The hope is that such tests will one day diagnose the disorder, predict a personalized approach to treatment, or assist clinicians in these areas. Others are working on methods that use the vast data available from medical records to predict which patients with ADHD are at greatest risk for adverse outcomes later in life. Such work may someday allow healthcare systems to allocate resources to the highest risk patients.
            </p>
            <p>
              Although we have good treatments for ADHD, even the best treatments are only partially effective. The future of treatment for ADHD will include new medications currently in development and a stronger evidence base for novel non-medication treatments for treating ADHD symptoms or associated impairments, such as trigeminal nerve stimulation and game-based treatments. And more data are needed to improve existing non-medication treatments and to test the efficacy of traditional therapies such as acupuncture, yoga, and Ayurvedic therapies. Also, little is known about how the somatic disorders that co-occur with ADHD interact with treatments for ADHD and how the symptoms of the disorder affect somatic outcomes. We need to learn more about how duration of treatment affects outcomes over longer periods of time.
            </p>
            <p>
              We also know little about stigma and ADHD. Stigmatizing attitudes toward ADHD are common and may play a role in socially and clinically important outcomes. These negative attitudes affect patients at all stages of their life. Such attitudes have been documented among individuals at all ages and in all groups, including family, peers, teachers, clinicians, and even individuals with ADHD themselves.
            </p>
          </div>
        </section>

        {/* More Details */}
        <section id="more-details" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">More Details</h2>
          <p className="text-slate-600">
            Kindly see the ADHD Evidence Project for further details{' '}
            <a href="https://www.adhdevidence.org/evidence" target="_blank" rel="noreferrer noopener" className="text-emerald-600 hover:text-emerald-700">
              https://www.adhdevidence.org/evidence
            </a>
          </p>
        </section>
        </div>

        {/* Table of Contents - Narrow Right Column */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20 z-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Table Of Contents</h2>
            <div className="border-t border-slate-200 mb-4"></div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#consensus-statement-title" onClick={(e) => handleAnchorClick(e, '#consensus-statement-title')} className="hover:text-emerald-600">The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder</a>
              </li>
              <li>
                <a href="#highlights" onClick={(e) => handleAnchorClick(e, '#highlights')} className="hover:text-emerald-600">Highlights</a>
              </li>
              <li>
                <a href="#abstract" onClick={(e) => handleAnchorClick(e, '#abstract')} className="hover:text-emerald-600">Abstract</a>
              </li>
              <li>
                <a href="#introduction" onClick={(e) => handleAnchorClick(e, '#introduction')} className="hover:text-emerald-600">1. Introduction</a>
              </li>
              <li>
                <a href="#methods" onClick={(e) => handleAnchorClick(e, '#methods')} className="hover:text-emerald-600">2. Methods</a>
              </li>
              <li>
                <a href="#overview-of-results" onClick={(e) => handleAnchorClick(e, '#overview-of-results')} className="hover:text-emerald-600">3. Overview of results</a>
              </li>
              <li>
                <a href="#brief-history" onClick={(e) => handleAnchorClick(e, '#brief-history')} className="hover:text-emerald-600">4. A Brief history: ADHD is not a new disorder</a>
              </li>
              <li>
                <a href="#how-diagnosed" onClick={(e) => handleAnchorClick(e, '#how-diagnosed')} className="hover:text-emerald-600">5. How is ADHD diagnosed?</a>
              </li>
              <li>
                <a href="#how-common" onClick={(e) => handleAnchorClick(e, '#how-common')} className="hover:text-emerald-600">6. How common is ADHD?</a>
              </li>
              <li>
                <a href="#what-causes" onClick={(e) => handleAnchorClick(e, '#what-causes')} className="hover:text-emerald-600">7. What causes ADHD?</a>
              </li>
              <li>
                <a href="#brain-studies" onClick={(e) => handleAnchorClick(e, '#brain-studies')} className="hover:text-emerald-600">8. What have we learned from studying the brains of people with ADHD?</a>
              </li>
              <li>
                <a href="#medical-problems" onClick={(e) => handleAnchorClick(e, '#medical-problems')} className="hover:text-emerald-600">9. What kinds of non-psychiatric medical problems commonly occur among people with ADHD?</a>
              </li>
              <li>
                <a href="#impact" onClick={(e) => handleAnchorClick(e, '#impact')} className="hover:text-emerald-600">10. What is the impact of ADHD on patients and families?</a>
              </li>
              <li>
                <a href="#economic-burden" onClick={(e) => handleAnchorClick(e, '#economic-burden')} className="hover:text-emerald-600">11. What is the economic burden of ADHD?</a>
              </li>
              <li>
                <a href="#medications" onClick={(e) => handleAnchorClick(e, '#medications')} className="hover:text-emerald-600">12. Which medications are safe and effective for treating ADHD?</a>
              </li>
              <li>
                <a href="#non-medication-treatments" onClick={(e) => handleAnchorClick(e, '#non-medication-treatments')} className="hover:text-emerald-600">13. Which non-medication treatments are safe and effective for ADHD?</a>
              </li>
              <li>
                <a href="#discussion" onClick={(e) => handleAnchorClick(e, '#discussion')} className="hover:text-emerald-600">14. Discussion</a>
              </li>
              <li>
                <a href="#more-details" onClick={(e) => handleAnchorClick(e, '#more-details')} className="hover:text-emerald-600">More Details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="pt-8">
        <button
          onClick={() => onNavigate('hcp-resources')}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to HCP Resources
        </button>
      </div>
    </div>
  );
};

export default ConsensusStatementPage;
