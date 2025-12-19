import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgClinicalRecommendationsPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const contentRef = useRef(null);
  const highlightRefs = useRef([]);

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `${window.location.pathname}${anchorId}`);
    }
  };

  const handleUpdateLinkClick = (e, updateId) => {
    e.preventDefault();
    
    // Get base path from current location (future-proof)
    const basePath = window.location.pathname.split('/').slice(0, 2).join('/') || '/res.adhd.org.sa-concept';
    const updatesPath = `${basePath}/adhd-cpg/cpg-guideline-updates`;
    const fullPath = `${updatesPath}#${updateId}`;
    
    // Navigate to the Updates page
    onNavigate('cpg-guideline-updates');
    
    // Function to scroll to anchor
    const scrollToAnchor = () => {
      const element = document.getElementById(updateId);
      if (element) {
        // Update URL with hash
        window.history.replaceState({}, '', fullPath);
        // Scroll to element with offset for header
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };
    
    // Try scrolling immediately (in case we're already on the page)
    if (scrollToAnchor()) {
      return;
    }
    
    // Wait for navigation and page render to complete, then scroll to anchor
    // Use requestAnimationFrame for better timing
    let attempts = 0;
    const maxAttempts = 20; // Try for up to 2 seconds (20 * 100ms)
    
    const tryScroll = () => {
      attempts++;
      if (scrollToAnchor() || attempts >= maxAttempts) {
        return;
      }
      setTimeout(tryScroll, 100);
    };
    
    setTimeout(tryScroll, 300);
  };

  // Helper function to get the update link href (future-proof)
  const getUpdateLinkHref = (updateId) => {
    const basePath = window.location.pathname.split('/').slice(0, 2).join('/') || '/res.adhd.org.sa-concept';
    return `${basePath}/adhd-cpg/cpg-guideline-updates#${updateId}`;
  };

  // Function to extract text content from an element and its children
  const getTextContent = (element) => {
    if (!element) return '';
    const clone = element.cloneNode(true);
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
    if (!section) return 'Recommendations';
    const heading = section.querySelector('h2');
    return heading ? heading.textContent.trim() : section.id;
  };

  // Function to create excerpt with context
  const createExcerpt = (text, keywords, maxLength = 150) => {
    const lowerText = text.toLowerCase();
    const lowerKeywords = keywords.map(k => k.toLowerCase());
    
    let firstIndex = -1;
    for (const keyword of lowerKeywords) {
      const index = lowerText.indexOf(keyword);
      if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
        firstIndex = index;
      }
    }
    
    if (firstIndex === -1) return text.substring(0, maxLength);
    
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

  // Function to remove highlights
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

  // Function to highlight keywords in the page
  const highlightKeywordsInPage = useCallback((keywords) => {
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

  // Search function
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
      if (node.textContent.trim().length > 0) {
        textNodes.push(node);
      }
    }

    // Search through text nodes
    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      const lowerText = text.toLowerCase();
      
      const hasMatch = keywords.some(keyword => 
        lowerText.includes(keyword.toLowerCase())
      );
      
      if (hasMatch) {
        const parentSection = findParentSection(textNode.parentElement);
        const sectionId = parentSection ? parentSection.id : 'recommendations';
        const sectionTitle = getSectionTitle(parentSection);
        const excerpt = createExcerpt(text, keywords);
        
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
      {/* Header Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">
          Evidence-Based Clinical Practice Guideline<br />
          <strong>for Management of ADHD in Saudi Arabia</strong>
        </h2>
        <p className="text-center text-sm text-slate-600 italic mb-4">
          First Edition published by the Saudi ADHD Society in 2020 and registered with King Fahad National Library with ISBN: 978-603-03-4786-5 L.D. no. 1441/12726.
        </p>
        <p className="text-center text-slate-600 mb-4">
          You may perform a keyword search using the search box below to quickly find the information you are searching for, or select a section from the table of contents.
        </p>
        
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
      </div>

      {/* Two Column Layout: Content Left, TOC Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Wide Left Column */}
        <div ref={contentRef} className="lg:col-span-8 space-y-8" data-searchable-content>
          <section id="recommendations" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-20">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Recommendations</h1>

            {/* Section 1 */}
            <section id="service-organizations-and-training" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">1.</small> Service Organizations and Training
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec1.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.1">1.1</a>
                  People with attention deficit hyperactivity disorder (ADHD) would benefit from improved organisation of care and better integration of child health services, child and adolescent mental health services and adult mental health services.
                </p>
                
                <p>
                  <a id="rec1.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.2">1.2</a>
                  Mental health services for children, young people and adults should work to form multidisciplinary specialist ADHD teams and/or clinics for children and young people, and separate teams and/or clinics for adults in all health care settings. These teams and clinics should have expertise in the diagnosis and management of ADHD, and should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide diagnostic, treatment and consultation services for people with ADHD who have complex needs.</li>
                  <li>Put in place systems of communication and protocols for information sharing among paediatric, child and adolescent, forensic, and adult mental health services for people with ADHD, including arrangements for transition between child and adult services.</li>
                  <li>Produce local protocols for shared care arrangements with primary care providers and ensure that clear lines of communication between primary and secondary care are maintained.</li>
                  <li>Ensure age-appropriate psychological services are available for children, young people and adults with ADHD, and for parents or carers.</li>
                  <li>The size and time commitment of these teams should depend on local circumstances.</li>
                </ul>
                
                <p>
                  <a id="rec1.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.3">1.3</a>
                  Every locality should develop a multi-agency group, with representatives from multidisciplinary specialist ADHD teams, paediatrics, mental health, learning disability, forensic, child and adolescent mental health services, and relevant Ministry departments (including services for school health, education and social services), societies, parent support groups and others with a significant local involvement in ADHD services. The group should oversee the implementation of this CPG.
                </p>
                
                <p>
                  <a id="rec1.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.4">1.4</a>
                  A young person with ADHD receiving treatment and care from paediatric mental health services should be reassessed to establish the need for continuing treatment into adolescence and adulthood. If treatment is necessary, arrangements should be made for a smooth transition to adult services at this time with details of the anticipated treatment and services that the young person will require, since by the age of 14 years (in Paediatrics) or 18 years (in Psychiatry) they will no longer be eligible for paediatric/adolescent services in many settings.
                </p>
                
                <p>
                  <a id="rec1.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.5">1.5</a>
                  During the transition to adult services, a formal written referral to adult services should be considered, and full information provided to the young person about adult services. The young person, as well as their parent or carer if under 18 years old, should be involved in the planning.
                </p>
                
                <p>
                  <a id="rec1.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.6">1.6</a>
                  After transition to adult services, adult healthcare professionals should carry out a comprehensive assessment of the person with ADHD that includes personal, educational, occupational and social functioning, and assessment of any coexisting conditions, especially drug misuse, personality disorders, emotional problems and learning difficulties.
                </p>
                
                <h3 id="training" className="text-lg font-bold text-slate-900 mt-6 mb-4">Training</h3>
                
                <p>
                  <a id="rec1.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.7">1.7</a>
                  Governmental services should ensure that specialist ADHD teams for children, young people and adults jointly develop training programmes on diagnosis and management of ADHD in different age groups for mental health, paediatric, social care, education, forensic and primary care providers and other professionals who have contact with people with ADHD.
                </p>
                
                <p>
                  <a id="rec1.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec1.8">1.8</a>
                  Child and Adult psychiatrists, clinical psychologists, paediatricians, family physicians, and other child and adult mental health professionals (including those working in forensic services) should undertake training so that they are able to diagnose ADHD and provide treatment and management in accordance with this CPG.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="recognition-identification-and-referral" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">2.</small> Recognition, identification and referral
              </h2>
              
              <h3 id="recognition" className="text-lg font-bold text-slate-900 mt-4 mb-4">Recognition</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec2.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.1">2.1</a>
                  Be aware that people in the following groups may have increased prevalence of ADHD compared with the general population:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>people born preterm</li>
                  <li>looked-after children (e.g. those living in care homes such as orphanages or juvenile detention facilities) and young people</li>
                  <li>children and young people diagnosed with oppositional defiant disorder or conduct disorder</li>
                  <li>children and young people with mood disorders (for example, anxiety and depression)</li>
                  <li>people with a close family member diagnosed with ADHD</li>
                  <li>people with epilepsy</li>
                  <li>people with other neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, intellectual disability and specific learning difficulties). See p24, Early Recognition and Diagnosis, Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022). [<a href={getUpdateLinkHref('Update-2022-5')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-5')} className="text-emerald-700 hover:underline">Update 2022-5</a>] [<a href={getUpdateLinkHref('Update-2023-2')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2023-2')} className="text-emerald-700 hover:underline">Update 2023-2</a>]</li>
                  <li>adults with mental health conditions</li>
                  <li>people with a history of substance use disorders</li>
                  <li>people known to the youth or adult criminal justice organisations</li>
                  <li>people with acquired brain injury.</li>
                </ul>
                
                <p>
                  <a id="rec2.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.2">2.2</a>
                  Be aware that ADHD is thought to be over-diagnosed in children that are younger in chronological age than their classroom peers.
                </p>
                
                <p>
                  <a id="rec2.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.3">2.3</a>
                  Be aware that ADHD is thought to be under-recognised in girls and women and that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>they are less likely to be referred for assessment for ADHD</li>
                  <li>they may be more likely to have undiagnosed ADHD</li>
                  <li>they may be more likely to receive an incorrect diagnosis of another mental health or neurodevelopmental condition.</li>
                </ul>
                
                <h3 id="identification-and-referral" className="text-lg font-bold text-slate-900 mt-6 mb-4">Identification and referral</h3>
                
                <p>
                  <a id="rec2.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.4">2.4</a>
                  Universal screening for ADHD should not be undertaken in nursery, primary and secondary schools.
                </p>
                
                <p>
                  <a id="rec2.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.5">2.5</a>
                  When a child or young person with disordered conduct and suspected ADHD is referred to a school's special education teacher or consulting teacher, in addition to helping the child with their behaviour, they should inform the parents about local specialized programmes (e.g. Developmental and Behavioural Clinics).
                </p>
                
                <p>
                  <a id="rec2.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.6">2.6</a>
                  Referral from primary to secondary care may involve health, education and social care professionals (for example, family physicians, paediatricians, educational psychologists, school special educators and coordinators, and social workers) and care pathways can vary locally. The person making the referral to secondary care should inform the child or young person's primary physician if they have one.
                </p>
                
                <p>
                  <a id="rec2.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.7">2.7</a>
                  When a child or young person presents in primary care with behavioural and/or attention problems suggestive of ADHD, primary care practitioners should determine the severity of the problems (using a structured screening tool), how these affect the child or young person and the parents or carers, and the extent to which they pervade different domains and settings.
                </p>
                
                <p>
                  <a id="rec2.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.8">2.8</a>
                  If the child or young person's behavioural and/or attention problems suggestive of ADHD are having an adverse impact on their development or family life, consider:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a period of watchful waiting of up to 10 weeks unless the severity and dysfunction demands immediate intervention</li>
                  <li>offering parents or carers a referral to group-based ADHD-focused support where available (this should not wait for a formal diagnosis of ADHD).<br /><br />
                  If the behavioural and/or attention problems persist with at least moderate impairment, the child or young person should be referred to secondary care (that is, a child psychiatrist, an appropriately trained paediatrician, an appropriately trained family physician, or specialist ADHD child and adolescent mental health services) for assessment.</li>
                </ul>
                
                <p>
                  <a id="rec2.9" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.9">2.9</a>
                  If the child or young person's behavioural and/or attention problems are associated with severe impairment, referral should be made directly to secondary care (that is, a child psychiatrist, an appropriately trained paediatrician, an appropriately trained family physician, or specialist ADHD child and adolescent mental health services) for assessment.
                </p>
                
                <p>
                  <a id="rec2.10" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.10">2.10</a>
                  Primary care practitioners should not make the initial diagnosis or start medication in children or young people with suspected ADHD unless the primary care practitioner is an appropriately trained family physician or paediatrician.
                </p>
                
                <p>
                  <a id="rec2.11" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.11">2.11</a>
                  Adults presenting with symptoms of ADHD in primary care or general adult psychiatric services, who do not have a childhood diagnosis of ADHD, should be referred for assessment by a mental health specialist trained in the diagnosis and treatment of ADHD, where there is evidence of typical manifestations of ADHD (hyperactivity/impulsivity and/or inattention) that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>began during childhood and have persisted throughout life</li>
                  <li>are not explained by other psychiatric diagnoses (although there may be other coexisting psychiatric conditions)</li>
                  <li>have resulted in or are associated with moderate or severe psychological, social and/or educational or occupational impairment.</li>
                </ul>
                
                <p>
                  <a id="rec2.12" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec2.12">2.12</a>
                  Adults who have previously been treated for ADHD as children or young people and present with symptoms suggestive of continuing ADHD should be referred to general adult psychiatric services for assessment. The symptoms should be associated with at least moderate or severe psychological, social, educational and/or occupational impairment.
                </p>
              </div>
            </section>

            {/* Section 3 - Diagnosis */}
            <section id="diagnosis" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">3.</small> Diagnosis
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec3.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec3.1">3.1</a>
                  A diagnosis of ADHD should only be made by a specialist psychiatrist, specialized paediatrician, an appropriately trained family physician or other appropriately qualified healthcare professional with training and expertise in the diagnosis of ADHD, on the basis of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a full clinical and psychosocial assessment of the person; this should include discussion about behaviour and symptoms in the different domains and settings of the person's everyday life and</li>
                  <li>a full developmental and psychiatric history and</li>
                  <li>observer reports and assessment of the person's mental state.</li>
                </ul>
                
                <p>
                  <a id="rec3.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec3.2">3.2</a>
                  A diagnosis of ADHD should not be made solely on the basis of rating scale or observational data. However, rating scales such as the Conner's rating scales, Arabic version of the Vanderbilt ADHD Rating Scale, and the Strengths and Difficulties Questionnaire are valuable adjuncts, especially when rated by multiple raters in multiple settings (e.g., parent, teachers, the adolescent), and observations (for example, at school) are useful when there is doubt about symptoms.
                </p>
                
                <p>
                  <a id="rec3.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec3.3">3.3</a>
                  For a diagnosis of ADHD, symptoms of hyperactivity/impulsivity and/or inattention should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>meet the diagnostic criteria in DSM-V or ICD-10/ICD-11 and</li>
                  <li>cause at least moderate psychological, social and/or educational/occupational impairment based on interview and/or direct observation in multiple settings and</li>
                  <li>be pervasive, occurring in 2 or more important settings including social, familial, educational and/or occupational settings.<br /><br />
                  As part of the diagnostic process, include an assessment of the person's needs, coexisting conditions, social, familial and educational/occupational circumstances and physical health. For children and young people, there should also be an observation of their parents' or carers' mental health.</li>
                </ul>
                
                <p>
                  <a id="rec3.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec3.4">3.4</a>
                  ADHD should be considered in all age groups, with symptom criteria adjusted for age-appropriate changes in behaviour.
                </p>
                
                <p>
                  <a id="rec3.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec3.5">3.5</a>
                  In determining the clinical significance of impairment resulting from the symptoms of ADHD in children and young people, their views should be taken into account wherever possible.
                </p>
              </div>
            </section>

            {/* Section 4 - Support */}
            <section id="support" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">4.</small> Support
              </h2>
              
              <h3 id="supporting-people-with-adhd" className="text-lg font-bold text-slate-900 mt-4 mb-4">Supporting people with ADHD</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec4.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.1">4.1</a>
                  Following a diagnosis of ADHD, have a structured discussion with people (and their families or carers as appropriate) about how ADHD could affect their life. This could include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the positive impacts of receiving a diagnosis, such as:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>improving their understanding of symptoms</li>
                      <li>identifying and building on individual strengths</li>
                      <li>improving access to services</li>
                    </ul>
                  </li>
                  <li>the negative impacts of receiving a diagnosis, such as stigma and labelling</li>
                  <li>a greater tendency for impulsive behaviour</li>
                  <li>the importance of environmental modifications to reduce the impact of ADHD symptoms</li>
                  <li>education issues (for example, reasonable accommodations at school and college)</li>
                  <li>employment issues (for example, impact on career choices and rights to reasonable accommodations in the workplace)</li>
                  <li>social relationship issues</li>
                  <li>the challenges of managing ADHD when a person has coexisting neurodevelopmental or mental health conditions</li>
                  <li>the increased risk of substance misuse and self-medication</li>
                  <li>the possible effect on driving (for example, ADHD symptoms may impair a person's driving and ADHD medication may improve this).<br /><br />
                  This structured discussion should inform the shared treatment plan.</li>
                </ul>
                
                <p>
                  <a id="rec4.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.2">4.2</a>
                  Inform people receiving a diagnosis of ADHD (and their families or carers as appropriate) about sources of information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>local and national support groups and voluntary organisations</li>
                  <li>websites (e.g. <a href="https://adhd.org.sa/en" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Saudi ADHD Society</a>)</li>
                  <li>support for education and employment<br /><br />
                  People who have had an assessment but whose symptoms and impairment fall short of a diagnosis of ADHD may also benefit from similar information.</li>
                </ul>
                
                <p>
                  <a id="rec4.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.3">4.3</a>
                  Provide information to people with ADHD (and their families and carers as appropriate) in a form that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>takes into account their developmental level, cognitive style, emotional maturity and cognitive capacity, including any learning disabilities, sight or hearing problems, delays in language development or social communication difficulties</li>
                  <li>takes into account any coexisting neurodevelopmental and mental health conditions</li>
                  <li>is tailored to their individual needs and circumstances, including age, gender, educational level and life stage</li>
                </ul>
                
                <h3 id="supporting-families-and-carers" className="text-lg font-bold text-slate-900 mt-6 mb-4">Supporting families and carers</h3>
                
                <p>
                  <a id="rec4.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.4">4.4</a>
                  Ask families or carers of people with ADHD how the ADHD affects themselves and other family members, and discuss any concerns they have.
                </p>
                
                <p>
                  <a id="rec4.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.5">4.5</a>
                  Encourage family members or carers of people with ADHD to seek an assessment of their personal, social and mental health needs, and to join self-help and support groups if appropriate.
                </p>
                
                <p>
                  <a id="rec4.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.6">4.6</a>
                  Think about the needs of a parent with ADHD who also has a child with ADHD, including whether they need extra support with organisational strategies (for example, with adherence to treatment, daily school routines).
                </p>
                
                <p>
                  <a id="rec4.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.7">4.7</a>
                  Offer advice to parents and carers of children and young people with ADHD about the importance of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>positive parent–child (and carer–child) contact</li>
                  <li>clear and appropriate rules about behaviour and consistent management</li>
                  <li>structure in the child or young person's day.</li>
                </ul>
                
                <p>
                  <a id="rec4.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.8">4.8</a>
                  Offer advice to families and carers of adults with ADHD about:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>how ADHD may affect relationships</li>
                  <li>how ADHD may affect the person's functioning</li>
                  <li>the importance of structure in daily activities</li>
                </ul>
                
                <p>
                  <a id="rec4.9" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.9">4.9</a>
                  Explain to parents and carers that any recommendation of parent-training/education does not imply bad parenting, and that the aim is to optimise parenting skills to meet the above-average parenting needs of children and young people with ADHD.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Involving schools, colleges and universities</h3>
                
                <p>
                  <a id="rec4.10" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.10">4.10</a>
                  When ADHD is diagnosed, when symptoms change, and when there is transition between schools or from school to college or college to university, obtain consent and then contact the school, college or university to explain:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the validity of a diagnosis of ADHD and how symptoms are likely to affect school, college or university life</li>
                  <li>other coexisting conditions (for example, learning disabilities) are distinct from ADHD and may need different adjustments</li>
                  <li>the treatment plan and identified special educational needs, including advice for reasonable adjustments and environmental modifications within the educational placement</li>
                  <li>the value of feedback from schools, colleges and universities to people with ADHD and their healthcare professionals.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Involving other healthcare professionals</h3>
                
                <p>
                  <a id="rec4.11" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec4.11">4.11</a>
                  When a person with ADHD has a coexisting condition, contact the relevant healthcare professional to explain:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the validity, scope and implications of a diagnosis of ADHD</li>
                  <li>how ADHD symptoms are likely to affect the person's behaviour (for example, organisation, time management, motivation) and adherence to specific treatments</li>
                  <li>the treatment plan and the value of feedback from healthcare professionals.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 - Managing ADHD */}
            <section id="managing-adhd" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">5.</small> Managing ADHD
              </h2>
              
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-4">Planning treatment</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec5.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.1">5.1</a>
                  Healthcare providers should ensure continuity of care for people with ADHD.
                </p>
                
                <p>
                  <a id="rec5.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.2">5.2</a>
                  Ensure that people with ADHD have a comprehensive, holistic shared treatment plan that addresses psychological, behavioural and occupational or educational needs. Take into account:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the severity of ADHD symptoms and impairment, and how these affect or may affect everyday life (including sleep)</li>
                  <li>their goals</li>
                  <li>their resilience and protective factors</li>
                  <li>the relative impact of other neurodevelopmental or mental health conditions</li>
                  <li>the relative impact or interaction of other general medical conditions and/or their treatments.</li>
                </ul>
                
                <p>
                  <a id="rec5.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.3">5.3</a>
                  Regularly discuss with people with ADHD, and their family members or carers, how they want to be involved in treatment planning and decisions; such discussions should take place at intervals to take account of changes in circumstances (for example, the transition from children's to adult services) and developmental level, and should not happen only once.
                </p>
                
                <p>
                  <a id="rec5.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.4">5.4</a>
                  Before starting any treatment for ADHD, discuss the following with the person, and their family or carers as appropriate, encouraging children and young people to give their own account of how they feel:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the benefits and harms of non-pharmacological and pharmacological treatments (for example, the efficacy of medication compared with no treatment or non-pharmacological treatments, potential adverse effects and non-response rates)</li>
                  <li>the benefits of a healthy lifestyle, including exercise</li>
                  <li>their preferences and concerns (it is important to understand that a person's/carer's decision to start, change or stop treatment may be influenced by media coverage, teachers, family members, friends and differing opinion on the validity of a diagnosis of ADHD)</li>
                  <li>how other mental health or neurodevelopmental conditions might affect treatment choices</li>
                  <li>how nutritional status and/or other general medical conditions or existing medication regimens might affect treatment decisions</li>
                  <li>the importance of adherence to treatment and any factors that may affect this (for example, it may be difficult to take medication at school or work, or to remember appointments).<br /><br />
                  Record the person's preferences and concerns in their treatment plan.</li>
                </ul>
                
                <p>
                  <a id="rec5.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.5">5.5</a>
                  Ask young people (over 18 years old) and adults with ADHD if they wish a parent, partner, close friend or carer to join discussions on treatment and adherence.
                </p>
                
                <p>
                  <a id="rec5.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.6">5.6</a>
                  Reassure people with ADHD, and their families or carers as appropriate, that they can revisit decisions about treatments.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Children under 5 years</h3>
                <p className="text-slate-600 italic mb-4">These recommendations are for healthcare professionals with training and expertise in diagnosing and managing ADHD. See <a href="#rec4.3" className="text-emerald-700 hover:underline">recommendation 4.3</a> for details of ADHD-focused information.</p>
                
                <p>
                  <a id="rec5.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.7">5.7</a>
                  Offer an ADHD-focused group parent-training programme to parents or carers of children under 5 years with ADHD as first-line treatment .
                </p>
                
                <p>
                  <a id="rec5.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.8">5.8</a>
                  If after an ADHD-focused group parent-training programme, ADHD symptoms across settings are still causing a significant impairment in a child under 5 years after environmental modifications have been implemented and reviewed, obtain advice from a specialist ADHD service with expertise in managing ADHD in young children (ideally a tertiary service).
                </p>
                
                <p>
                  <a id="rec5.9" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.9">5.9</a>
                  Do not offer medication for ADHD for any child under 5 years without a second specialist opinion from an ADHD service with expertise in managing ADHD in young children (ideally a tertiary service).
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Children aged 5 years and over and young people</h3>
                <p className="text-slate-600 italic mb-4">These recommendations are for healthcare professionals with training and expertise in diagnosing and managing ADHD.</p>
                
                <p>
                  <a id="rec5.10" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.10">5.10</a>
                  Give information about ADHD (see <a href="#rec4.3" className="text-emerald-700 hover:underline">recommendation 4.3</a>) and offer additional support to parents and carers of all children aged 5 years and over and young people with ADHD. The support should be ADHD focused, can be group based and as few as 1 or 2 sessions. It should include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>education and information on the causes and impact of ADHD</li>
                  <li>advice on parenting strategies</li>
                  <li>with consent, liaison with school, college or university (see <a href="#rec4.12" className="text-emerald-700 hover:underline">recommendation 4.12</a>)</li>
                  <li>both parents and carers if feasible.</li>
                </ul>
                
                <p>
                  <a id="rec5.11" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.11">5.11</a>
                  If a child aged 5 years or over or young person has ADHD and symptoms of oppositional defiant disorder or conduct disorder, offer parents and carers a parent-training programme that focuses on these behaviours , as well as group-based ADHD-focused support.
                </p>
                
                <p>
                  <a id="rec5.12" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.12">5.12</a>
                  Consider individual parent-training programmes for parents and carers of children and young people with ADHD and symptoms of oppositional defiant disorder or conduct disorder when:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>there are particular difficulties for families in attending group sessions (for example, because of disability, needs related to diversity such as language differences, learning disability [intellectual disability], parental ill-health, problems with transport, or where other factors suggest poor prospects for therapeutic engagement)</li>
                  <li>a family's needs are too complex to be met by group-based parent-training programmes.</li>
                </ul>
                
                <p>
                  <a id="rec5.13" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.13">5.13</a>
                  Offer medication for children aged 5 years and over and young people only if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>their ADHD symptoms are still causing a persistent significant impairment in atleast one domain after environmental modifications have been implemented and reviewed</li>
                  <li>they and their parents and carers have discussed information about ADHD (see <a href="#rec5.4" className="text-emerald-700 hover:underline">recommendation 5.4</a>)</li>
                  <li>a baseline assessment has been carried out (see <a href="#rec7.3" className="text-emerald-700 hover:underline">recommendation 7.3</a>).<br /><br />
                  See the recommendations on medication.</li>
                </ul>
                
                <p>
                  <a id="rec5.14" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.14">5.14</a>
                  Consider a course of cognitive behavioural therapy (CBT) for young people with ADHD who have benefited from medication but whose symptoms are still causing a significant impairment in at least one domain, addressing the following areas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>social skills with peers</li>
                  <li>problem-solving</li>
                  <li>self-control</li>
                  <li>active listening skills</li>
                  <li>dealing with and expressing feelings</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Adults</h3>
                <p className="text-slate-600 italic mb-4">These recommendations are for healthcare professionals with training and expertise in diagnosing and managing ADHD. See <a href="#rec4.3" className="text-emerald-700 hover:underline">recommendation 4.3</a> for details of ADHD-focused information.</p>
                
                <p>
                  <a id="rec5.15" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.15">5.15</a>
                  Offer medication to adults with ADHD if their ADHD symptoms are still causing a significant impairment in at least one domain after environmental modifications have been implemented and reviewed. See the recommendations on medication choice.
                </p>
                
                <p>
                  <a id="rec5.16" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.16">5.16</a>
                  Consider non-pharmacological treatment for adults with ADHD who have:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>made an informed choice not to have medication</li>
                  <li>difficulty adhering to medication</li>
                  <li>found medication to be ineffective or cannot tolerate it</li>
                </ul>
                
                <p>
                  <a id="rec5.17" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.17">5.17</a>
                  Consider non-pharmacological treatment in combination with medication for adults with ADHD who have benefited from medication but whose symptoms are still causing a significant impairment in at least one domain.
                </p>
                
                <p>
                  <a id="rec5.18" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.18">5.18</a>
                  When non-pharmacological treatment is indicated for adults with ADHD, offer the following as a minimum:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a structured supportive psychological intervention focused on ADHD</li>
                  <li>regular follow up either in person or by phone.<br /><br />
                  Treatment may involve elements of or a full course of CBT.</li>
                </ul>
                
                <p>
                  <a id="rec5.19" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec5.19">5.19</a>
                  Evidence on the safety and efficacy of transcutaneous electrical stimulation of the trigeminal nerve for attention deficit hyperactivity disorder (ADHD) is inadequate in quality and quantity. Therefore, this procedure should only be used in the context of research. [<a href={getUpdateLinkHref('Update-2023-3')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2023-3')} className="text-emerald-700 hover:underline">Update 2023-3</a>]
                </p>
              </div>
            </section>

            {/* Section 6 - Dietary advice */}
            <section id="dietary-advice" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">6.</small> Dietary advice
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec6.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec6.1">6.1</a>
                  Healthcare professionals should stress the value of a balanced diet, good nutrition and regular exercise for children, young people and adults with ADHD.
                </p>
                
                <p>
                  <a id="rec6.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec6.2">6.2</a>
                  Do not advise elimination of artificial colouring and additives from the diet as a generally applicable treatment for children and young people with ADHD.
                </p>
                
                <p>
                  <a id="rec6.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec6.3">6.3</a>
                  Ask about foods or drinks that appear to influence hyperactive behaviour as part of the clinical assessment of ADHD in children and young people, and:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>if there is a clear link, advise parents or carers to keep a diary of food and drinks taken and ADHD behaviour</li>
                  <li>if the diary supports a relationship between specific foods and drinks and behaviour, offer referral to a dietitian</li>
                  <li>ensure that further management (for example, specific dietary elimination) is jointly undertaken by the dietitian, mental health specialist or paediatrician, and the parent or carer and child or young person.</li>
                </ul>
                
                <p>
                  <a id="rec6.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec6.4">6.4</a>
                  Do not advise or offer dietary fatty acid supplementation for treating ADHD in children and young people.
                </p>
                
                <p>
                  <a id="rec6.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec6.5">6.5</a>
                  Advise the family members or carers of children with ADHD that there is no evidence about the long-term effectiveness or potential harms of a 'few food' diet for children with ADHD, and only limited evidence of short-term benefits .
                </p>
              </div>
            </section>

            {/* Section 7 - Medication */}
            <section id="medication" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">7.</small> Medication
              </h2>
              <p className="text-slate-600 italic mb-4">These recommendations, with the exception of <a href="#rec7.28" className="text-emerald-700 hover:underline">7.28</a>, are for healthcare professionals with training and expertise in diagnosing and managing ADHD.</p>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec7.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.1">7.1</a>
                  All medication for ADHD should only be initiated by a healthcare professional with training and expertise in diagnosing and managing ADHD.
                </p>
                
                <p>
                  <a id="rec7.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.2">7.2</a>
                  Healthcare professionals initiating medication for ADHD should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>be familiar with the pharmacokinetic profiles of all the short- and long-acting preparations available for ADHD</li>
                  <li>ensure that treatment is tailored effectively to the individual needs of the child, young person or adult</li>
                  <li>take account of variations in bioavailability or pharmacokinetic profiles of different preparations to avoid reduced effect or excessive adverse effects.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Baseline assessment</h3>
                
                <p>
                  <a id="rec7.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.3">7.3</a>
                  Before starting medication for ADHD, people with ADHD should have a full assessment, which should include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>a review to confirm they continue to meet the criteria for ADHD and need treatment</li>
                  <li>a review of mental health and social circumstances, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>presence of coexisting mental health and neurodevelopmental conditions</li>
                      <li>current educational or employment circumstances</li>
                      <li>risk assessment for substance misuse and drug diversion</li>
                      <li>care needs</li>
                    </ul>
                  </li>
                  <li>a review of physical health, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>a medical history, taking into account conditions that may be contraindications for specific medicines</li>
                      <li>current medication</li>
                      <li>height and weight (measured and recorded against the normal range for age, height and sex)</li>
                      <li>baseline pulse and blood pressure (measured with an appropriately sized cuff and compared with the normal range for age)</li>
                      <li>a cardiovascular assessment [<a href={getUpdateLinkHref('Update-2022-1a')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-1a')} className="text-emerald-700 hover:underline">Update 2022-1a</a>]</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2">
                  An electrocardiogram (ECG) is not needed before starting stimulants, atomoxetine or guanfacine, unless the person has any of the features in recommendation 7.4, or a co-existing condition that is being treated with a medicine that may pose an increased cardiac risk. [<a href={getUpdateLinkHref('Update-2022-1b')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-1b')} className="text-emerald-700 hover:underline">Update 2022-1b</a>]
                </p>
                
                <p>
                  <a id="rec7.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.4">7.4</a>
                  Refer for a cardiology opinion before starting medication for ADHD if any of the following apply:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>history of congenital heart disease or previous cardiac surgery</li>
                  <li>history of sudden death in a first-degree relative under 40 years suggesting a cardiac disease</li>
                  <li>shortness of breath on exertion compared with peers</li>
                  <li>fainting on exertion or in response to fright or noise</li>
                  <li>palpitations that are rapid, regular and start and stop suddenly (fleeting occasional bumps are usually ectopic and do not need investigation)</li>
                  <li>chest pain suggesting cardiac origin</li>
                  <li>signs of heart failure</li>
                  <li>a murmur heard on cardiac examination</li>
                  <li>blood pressure that is classified as hypertensive for adults</li>
                </ul>
                
                <p>
                  <a id="rec7.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.5">7.5</a>
                  Refer to a paediatric hypertension specialist before starting medication for ADHD if blood pressure is consistently above the 95th centile for age and height for children and young people.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Medication choice – children aged 5 years and over and young people</h3>
                
                <p>
                  <a id="rec7.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.6">7.6</a>
                  Offer methylphenidate (either short or long acting) as the first line pharmacological treatment for children aged 5 years and over and young people with ADHD, taking into consideration that this is an off-label use for children aged between 5 and 6 years. [<a href={getUpdateLinkHref('Update-2022-2')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-2')} className="text-emerald-700 hover:underline">Update 2022-2</a>]
                </p>
                
                <p>
                  <a id="rec7.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.7">7.7</a>
                  Consider switching to lisdexamfetamine for children aged 5 years and over and young people who have had a 6 week trial of methylphenidate at an adequate dose and have not derived enough benefit in terms of reduced ADHD symptoms and associated impairment.
                </p>
                
                <p>
                  <a id="rec7.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.8">7.8</a>
                  Consider dexamfetamine for children aged 5 years and over and young people whose ADHD symptoms are responding to lisdexamfetamine but who cannot tolerate the longer effect profile.
                </p>
                
                <p>
                  <a id="rec7.9" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.9">7.9</a>
                  Offer atomoxetine or guanfacine to children aged 5 years and over and young people if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>they cannot tolerate methylphenidate or lisdexamfetamine or</li>
                  <li>their symptoms have not responded to separate 6 week trials of lisdexamfetamine and methylphenidate, having considered alternative preparations and adequate doses.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Medication choice – adults</h3>
                
                <p>
                  <a id="rec7.10" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.10">7.10</a>
                  Offer lisdexamfetamine or methylphenidate as first-line pharmacological treatment for adults with ADHD. This is an off-label use of lisdexamfetamine for adults with no ADHD symptoms in childhood. [<a href={getUpdateLinkHref('Update-2022-3a')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-3a')} className="text-emerald-700 hover:underline">Update 2022-3a</a>] Not all preparations of methylphenidate are licensed for treating symptoms of ADHD in adults. [<a href={getUpdateLinkHref('Update-2022-3b')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-3b')} className="text-emerald-700 hover:underline">Update 2022-3b</a>]
                </p>
                
                <p>
                  <a id="rec7.11" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.11">7.11</a>
                  Consider switching to lisdexamfetamine for adults who have had a 6 week trial of methylphenidate at an adequate dose but have not derived enough benefit in terms of reduced ADHD symptoms and associated impairment.
                </p>
                
                <p>
                  <a id="rec7.12" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.12">7.12</a>
                  Consider switching to methylphenidate for adults who have had a 6 week trial of lisdexamfetamine at an adequate dose but have not derived enough benefit in terms of reduced ADHD symptoms and associated impairment.
                </p>
                
                <p>
                  <a id="rec7.13" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.13">7.13</a>
                  Consider dexamfetamine for adults whose ADHD symptoms are responding to lisdexamfetamine but who cannot tolerate the longer effect profile.
                </p>
                
                <p>
                  <a id="rec7.14" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.14">7.14</a>
                  Offer atomoxetine to adults if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>they cannot tolerate lisdexamfetamine or methylphenidate or</li>
                  <li>their symptoms have not responded to separate 6 week trials of lisdexamfetamine and methylphenidate, having considered alternative preparations and adequate doses.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Further medication choices</h3>
                
                <p>
                  <a id="rec7.15" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.15">7.15</a>
                  Obtain a second opinion or refer to a tertiary service if ADHD symptoms in a child aged 5 years or over, a young person or adult are unresponsive to one or more stimulants and one non-stimulant.
                </p>
                
                <p>
                  <a id="rec7.16" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.16">7.16</a>
                  Do not offer any of the following medications for ADHD without advice from a tertiary ADHD service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>guanfacine for adults</li>
                  <li>clonidine for children with ADHD and sleep disturbance, rages or tics</li>
                  <li>atypical antipsychotics in addition to stimulants for people with ADHD and coexisting pervasive aggression, rages or irritability</li>
                  <li>medications not included in recommendations <a href="#rec7.6" className="text-emerald-700 hover:underline">7.6</a> to <a href="#rec7.14" className="text-emerald-700 hover:underline">7.14</a>.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Medication choice – people with coexisting conditions</h3>
                
                <p>
                  <a id="rec7.17" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.17">7.17</a>
                  Offer the same medication choices to people with ADHD and anxiety disorder, tic disorder or autism spectrum disorder as other people with ADHD. See p52, Pharmacological Interventions, Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022). [<a href={getUpdateLinkHref('Update-2022-6')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-6')} className="text-emerald-700 hover:underline">Update 2022-6</a>]
                </p>
                
                <p>
                  <a id="rec7.18" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.18">7.18</a>
                  For children aged 5 years and over, young people and adults with ADHD experiencing an acute psychotic or manic episode:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>stop any medication for ADHD</li>
                  <li>refer back to a tertiary ADHD service or specialized psychiatrist who may consider restarting or starting new ADHD medication after the episode has resolved, taking into account the individual circumstances, risks and benefits of the ADHD medication.</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Considerations when prescribing ADHD medication</h3>
                
                <p>
                  <a id="rec7.19" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.19">7.19</a>
                  When prescribing stimulants for ADHD, think about modified-release once-daily preparations for the following reasons:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>convenience</li>
                  <li>improving adherence</li>
                  <li>reducing stigma (because there is no need to take medication at school or in the workplace)</li>
                  <li>reducing problems of storing and administering controlled drugs at school</li>
                  <li>the risk of stimulant misuse and diversion with immediate-release preparations</li>
                  <li>their pharmacokinetic profiles<br /><br />
                  Immediate-release preparations may be suitable if more flexible dosing regimens are needed, or during initial titration to determine correct dosing levels.</li>
                </ul>
                
                <p>
                  <a id="rec7.20" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.20">7.20</a>
                  When prescribing stimulants for ADHD, be aware that effect size, duration of effect and adverse effects vary from person to person.
                </p>
                
                <p>
                  <a id="rec7.21" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.21">7.21</a>
                  Think about using a modified-release preparation of methylphenidate in the morning and an immediate-release preparation of methylphenidate at another time of the day to extend the duration of effect. [<a href={getUpdateLinkHref('Update-2023-1')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2023-1')} className="text-emerald-700 hover:underline">Update 2023-1</a>]
                </p>
                
                <p>
                  <a id="rec7.22" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.22">7.22</a>
                  Be cautious about prescribing stimulants for ADHD if there is a risk of diversion for cognitive enhancement or appetite suppression.
                </p>
                
                <p>
                  <a id="rec7.23" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.23">7.23</a>
                  Do not offer immediate-release stimulants or modified-release stimulants that can be easily injected or insufflated if there is a risk of stimulant misuse or diversion.
                </p>
                
                <p>
                  <a id="rec7.24" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.24">7.24</a>
                  Take into consideration the nutritional status of the child (e.g. BMI) because of the risk of weight loss when taking stimulants.
                </p>
                
                <p>
                  <a id="rec7.25" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.25">7.25</a>
                  Prescribers should be familiar with the requirements of controlled drug legislation governing the prescription and supply of stimulants. See <a href="https://www.moh.gov.sa/en/Portal/WhatsNew/Pages/whatsNew-2012-01-07-001.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Saudi MOH Regulations and Controls for Narcotic Drugs and Psychotropic Substances</a>.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Dose titration</h3>
                
                <p>
                  <a id="rec7.26" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.26">7.26</a>
                  During the titration phase, ADHD symptoms, impairment and adverse effects should be recorded at baseline and at each dose change on standard scales by parents and teachers, and progress reviewed regularly (for example, by weekly telephone contact) with a specialist.
                </p>
                
                <p>
                  <a id="rec7.27" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.27">7.27</a>
                  Titrate the dose against symptoms and adverse effects in line with the Saudi National Formulary (SNF) until dose optimisation is achieved, that is, reduced symptoms, positive behaviour change, improvements in education, employment and relationships, with tolerable adverse effects.
                </p>
                
                <p>
                  <a id="rec7.28" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.28">7.28</a>
                  Ensure that dose titration is slower and monitoring more frequent if any of the following are present in people with ADHD, and require involvement of a relevant specialist:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, learning disability [intellectual disability])</li>
                  <li>mental health conditions (for example, anxiety disorders [including obsessive–compulsive disorder], schizophrenia or bipolar disorder, depression, personality disorder, eating disorder, post-traumatic stress disorder, substance misuse)</li>
                  <li>physical health conditions (for example, cardiac disease, epilepsy or acquired brain injury).</li>
                </ul>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Shared care for medication</h3>
                
                <p>
                  <a id="rec7.29" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec7.29">7.29</a>
                  After titration and dose stabilisation, prescribing and monitoring of ADHD medication should be carried out under a shared care arrangement with primary care if possible.
                </p>
              </div>
            </section>

            {/* Section 8 - Maintenance and monitoring */}
            <section id="maintenance-and-monitoring" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">8.</small> Maintenance and monitoring
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec8.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.1">8.1</a>
                  Monitor effectiveness of medication for ADHD and adverse effects, and document in the person's notes.
                </p>
                
                <p>
                  <a id="rec8.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.2">8.2</a>
                  Encourage people taking medication for ADHD to monitor and record their adverse effects, for example, by using an adverse effect checklist.
                </p>
                
                <p>
                  <a id="rec8.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.3">8.3</a>
                  Consider using standard symptom and adverse effect rating scales for clinical assessment and throughout the course of treatment for people with ADHD.
                </p>
                
                <p>
                  <a id="rec8.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.4">8.4</a>
                  Ensure that children, young people and adults receiving treatment for ADHD have review and follow up according to the severity of their condition, regardless of whether or not they are taking medication.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Height and weight</h3>
                
                <p>
                  <a id="rec8.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.5">8.5</a>
                  For people taking medication for ADHD:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>measure height every 6 months in children and young people</li>
                  <li>measure weight every 3 months in children 10 years and under</li>
                  <li>measure weight at 3 and 6 months after starting treatment in children over 10 years and young people, and every 6 months thereafter, or more often if concerns arise</li>
                  <li>measure weight every 6 months in adults</li>
                  <li>plot height and weight of children and young people on a growth chart and ensure review by the healthcare professional responsible for treatment.</li>
                </ul>
                
                <p>
                  <a id="rec8.6" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.6">8.6</a>
                  If weight loss is a clinical concern, consider the following strategies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>taking medication either with or after food, rather than before meals</li>
                  <li>taking additional meals or snacks early in the morning or late in the evening when stimulant effects have worn off</li>
                  <li>obtaining dietary advice</li>
                  <li>consuming high-calorie foods of good nutritional value</li>
                  <li>taking a planned break from treatment</li>
                  <li>changing medication</li>
                </ul>
                
                <p>
                  <a id="rec8.7" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.7">8.7</a>
                  If a child or young person's height over time is significantly affected by medication (that is, they have not met the height expected for their age), consider a planned break in treatment over school holidays to allow 'catch up' growth.
                </p>
                
                <p>
                  <a id="rec8.8" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.8">8.8</a>
                  Consider monitoring BMI of adults with ADHD if there has been weight change as a result of their treatment, and changing the medication if weight change persists
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Cardiovascular</h3>
                
                <p>
                  <a id="rec8.9" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.9">8.9</a>
                  Monitor heart rate and blood pressure and compare with the normal range for age before and after each dose change and every 6 months.
                </p>
                
                <p>
                  <a id="rec8.10" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.10">8.10</a>
                  Do not offer routine blood tests (including liver function tests) or ECGs to people taking medication for ADHD unless there is a clinical indication.
                </p>
                
                <p>
                  <a id="rec8.11" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.11">8.11</a>
                  If a person taking ADHD medication has sustained resting tachycardia (more than 120 beats per minute), arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on 2 occasions, reduce their dose and refer them to a paediatric hypertension specialist or adult physician.
                </p>
                
                <p>
                  <a id="rec8.12" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.12">8.12</a>
                  If a person taking guanfacine has sustained orthostatic hypotension or fainting episodes, reduce their dose or switch to another ADHD medication.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Tics</h3>
                
                <p>
                  <a id="rec8.13" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.13">8.13</a>
                  If a person taking stimulants develops tics, think about whether:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the tics are related to the stimulant (tics naturally wax and wane) and</li>
                  <li>the impairment associated with the tics outweighs the benefits of ADHD treatment.</li>
                </ul>
                
                <p>
                  <a id="rec8.14" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.14">8.14</a>
                  If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine (off-label use for adults with no ADHD symptoms in childhood) [<a href={getUpdateLinkHref('Update-2022-4a')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-4a')} className="text-emerald-700 hover:underline">Update 2022-4a</a>], clonidine (off-label use for children) [<a href={getUpdateLinkHref('Update-2022-4b')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-4b')} className="text-emerald-700 hover:underline">Update 2022-4b</a>], or stopping medication. Clonidine should only be considered for people under 18 years after advice from a tertiary ADHD service. [<a href={getUpdateLinkHref('Update-2022-4c')} onClick={(e) => handleUpdateLinkClick(e, 'Update-2022-4c')} className="text-emerald-700 hover:underline">Update 2022-4c</a>]
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Sexual dysfunction</h3>
                
                <p>
                  <a id="rec8.15" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.15">8.15</a>
                  Monitor young people and adults with ADHD for sexual dysfunction (that is, erectile and ejaculatory dysfunction) as potential adverse effects of atomoxetine.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Seizures</h3>
                
                <p>
                  <a id="rec8.16" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.16">8.16</a>
                  If a person with ADHD develops new seizures or a worsening of existing seizures, review their ADHD medication and stop any medication that might be contributing to the seizures. After investigation with the treating neurologist, cautiously reintroduce ADHD medication if it is unlikely to be the cause of the seizures.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Sleep</h3>
                
                <p>
                  <a id="rec8.17" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.17">8.17</a>
                  Monitor changes in sleep pattern (for example, with a sleep diary) and adjust medication accordingly.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Worsening behaviour</h3>
                
                <p>
                  <a id="rec8.18" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.18">8.18</a>
                  Monitor the behavioural response to medication, and if behaviour worsens adjust medication and review the diagnosis.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Stimulant diversion</h3>
                
                <p>
                  <a id="rec8.19" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec8.19">8.19</a>
                  Healthcare professionals and parents or carers should monitor changes in the potential for stimulant misuse and diversion, which may come with changes in circumstances and age.
                </p>
              </div>
            </section>

            {/* Section 9 - Adherence to treatment */}
            <section id="adherence-to-treatment" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">9.</small> Adherence to treatment
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec9.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec9.1">9.1</a>
                  Be aware that the symptoms of ADHD may lead to people having difficulty adhering to treatment plans (for example, remembering to order and collect medication).
                </p>
                
                <p>
                  <a id="rec9.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec9.2">9.2</a>
                  Ensure that people are fully informed of the balance of risks and benefits of any treatment for ADHD and check that problems with adherence are not due to misconceptions (for example, tell people that medication does not change personality).
                </p>
                
                <p>
                  <a id="rec9.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec9.3">9.3</a>
                  Encourage the person with ADHD to use the following strategies to support adherence to treatment:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>being responsible for their own health, including taking their medication as needed</li>
                  <li>following clear instructions about how to take the medication in picture or written format, which may include information on dose, duration, adverse effects, dosage schedule (the instructions should stay with the medication, for example, a sticker on the side of the packet)</li>
                  <li>using visual reminders to take medication regularly (for example, apps, alarms, clocks, pill dispensers, or notes on calendars or fridges)</li>
                  <li>taking medication as part of their daily routine (for example, before meals or after brushing teeth)</li>
                  <li>attending peer support groups (for both the person with ADHD and for the families and carers).</li>
                </ul>
                
                <p>
                  <a id="rec9.4" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec9.4">9.4</a>
                  Encourage parents and carers to oversee ADHD medication for children and young people.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-6 mb-4">Supporting adherence to non-pharmacological treatments</h3>
                
                <p>
                  <a id="rec9.5" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec9.5">9.5</a>
                  Support adherence to non-pharmacological treatments (for example, CBT) by discussing the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>the balance of risks and benefits (for example, how the treatment can have a positive effect on ADHD symptoms)</li>
                  <li>the potential barriers to continuing treatment, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>not being sure if it is making any difference</li>
                      <li>the time and organisational skills needed to commit to the treatment</li>
                      <li>the time that might be needed outside of the sessions (for example, to complete homework)</li>
                    </ul>
                  </li>
                  <li>strategies to deal with any identified barriers (for example, scheduling sessions to minimise inconvenience or seeking courses with child care provision)</li>
                  <li>a possible effect of treatment being increased self-awareness, and the challenging impact this may have on the person and the people around them</li>
                  <li>the importance of long-term adherence beyond the duration of any initial programme (for example, by attending follow up/refresher support to sustain learned strategies).</li>
                </ul>
              </div>
            </section>

            {/* Section 10 - Review of medication and discontinuation */}
            <section id="review-of-medication-and-discontinuation" className="scroll-mt-20 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                <small className="text-slate-600">10.</small> Review of medication and discontinuation
              </h2>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  <a id="rec10.1" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec10.1">10.1</a>
                  A healthcare professional with training and expertise in managing ADHD should review ADHD medication at least once a year and discuss with the person with ADHD (and their families and carers as appropriate) whether medication should be continued. The review should include a comprehensive assessment of the:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>preference of the child, young person or adult with ADHD (and their family or carers as appropriate)</li>
                  <li>benefits, including how well the current treatment is working throughout the day</li>
                  <li>adverse effects</li>
                  <li>clinical need and whether medication has been optimised</li>
                  <li>impact on education and/or employment</li>
                  <li>effects of missed doses, planned dose reductions and periods of no treatment</li>
                  <li>effect of medication on existing or new mental health, physical health or neurodevelopmental conditions</li>
                  <li>need for support and type of support (for example, psychological, educational, social) if medication has been optimised but ADHD symptoms continue to cause a significant impairment.</li>
                </ul>
                
                <p>
                  <a id="rec10.2" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec10.2">10.2</a>
                  Encourage people with ADHD to discuss any preferences to stop or change medication and to be involved in any decisions about stopping treatments.
                </p>
                
                <p>
                  <a id="rec10.3" className="bookmark text-emerald-700 font-semibold mr-2" href="#rec10.3">10.3</a>
                  Consider trial periods of stopping medication or reducing the dose when assessment of the overall balance of benefits and harms suggests this may be appropriate. If the decision is made to continue medication, the reasons for this should be documented.
                </p>
              </div>
            </section>
          </section>
        </div>

        {/* Table of Contents - Narrow Right Column */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20 z-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Table Of Contents</h2>
            <div className="border-t border-slate-200 mb-4"></div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#recommendations" onClick={(e) => handleAnchorClick(e, '#recommendations')} className="hover:text-emerald-600 transition-colors">Evidence-Based Clinical Practice Guideline for Management of ADHD in Saudi Arabia</a>
              </li>
              <li>
                <a href="#service-organizations-and-training" onClick={(e) => handleAnchorClick(e, '#service-organizations-and-training')} className="hover:text-emerald-600 transition-colors">1. Service Organizations and Training</a>
              </li>
              <li>
                <a href="#recognition-identification-and-referral" onClick={(e) => handleAnchorClick(e, '#recognition-identification-and-referral')} className="hover:text-emerald-600 transition-colors">2. Recognition, identification and referral</a>
              </li>
              <li>
                <a href="#diagnosis" onClick={(e) => handleAnchorClick(e, '#diagnosis')} className="hover:text-emerald-600 transition-colors">3. Diagnosis</a>
              </li>
              <li>
                <a href="#support" onClick={(e) => handleAnchorClick(e, '#support')} className="hover:text-emerald-600 transition-colors">4. Support</a>
              </li>
              <li>
                <a href="#managing-adhd" onClick={(e) => handleAnchorClick(e, '#managing-adhd')} className="hover:text-emerald-600 transition-colors">5. Managing ADHD</a>
              </li>
              <li>
                <a href="#dietary-advice" onClick={(e) => handleAnchorClick(e, '#dietary-advice')} className="hover:text-emerald-600 transition-colors">6. Dietary advice</a>
              </li>
              <li>
                <a href="#medication" onClick={(e) => handleAnchorClick(e, '#medication')} className="hover:text-emerald-600 transition-colors">7. Medication</a>
              </li>
              <li>
                <a href="#maintenance-and-monitoring" onClick={(e) => handleAnchorClick(e, '#maintenance-and-monitoring')} className="hover:text-emerald-600 transition-colors">8. Maintenance and monitoring</a>
              </li>
              <li>
                <a href="#adherence-to-treatment" onClick={(e) => handleAnchorClick(e, '#adherence-to-treatment')} className="hover:text-emerald-600 transition-colors">9. Adherence to treatment</a>
              </li>
              <li>
                <a href="#review-of-medication-and-discontinuation" onClick={(e) => handleAnchorClick(e, '#review-of-medication-and-discontinuation')} className="hover:text-emerald-600 transition-colors">10. Review of medication and discontinuation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpgClinicalRecommendationsPage;
