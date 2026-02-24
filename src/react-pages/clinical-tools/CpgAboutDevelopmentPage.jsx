import React from 'react';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';
import { withBase } from '../../utils/assets';

const CpgAboutDevelopmentPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => {
  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `${window.location.pathname}${anchorId}`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} locale={locale} />

      {/* Two Column Layout: Content Left, Sections Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Wide Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Introduction */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <p className="text-slate-600 text-sm md:text-base">
              The Saudi ADHD CPG Project decided to utilize the Modified ADAPTE framework for trans-contextual adaptation of CPGs (rather than <em>de novo</em> development) that was published by the King Saud University CPG Program. The rationale for this decision was the lack of high quality randomized controlled trials and systematic reviews with meta-analyses from the local patient population with ADHD that could support formulation of new recommendations. Additionally, the existence of a large number of evidence-based CPGs with a variable degree of quality as per the definition of the current international standards for trustworthy or high-quality CPGs that imposes a degree of confusion for clinicians during their selection and utilization of evidence-based CPGs for their daily practice and patient care.
            </p>
          </div>

          {/* Scope and Purpose */}
          <section id="scope-and-purpose" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scope and Purpose</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Disease/Condition</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Attention-deficit hyperactivity disorder (ADHD) and related diagnoses*
                </p>
                <p className="text-slate-600 text-sm md:text-base mt-2">
                  *The three ADHD presentations (formally "sub-types") as defined in the International Classification of Diseases, 11th revision [ICD-11], and the Diagnostic and Statistical Manual of Mental Disorders, 5th Edition [DSM-V].
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Clinical Practice Guideline Category</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Counselling, Diagnosis, Evaluation, Management, and Treatment
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Clinical Practice Guideline Objective(s)</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
                  <li>To provide recommendations on the diagnosis and treatment of attention deficit hyperactivity disorder (ADHD) in children, young people, and adults</li>
                  <li>To assist clinicians, people with ADHD, and their carers by identifying the merits of particular treatment approaches where the evidence from research and clinical experience exists</li>
                  <li>Specifically, the guideline aims to:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Examine the validity of the diagnostic construct of ADHD</li>
                      <li>Evaluate the role of specific pharmacological agents and non-pharmacological, psychological, and psychosocial interventions in the treatment and management of ADHD</li>
                      <li>Evaluate the role of specific services and systems for providing those services in the treatment and management of ADHD</li>
                      <li>Integrate the above to provide best-practice advice on the care of people with a diagnosis of ADHD through the different phases and manifestations of the disorder, including the initiation and maintenance of treatment for the chronic condition, the treatment of acute episodes and the promotion of well-being</li>
                      <li>Consider economic aspects of various interventions for ADHD.</li>
                      <li>Evaluate the clinical effectiveness and cost-effectiveness of elimination and restriction diets and of dietary supplementation with polyunsaturated fatty acids (PUFAs) on children and young people with ADHD</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Health / Clinical Question (PIPOH)</h3>
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  The health questions (clinical/key questions) were formulated by utilizing the ADAPTE tool 6 the PIPOH model (Population – Intervention – Professionals – Outcome – Healthcare settings) as the following:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">P: Patient (Target Population)</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Children under 5 years, children and young people (aged 5 to 17 years), and adults aged 18 years or over who are suspected to have ADHD or have a diagnosis of ADHD.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">I: Interventions and Practices Considered / CPG Category</h4>
                    <ol className="list-decimal pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                      <li>Service organisation and training</li>
                      <li>Recognition, identification and referral</li>
                      <li>Diagnosis</li>
                      <li>Information and support</li>
                      <li>Managing ADHD</li>
                      <li>Dietary advice</li>
                      <li>Medication</li>
                      <li>Maintenance and monitoring</li>
                      <li>Adherence to treatment</li>
                      <li>Review of medication and discontinuation</li>
                      <li>Terms used in this guideline</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">P: Professionals (Intended/Target Users or Stakeholders)</h4>
                    <ol className="list-decimal pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                      <li>Dietitians</li>
                      <li>Nurses</li>
                      <li>Occupational Therapists</li>
                      <li>Patients</li>
                      <li>Pharmacists</li>
                      <li>Physician Assistants</li>
                      <li>Physicians</li>
                      <li>Psychologists/Non-physician Behavioural Health Clinicians</li>
                      <li>Social Workers</li>
                      <li>Students</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">Clinical Specialty</h4>
                    <ol className="list-decimal pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                      <li>Family Practice/General Practice</li>
                      <li>Clinical Nutrition</li>
                      <li>Neurology/Paediatric Neurology</li>
                      <li>General Paediatrics/Behavioural and Developmental Paediatrics</li>
                      <li>General Psychiatry/Child and Adolescent Psychiatry</li>
                      <li>Clinical Psychology/Educational Psychology</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">O: Major Outcomes Considered</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                      <li>Sensitivity and specificity of diagnostic measures</li>
                      <li>Clinical effectiveness</li>
                      <li>ADHD symptoms and severity</li>
                      <li>Comorbidities (e.g. conduct problems, anxiety)</li>
                      <li>Social skills</li>
                      <li>Academic (e.g. reading &amp; mathematics) and occupational performance</li>
                      <li>Emotional outcomes and self-efficacy</li>
                      <li>Response to treatment</li>
                      <li>Adverse effects of treatment</li>
                      <li>Cost-effectiveness</li>
                      <li>Quality of life</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">H: Healthcare Settings</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Primary, secondary and tertiary care settings dealing with assessment, treatment and management of ADHD in Saudi Arabia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations for research */}
          <section id="recommendations-for-research" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommendations for research</h2>
            <p className="text-slate-600 text-sm md:text-base mb-4">
              The guideline committee has made the following recommendations for research.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base">
              <li>National Prevalence. An investigation of the prevalence of ADHD on a national level with consideration of differing regional and societal factors</li>
              <li>Acceptance among educators. Attitudes of teachers and educators towards ADHD in general, towards having children aged 5-18 years with ADHD (as a primary diagnosis) in their classrooms, and towards providing educational accommodations for children with ADHD</li>
              <li>School environment. What is the impact of school environment on the academic performance of children aged 5-18 years with ADHD compared to their peers?</li>
              <li>Scholastic achievement: What is the impact of ADHD management on the academic achievement of persons with ADHD?</li>
              <li>Children and young people aged 5 to 18 years – brief, group-based, ADHD focused, parent-training intervention: What is the clinical and cost effectiveness, and optimum length?</li>
              <li>Medication choice in people with coexisting conditions: What is the clinical and cost effectiveness of ADHD medications in people with ADHD and tic disorders, a history of psychosis or mania, or personality disorder?</li>
              <li>Medication choice in people with no previous exposure to medication for ADHD: What is the clinical and cost effectiveness of ADHD medications in this population?</li>
              <li>Prescribing beyond monotherapy: What is the clinical and cost effectiveness of various ADHD prescribing strategies when monotherapy has failed?</li>
              <li>Diversion and misuse of stimulants: What is the actual national prevalence of, and risk factors for this phenomenon?</li>
              <li>Stigma: What are the various perceptions of children of all ages, adults, parents and other carers related to both ADHD and its medications?</li>
              <li>Road traffic accidents (RTAs): What proportion of RTAs nationally, and what proportion of resulting morbidity and mortality, may be attributable to untreated or under-treated ADHD?</li>
              <li>Substance use: What is the prevalence of ADHD among individuals with substance use disorders (SUDs), and what is the impact on the risk for SUDs of adequate management of ADHD?</li>
              <li>Genetic environment: What are the unique genetic risk factors, if any, for the development of ADHD in Saudi Arabia?</li>
              <li>Service availability in primary care: What is the clinical, functional, and economic impact of enabling access to ADHD management in primary care settings?</li>
              <li>Basic science research and clinical research, clinical trials for therapies and new medication, use of fMRI, PET, MEG scan</li>
              <li>Financial and economic studies <a href="#_ftn1" className="text-emerald-700 hover:underline">[1]</a></li>
            </ol>
          </section>

          {/* Implementation Considerations and Tools */}
          <section id="implementation-considerations-and-tools" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Implementation Considerations and Tools</h2>
            <p className="text-slate-600 text-sm md:text-base mb-6">
              The Saudi ADHD CPG Adaptation Group decided to adopt the implementation interventions and tools provided by the NICE CG72 in addition to an ADHD Medication Table and a Clinical algorithm that were developed by the group based on the adapted ADHD recommendations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Implementation Tools</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  The panel decided to adopt the following implementation tools developed by NICE including:
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Implementation interventions or strategies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">1. Leadership engagement and commitment:</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Ensure the involvement of the leadership and senior staff at the outset of the pilot implementation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">2. Dissemination:</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Raise awareness through routine communication channels (e.g. email or newsletters, regular meetings, internal staff briefings and other communications with all relevant partner organisations). Identify things staff can directly include in their own practice.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">3. Clinical and Quality Champions:</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Identify a lead with an interest in ADHD to champion the CPG and motivate others to support its use and make service changes, and to explore any significant issues locally.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">4. Training and education:</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Regular training and education sessions on the recommendations and evidence-base of this CPG for all relevant healthcare providers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">5. Patients as champions for change:</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Similar plans of health education for patients, parents, and the public should be considered to improve the public awareness about the condition.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">6. Audit and feedback:</h4>
                    <div className="text-slate-600 text-sm md:text-base space-y-2">
                      <p>Conduct a baseline assessment (pre-implementation) against the recommendations to find out whether there are gaps in current provision of care of ADHD.</p>
                      <p>Plan ahead and think about what data is needed to measure improvement and plan how it will be collected. Collaborate with other health and social care organisations and specialist groups to compare current practices with the CPG recommendations. This may also help identify local issues that will slow or prevent implementation.</p>
                      <p>Conduct a post-implementation audit and compare to identify any gaps or barriers.</p>
                      <p>Develop an action plan, with the steps needed to put the CPG into practice, and make sure it is ready as soon as possible. Big, complex changes may take longer to implement, but some may be quick and easy to do. For very big changes include milestones and a business case, which will set out additional costs, savings and possible areas for disinvestment. A small project group could develop the action plan. The group might include the CPG champion, a senior organisational sponsor, staff involved in the associated services, finance and information professionals. Implement the action plan with oversight from the lead and the project group. Big projects may also need project management support.</p>
                      <p><strong>Regular PDCA (Plan – Do – Check – Act</strong>) quality improvement cycles should be conducted regularly and monitored by the quality measures.</p>
                      <p><strong>Networking with existing relevant projects in the organization</strong> (e.g. scientific activities, performance improvement, accreditation, etc.)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Adaptation Process Methodology */}
          <section id="adaptation-process-methodology" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Adaptation Process Methodology</h2>
            <p className="text-slate-600 text-sm md:text-base mb-4">
              The description of the methodology for the production of this CPG can be fulfilled by utilizing the King Saud University-Modified ADAPTE method (42), as this method was approved by the Saudi ADHD CPG Project at the Saudi ADHD Society to be the method of CPG synthesis. This CPG adaptation method includes three phases (setup, adaptation, and finalization), nine modules, and 24 steps with modifications in the steps and tools to suit the local general healthcare setting in Saudi Arabia.
            </p>
            <p className="text-slate-600 text-sm md:text-base mb-6">
              Overall, the steps include selection of the health topic, formulation of the CPG adaptation working group, identification of health questions using the PIPOH model, searching and selecting Source CPGs with clear inclusion and exclusion criteria, quality assessment of included Source CPGs by using the Appraisal of guidelines for research and evaluation (AGREE II) Instrument, assessment of the currency of the selected Source CPG, drafting of the Adapted CPG, external review and consultation process, finalization of the Adapted CPG with a set of implementation tools, declaration of conflicts of interests, and finally a plan for review and update. For further details on the specific modifications in steps and tools, refer to the article by Amer et al. 2018 (42).
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">CPG Overview</h3>
                <div className="space-y-2 text-slate-600 text-sm md:text-base">
                  <p><strong>CPG Title:</strong> Evidence-Based Clinical Practice Guidelines for Management of Attention Deficit Hyperactive Disorder</p>
                  <p><strong>CPG Release Date:</strong> 2018 (First Edition)</p>
                  <p><strong>Status:</strong> Adopted using the Modified ADAPTE Method, based on the original ADAPTE Manual &amp; Resource Toolkit-Version 2.0 for trans-contextual adaptation of CPGs released by the Guidelines International Network Adaptation Working Group (The former ADAPTE collaboration).</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Adaptation Working Group</h3>
                <p className="text-slate-600 text-sm md:text-base mb-2">
                  Members of the Saudi ADHD Society's working group on the development of Saudi unified clinical practice guidelines for ADHD. All members of the panel have filled the "Declaration of Conflict of Interest" (ADAPTE Tool 3).
                </p>
                <p className="text-slate-600 text-sm md:text-base">
                  See <a href={getHref('adhd-cpg-about-acknowledgements', basePath, locale)} className="text-emerald-700 hover:underline">CPG Adaptation Committee</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Source CPG Developers</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                  <li>National Institute of Health and Care Excellence (NICE)</li>
                  <li>National Collaborating Centre for Mental Health (NCCMH)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Searching &amp; Selection of CPGs</h3>
                <p className="text-slate-600 text-sm md:text-base mb-2">
                  The protocol for the systematic review of ADHD CPGs for the purpose of this project was published in <a href="https://www.crd.york.ac.uk/PROSPERO/display_record.php?RecordID=78712&VersionID=1184161" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline"><em>PROSPERO</em>, CRD42017078712</a> (43).
                </p>
                <p className="text-slate-600 text-sm md:text-base mb-2">List of the Main CPG Database websites we searched:</p>
                <ol className="list-decimal pl-6 space-y-1 text-slate-600 text-sm md:text-base mb-4">
                  <li>Guidelines international Network (G-I-N)</li>
                  <li>National Guidelines Clearinghouse (NGC)</li>
                  <li>National Institute of Health and Clinical Excellence (NICE)</li>
                  <li>Medline/PubMed</li>
                  <li>Google Scholar</li>
                </ol>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">Keywords</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Key words used included "attention-deficit/hyperactivity disorder" or "ADHD," and "guideline," "practice guideline," "clinical practice guideline," "practice parameter," "guidance," or "recommendations".
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">Eligibility Criteria for Source CPGs</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-slate-600 text-sm md:text-base">
                      <li><strong>Methods of Development:</strong> Evidence-Based CPGs: (Detailed Methodology of Development Documented; link Recommendations with Evidence; link to Systematic Reviews) rather than Consensus-based CPGs (Expert opinion)</li>
                      <li><strong>Author(s): </strong>Group authorship (CPG development group) from CPG developer organizations and Specialized Society (clinical specialty) rather than single author CPGs.</li>
                      <li><strong>Country</strong>: International and National CPGs.</li>
                      <li><strong>Date of Publication:</strong> Range of year of publications (2012 – 2017). An updated search was conducted in 2018.</li>
                      <li><strong>Language:</strong> English CPGs only (also<em> ARABIC</em> if any; but can be excluded as they are not Evidence-Based simply they are adopted from other source CPGs)</li>
                      <li><strong>Status:</strong> Only original source CPG (de novo developed) rather than adapted CPGs</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">List of Retrieved Source CPGs</h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  Six recent ADHD CPGs complying with the identified PIPOH and eligibility criteria were included. These CPGs were developed by the following organizations:-
                </p>
                <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm md:text-base">
                  <li>American Academy of Paediatrics (AAP) in 2012,</li>
                  <li>University of Michigan Health System (UMHS) ADHD Guideline Team in 2012,</li>
                  <li>National Institute of Health and Care Excellence (NICE) 2016 (and updated in 2018),</li>
                  <li>National Health Medical Research Centre (NHMRC) in 2013,</li>
                  <li>the Canadian ADHD Resource Alliance (CADDRA) in 2011/ 2014, and</li>
                  <li>Singapore Ministry of Health (SMOH) in 2014 Subcommittee on Attention-Deficit/Hyperactivity Disorder</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Guideline Authorship:</h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  The organizing committee has decided on group authorship and stated the order of authorship
                </p>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Name of the Working Group (Panel):</h4>
                  <p className="text-slate-600 text-sm md:text-base">'CPG Adaptation for Management of ADHD'</p>
                </div>
                <div className="space-y-2 mt-3">
                  <h4 className="text-base font-bold text-slate-900">Name of the Project Lead:</h4>
                  <p className="text-slate-600 text-sm md:text-base">Dr Turki Albatti</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Assessment of the Quality of the Source CPGs using the AGREE II Instrument</h3>
                <h4 className="text-base font-bold text-slate-900 mb-3">The Appraisal of Guidelines for Research &amp; Evaluation II (AGREE II) Instrument (<a href="https://www.agreetrust.org" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">www.agreetrust.org</a>)</h4>
                
                <div className="bg-white border border-slate-100 rounded-lg p-4 mb-4">
                  <h5 className="font-bold text-slate-900 mb-3">Table (1): Tool No. 9. AGREE II Standardized Domain Scores for critical appraisal of ADHD CPGs</h5>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-200 text-sm">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold"></th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">AAP</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">CADDRA</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">NICE</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">NHMRC</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">SMOH</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">UMHS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">D1: Scope &amp; Purpose</td>
                          <td className="border border-slate-200 px-4 py-2">80%</td>
                          <td className="border border-slate-200 px-4 py-2">74%</td>
                          <td className="border border-slate-200 px-4 py-2">100%</td>
                          <td className="border border-slate-200 px-4 py-2">72%</td>
                          <td className="border border-slate-200 px-4 py-2">37%</td>
                          <td className="border border-slate-200 px-4 py-2">91%</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2">D2: Stakeholder Involvement</td>
                          <td className="border border-slate-200 px-4 py-2">67%</td>
                          <td className="border border-slate-200 px-4 py-2">50%</td>
                          <td className="border border-slate-200 px-4 py-2">96%</td>
                          <td className="border border-slate-200 px-4 py-2">76%</td>
                          <td className="border border-slate-200 px-4 py-2">59%</td>
                          <td className="border border-slate-200 px-4 py-2">43%</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">D3: Rigour of Development</td>
                          <td className="border border-slate-200 px-4 py-2">66%</td>
                          <td className="border border-slate-200 px-4 py-2">35%</td>
                          <td className="border border-slate-200 px-4 py-2">93%</td>
                          <td className="border border-slate-200 px-4 py-2">53%</td>
                          <td className="border border-slate-200 px-4 py-2">47%</td>
                          <td className="border border-slate-200 px-4 py-2">60%</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2">D4: Clarity &amp; Presentation</td>
                          <td className="border border-slate-200 px-4 py-2">76%</td>
                          <td className="border border-slate-200 px-4 py-2">63%</td>
                          <td className="border border-slate-200 px-4 py-2">89%</td>
                          <td className="border border-slate-200 px-4 py-2">65%</td>
                          <td className="border border-slate-200 px-4 py-2">83%</td>
                          <td className="border border-slate-200 px-4 py-2">81%</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">D5: Applicability</td>
                          <td className="border border-slate-200 px-4 py-2">64%</td>
                          <td className="border border-slate-200 px-4 py-2">35%</td>
                          <td className="border border-slate-200 px-4 py-2">92%</td>
                          <td className="border border-slate-200 px-4 py-2">29%</td>
                          <td className="border border-slate-200 px-4 py-2">69%</td>
                          <td className="border border-slate-200 px-4 py-2">69%</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2">D6: Editorial Independence</td>
                          <td className="border border-slate-200 px-4 py-2">75%</td>
                          <td className="border border-slate-200 px-4 py-2">78%</td>
                          <td className="border border-slate-200 px-4 py-2">92%</td>
                          <td className="border border-slate-200 px-4 py-2">67%</td>
                          <td className="border border-slate-200 px-4 py-2">28%</td>
                          <td className="border border-slate-200 px-4 py-2">69%</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2 font-bold">Overall assessment</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">56%</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">67%</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">100%</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">56%</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">50%</td>
                          <td className="border border-slate-200 px-4 py-2 font-bold">72%</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2 font-bold">Recommendation for use</td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-1, Yes with modifications-2, No-0</em></td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-1, Yes with modifications-2, No-0</em></td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-1, Yes with modifications-2, No-0</em></td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-0, Yes with modifications-3, No-0</em></td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-0, Yes with modifications-2, No-1</em></td>
                          <td className="border border-slate-200 px-4 py-2"><em>Yes-2, Yes with modifications-1, No-0</em></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm md:text-base mb-2">
                  The AGREE II Domain Score Colour Coding (&lt; 40% red &gt; 41 – 70% yellow &gt; 71 % green)
                </p>
                <p className="text-slate-600 text-sm md:text-base">
                  Therefore, The Overall Assessment and decision of the panel was to adapt the NICE NG87 and to exclude the other five CPGs due to higher AGREE domain scores of NICE NG87
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Assessment of Currency of the Selected Source CPG</h3>
                <div className="bg-white border border-slate-100 rounded-lg p-4">
                  <h5 className="font-bold text-slate-900 mb-3">Table (3): Tool No. 11. Sample Currency Survey of the CPG Developer</h5>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-200 text-sm">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold">NICE CG59 2016 Update</th>
                          <th className="border border-slate-200 px-4 py-2 text-left font-bold"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">Are you aware of any new evidence relevant to this CPG statement?</td>
                          <td className="border border-slate-200 px-4 py-2">No</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2">Is there any new evidence to invalidate any of the recommendations comprising the CPG?</td>
                          <td className="border border-slate-200 px-4 py-2">No</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">Are there any plans to update the CPG in the near future?</td>
                          <td className="border border-slate-200 px-4 py-2">No (after 4 years)</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-200 px-4 py-2">When the CPG was last updated?</td>
                          <td className="border border-slate-200 px-4 py-2">The updated CPG was issued: May 2018</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-4 py-2">What is the citation for the latest version?</td>
                          <td className="border border-slate-200 px-4 py-2"><strong><a href="https://www.nice.org.uk/guidance/ng87" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">https://www.nice.org.uk/guidance/ng87</a></strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">External Review and Consultation Process</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">Reviewers for the Clinical Content</h4>
                    <p className="text-slate-600 text-sm md:text-base mb-2">
                      Who was asked to review the clinical content of the CPG?
                    </p>
                    <p className="text-slate-600 text-sm md:text-base">
                      See <a href={getHref('adhd-cpg-about-acknowledgements', basePath, locale)} className="text-emerald-700 hover:underline">External Reviewers: Clinical Content</a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">Reviewers for the Adaptation Methodology</h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      See <a href={getHref('adhd-cpg-about-acknowledgements', basePath, locale)} className="text-emerald-700 hover:underline">External Reviewers: Methodology</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guideline Registration */}
          <section id="guideline-registration" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Guideline Registration</h2>
            <p className="text-slate-600 text-sm md:text-base mb-4">
              Following publication of the first edition, the Evidence-based clinical practice guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia was registered with the International Practice Guideline Registry Platform (IPGRP) on 23 November 2021.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-700 text-sm md:text-base mb-2">
                  <strong>Registration Number:</strong> IPGRP-2021CN379
                </p>
                <p className="text-slate-700 text-sm md:text-base mb-3">
                  <strong>Registration Date:</strong> 23 November 2021
                </p>
                <a
                  href="https://www.guidelines-registry.org/guid/1332"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-emerald-700 font-semibold hover:underline"
                >
                  View IPGRP registration record
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
              <div className="border border-slate-200 rounded-lg p-4 bg-white">
                <img
                  src={withBase(basePath, 'images/ipgrp-registration-receipt.png')}
                  alt="IPGRP Protocol Registration Receipt for the Saudi National ADHD CPG" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
                />
                <p className="text-xs text-slate-500 text-center mt-2">
                  Protocol Registration Receipt issued by the International Practice Guideline Registry Platform (IPGRP)
                </p>
              </div>
            </div>
          </section>

          {/* Plan for Scheduled Review and Update */}
          <section id="plan-for-scheduled-review-and-update" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Plan for Scheduled Review and Update</h2>
            <p className="text-slate-600 text-sm md:text-base mb-4">
              The group has decided for the next review of this adapted CPG to be after <strong>four years</strong> from the publication date (July 2020) which should be on (July 2024) after checking for updates in the Source CPG, consultation of expert opinion on the changes needed for updating according to the newest evidence and recommendations published in this area in addition to the implementation and evaluation results at relevant healthcare organizations in the Kingdom.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2 border-t border-slate-100">
              <p className="text-xs md:text-sm text-slate-500 max-w-2xl">
                For information about the current 2025–2026 major update cycle and the ongoing development process, see the CPG Research Project page.
              </p>
              <a
                href={getHref('cpg-overview', basePath, locale)}
                className="inline-flex items-center text-emerald-700 font-semibold text-xs md:text-sm hover:underline"
              >
                View Saudi National ADHD CPG Overview
              </a>
            </div>
          </section>

          {/* List of Funding Sources */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">List of Funding Sources</h2>
            <p className="text-slate-600 text-sm md:text-base">
              This work was completely funded by the Saudi ADHD Society and was not related by any means to any pharmaceutical or industrial company. The Saudi ADHD Society did not influence the selection of the Source CPG or the final adapted recommendations.
            </p>
          </section>

          {/* References */}
          <section id="references" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">References</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600 text-sm md:text-base">
              <li>World Health Organization. World Health Organization. [Online].; 2018. Available from: https://www.who.int/classifications/icd/en/.</li>
              <li>Turgay A, Goodman DW, Asherson P, Lasser RA, Babcock TF, Pucci ML. Lifespan persistence of ADHD: the life transition model and its application. J Clin Psychiatry. 2012; 73(2): p. 192-201.</li>
              <li>Pliszka SR. Attention-Deficit Hyperactivity Disorder Across the Lifespan. Focus. 2016; 14(1): p. 46-53.</li>
              <li>American Psychiatric Association. Diagnostic and statistical manual of mental disorders (5th ed.) (DSM-5®) Arlington, VA: American Psychiatric Pub; 2013.</li>
              <li>Biederman J, Faraone SV. Current concepts on the neurobiology of Attention-Deficit/Hyperactivity Disorder. Journal of Attention Disorders. 2002; 6: p. Suppl 1: S7-16.</li>
              <li>Shinwari JM, Al Yemni EA, Alnaemi FM, Abebe D, Al-Abdulaziz BS, Al Mubarak BR, et al. Analysis of shared homozygosity regions in Saudi siblings with attention deficit hyperactivity disorder. Psychiatric genetics. 2017 Aug; 27(4): p. 131.</li>
              <li>Sharma A, Couture J. A review of the pathophysiology, etiology, and treatment of attention-deficit hyperactivity disorder (ADHD). Annals of Pharmacotherapy. 2014 Feb; 48(2): p. 209-225.</li>
              <li>Biederman J, Newcorn J, Sprich S. Comorbidity of attention deficit hyperactivity disorder with conduct, depressive, anxiety, and other disorders. The American journal of psychiatry. 1991 May 1; 148(5): p. 564.</li>
              <li>Alqahtani MM. The comorbidity of ADHD in the general population of Saudi Arabian school-age children. Journal of attention disorders. 2010 Jul; 14(1): p. 25-30.</li>
              <li>Hammad MA, Awed HS. Social Information Processing and Reactive and Proactive Aggression among Children with ADHD. International Journal of Psychological Studies. 2016 May 5; 8(2): p. 111.</li>
              <li>Connolly EJ, Al-Ghamdi MS, Kobeisy AN, Alqurashi F, Schwartz JA, Beaver KM. Identifying latent classes of antisocial behavior among youth from Saudi Arabia: an assessment of the co-occurrence between aggression, psychopathy, low self-control, and delinquent behavior. Youth violence and juvenile justice. 2017 Jul; 15(3): p. 219-239.</li>
              <li>Rowland AS, Lesesne CA, Abramowitz AJ. The epidemiology of attention‐deficit/hyperactivity disorder (ADHD): a public health view. Developmental Disabilities Research Reviews. 2002 Jan 1; 8(3): p. 162-170.</li>
              <li>Uchida M, Spencer TJ, Faraone SV, Biederman J. Adult outcome of ADHD: an overview of results from the MGH longitudinal family studies of pediatrically and psychiatrically referred youth with and without ADHD of both sexes. Journal of attention disorders. 2018 Apr 1; 22(6): p. 523-534.</li>
              <li>Matte B, Rohde LA, Turner JB, Fisher PW, Shen S, Bau CH, et al. Reliability and validity of proposed DSM-5 ADHD symptoms in a clinical sample of adults. The Journal of neuropsychiatry and clinical neurosciences. 2015 Jun 12; 27(3): p. 228-236.</li>
              <li>Viljoen M, Mahdi S, Massuti R, Selb M, Almodayfer O, Karande S, et al. An international qualitative study of ability and disability in ADHD using the WHO-ICF framework. European child &amp; adolescent psychiatry. 2017 Oct 1; 26(10): p. 1219-1231.</li>
              <li>Willcutt EG, Doyle AE, Nigg JT, Faraone SV, Pennington BF. Validity of the executive function theory of attention-deficit/hyperactivity disorder: a meta-analytic review. Biological psychiatry. 2005 Jun 1; 57(11): p. 1336-1346.</li>
              <li>Solberg BS, Halmøy A, Engeland A, Igland J, Haavik J, Klungsøyr K. Gender differences in psychiatric comorbidity: a population‐based study of 40 000 adults with attention deficit hyperactivity disorder. Acta Psychiatrica Scandinavica. 2017 Dec 21.</li>
              <li>Abdel-Fattah MM, Asal AA, Al-Asmary SM, Al-Helali NS, Al-Jabban TM, Arafa MA. Emotional and behavioral problems among male Saudi schoolchildren and adolescents prevalence and risk factors. German Journal of Psychiatry. 2004 Jan 19; 1: p. 1-9.</li>
              <li>Al Hamed JH, Taha AZ, Sabra AA, Bella H. Attention deficit hyperactivity disorder (ADHD) among male primary school children in Dammam, Saudi Arabia: prevalence and associated factors. J Egypt Public Health Assoc. 2008; 83(3-4): p. 165-182.</li>
              <li>Alqahtani MM. Attention-deficit hyperactive disorder in school-aged children in Saudi Arabia. European Journal of Pediatrics. 2010 Sep 1; 169(9): p. 1113-1117.</li>
              <li>Jenahi E, Khalil MS, Bellac H. Prevalence of attention deficit hyperactivity symptoms in female schoolchildren in Saudi Arabia. Annals of Saudi medicine. 2012 Sep 1; 32(5): p. 462.</li>
              <li>Homidi M, Obaidat Y, Hamaidi D. Prevalence of attention deficit and hyperactivity disorder among primary school students in Jeddah city, KSA. Life Sci J. 2013; 10(3): p. 280-285.</li>
              <li>Taleb HA, Farheen A. A descriptive study of attention deficit hyperactivity disorder in Sabia City, Saudi Arabia. International Journal of Current Research and Review. 2013 Jun 1; 5(11): p. 36.</li>
              <li>Al-Modayfer O, Alatiq Y. A Pilot Study on the Prevalence of Psychiatric Disorders among Saudi Children and Adolescents: a Sample from a Selected Community in Riyadh City. Arab Journal of Psychiatry. 2015 Nov; 26(2): p. 184-192.</li>
              <li>Albatti TH, Alhedyan Z, Alnaeim N, Almuhareb A, Alabdulkarim J, Albadia R, et al. Prevalence of attention deficit hyperactivity disorder among primary school-children in Riyadh, Saudi Arabia; 2015–2016. International Journal of Pediatrics and Adolescent Medicine. 2017 Sep 1; 4(3): p. 91-94.</li>
              <li>AlZaben FN, Sehlo MG, Alghamdi WA, Tayeb HO, Khalifa DA, Mira AT, et al. Prevalence of attention deficit hyperactivity disorder and comorbid psychiatric and behavioral problems among primary school students in western Saudi Arabia. Saudi Medical Journal. 2018 Jan 9; 39(1): p. 52-58.</li>
              <li>Polanczyk GV, Willcutt EG, Salum GA, Kieling C, Rohde LA. ADHD prevalence estimates across three decades: an updated systematic review and meta-regression analysis. International journal of epidemiology. 2014 Jan 24; 43(2): p. 434-442.</li>
              <li>Alqahtani MM. Neurobehavioral outcomes of school-age children born preterm: a preliminary study in the Arabic community. J Pediatr Neonat. 2016 Jul 26; 5(2): p. e050211.</li>
              <li>Sciberras E, Mulraney M, Silva D, Coghill D. Prenatal Risk Factors and the Etiology of ADHD—Review of Existing Evidence. Current psychiatry reports. 2017 Jan 1; 19(1): p. 1.</li>
              <li>Alkhateeb JM, Alhadidi MS. ADHD Research in Arab countries: A systematic review of literature. Journal of Attention Disorders. 2016 Jan 21.</li>
              <li>Alhraiwil NJ, Ali A, Househ MS, Al-Shehri AM, El-Metwally AA. Systematic review of the epidemiology of attention deficit hyperactivity disorder in Arab countries. Neurosciences. 2015 Apr; 20(2): p. 137.</li>
              <li>Farah LG, Fayyad JA, Eapen V, Cassir Y, Salamoun MM, Tabet CC, et al. ADHD in the Arab world: a review of epidemiologic studies. Journal of Attention Disorders. 2009 Nov; 13(3): p. 211-222.</li>
              <li>Charara R, Forouzanfar M, Naghavi M, Moradi-Lakeh M, Afshin A, Vos T, et al. The burden of mental disorders in the eastern mediterranean region, 1990-2013. PloS one. 2017 Jan 17; 12(1): p. e0169575.</li>
              <li>Barkley RA, Cook EH, Diamond A, Zametkin A, Thapar A, Teeter A. International consensus statement on ADHD. Jan 2002. Clin Child Fam Psychol Rev. 2002 Jun 1; 5(2): p. 89-111.</li>
              <li>Matza LS, Paramore C, Prasad M. A review of the economic burden of ADHD. Cost effectiveness and resource allocation. 2005 Dec; 3(1): p. 5.</li>
              <li>Qureshi NA, Al-Habeeb AA, Koenig HG. Mental health system in Saudi Arabia: an overview. Neuropsychiatric disease and treatment. 2013; 9: p. 1121-1135.</li>
              <li>Alsayed ZH. Exposure to trauma and social phobia among children attending mental health services in Riyadh, Saudi Arabia (Doctoral dissertation, University of Leicester) Vostanis P, editor.; 2013.</li>
              <li>Alqahtani MM. The impact of parents' medication beliefs on ADHD management. Indian Journal of Pharmaceutical Science &amp; Research. 2015; 5(3): p. 144-150.</li>
              <li>Almogbel YS, Goyal R, Sansgiry SS. Association between parenting stress and functional impairment among children diagnosed with neurodevelopmental disorders. Community mental health journal. 2017 May 1; 53(4): p. 405-414.</li>
              <li>Khalil MS, Jenahi E. How teachers' knowledge of attention deficit hyperactivity disorder makes difference in doctors' diagnostic decisions and management? Saudi Journal of Medicine and Medical Sciences. 2015 May 1; 3(2): p. 151.</li>
              <li>NICE. Attention deficit hyperactivity disorder: diagnosis and management | Guidance and guidelines. [Online].; 2018 [cited 2018 5 21. Available from: https://www.nice.org.uk/guidance/ng87.</li>
              <li>Amer YS, Wahabi HA, Abou Elkheir MM. Adapting evidence‐based clinical practice guidelines at university teaching hospitals: A model for the Eastern Mediterranean Region. J Eval Clin Pract. 2018;: p. 1-11.</li>
              <li>Albatti T, Al Salehi S, Bashiri F, Hamad M, Al-Joudi H, Daghash H, et al. Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: a systematic review. PROSPERO. 2017;: p. CRD42017078712.</li>
            </ol>
          </section>
        </div>

        {/* Sections - Narrow Right Column */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20 z-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Sections</h2>
            <div className="border-t border-slate-200 mb-4"></div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="#scope-and-purpose" onClick={(e) => handleAnchorClick(e, '#scope-and-purpose')} className="hover:text-emerald-600 transition-colors block">
                  Scope and Purpose
                </a>
              </li>
              <li>
                <a href="#recommendations-for-research" onClick={(e) => handleAnchorClick(e, '#recommendations-for-research')} className="hover:text-emerald-600 transition-colors block">
                  Recommendations for Research
                </a>
              </li>
              <li>
                <a href="#implementation-considerations-and-tools" onClick={(e) => handleAnchorClick(e, '#implementation-considerations-and-tools')} className="hover:text-emerald-600 transition-colors block">
                  Implementation Considerations and Tools
                </a>
              </li>
              <li>
                <a href="#adaptation-process-methodology" onClick={(e) => handleAnchorClick(e, '#adaptation-process-methodology')} className="hover:text-emerald-600 transition-colors block">
                  Adaptation Process Methodology
                </a>
              </li>
              <li>
                <a href="#guideline-registration" onClick={(e) => handleAnchorClick(e, '#guideline-registration')} className="hover:text-emerald-600 transition-colors block">
                  Guideline Registration
                </a>
              </li>
              <li>
                <a href="#plan-for-scheduled-review-and-update" onClick={(e) => handleAnchorClick(e, '#plan-for-scheduled-review-and-update')} className="hover:text-emerald-600 transition-colors block">
                  Plan for Scheduled Review and Update
                </a>
              </li>
              <li>
                <a href="#references" onClick={(e) => handleAnchorClick(e, '#references')} className="hover:text-emerald-600 transition-colors block">
                  References
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpgAboutDevelopmentPage;
