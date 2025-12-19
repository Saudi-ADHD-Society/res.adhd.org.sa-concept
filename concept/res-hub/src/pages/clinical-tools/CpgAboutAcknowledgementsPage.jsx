import React from 'react';

const CpgAboutAcknowledgementsPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Breadcrumb */}
    <div className="text-sm text-slate-500">
      <button onClick={() => onNavigate('adhd-cpg')} className="hover:text-emerald-600">
        Clinical Tools & Resources / Saudi National ADHD CPG
      </button>
      <span className="mx-2">/</span>
      <button onClick={() => onNavigate('adhd-cpg-about')} className="hover:text-emerald-600">
        About the Guideline
      </button>
      <span className="mx-2">/</span>
      <span>Acknowledgements</span>
    </div>

    {/* Introduction */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <p className="text-slate-600 text-sm md:text-base">
        We would like to present our highest gratitude and acknowledgment to the Psychiatry Department, Paediatrics Department, Research Chair for Evidence-Based Health Care and Knowledge Translation, and the CPG Unit, and Quality Management Department at King Saud University Medical City and College of Medicine for clinical content, technical and methodological support and contributions. We acknowledge the Saudi Health Council for collaboration during the dissemination and implementation planning for the ADHD CPG Project.
      </p>
    </div>

    {/* Working Groups */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Working Groups</h2>
      <p className="text-slate-600 text-sm md:text-base mb-6">
        The Saudi ADHD Society would like to acknowledge the efforts of the many experts who participated in the development of this CPG.
      </p>

      {/* CPG Adaptation Committee */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">CPG Adaptation Committee</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Turki H. Albatti</strong>
                <br />Consultant Child &amp; Adolescent Psychiatrist
                <br />Child Psychiatry Unit , Psychiatry Department
                <br />King Saud University Medical City
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Yasser S. Amer</strong>
                <br />CPG Methodologist, CPG Unit, Quality Management Department
                <br />Pediatrician, Pediatrics Department, King Khalid University Hospital
                <br />Coordinator, CPG Steering Committee
                <br />King Saud University Medical City
                <br />Research Chair for Evidence-Based Health Care &amp; Knowledge Translation
                <br />King Saud University
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Haya F. Al-Joudi, Psy.D.</strong>
                <br />Consultant Clinical Neuropsychologist
                <br />Department of Neurosciences
                <br />King Faisal Specialist Hospital &amp; Research Centre
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Hadeel Daghash</strong>
                <br />Consultant Clinical Pharmacist
                <br />Ada&apos;a Program, Assistant Deputyship for Hospital Services
                <br />Assistant Professor
                <br />Ministry of Health
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Fahad A. Bashiri</strong>
                <br />Associate Professor, Pediatrics Department
                <br />College of Medicine, King Saud University
                <br />Consultant Pediatric Neurologist and Epileptologist
                <br />Head, Pediatric Neurology Unit, King Khalid University Hospital, King Saud University Medical City
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Muddathir H. Hamad</strong>
                <br />Consultant, Pediatric Neurology
                <br />Pediatric Neurology Unit, King Khalid University Hospital
                <br />King Saud University Medical City
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Saleh M. Al-Salehi</strong>
                <br />Consultant Developmental-Behavioral Pediatrician
                <br />Child Development Center, King Abdullah University Hospital
                <br />Princess Noura bint Abdulrahman University
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Mr Jeremy Varnham</strong>
                <br />Director, Project Management Office
                <br />Saudi ADHD Society
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* External Reviewers */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">External Reviewers</h3>
        
        {/* Clinical Content */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-slate-900 mb-4">Clinical Content</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Mohammad Ghaziuddin</strong>
                  <br />Professor of Psychiatry
                  <br />University of Michigan
                  <br />Ann Arbor, USA
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Omar Almodayfer</strong>
                  <br />Consultant Child &amp; Adolescent Psychiatrist
                  <br />King Abdulaziz Medical City
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Abdulkareem Alhossein</strong>
                  <br />Associate Professor, Special Education
                  <br />King Saud University
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Hesham Aldhalaan</strong>
                  <br />Consultant and Head of Pediatric Neurology Section
                  <br />Department of Neurosciences
                  <br />King Faisal Specialist Hospital &amp; Research Centre
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Waleed Altwaijri</strong>
                  <br />Consultant Pediatric Neurologist
                  <br />King Abdulaziz Medical City
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Maysaa Buraik, Psy.D.</strong>
                  <br />Consultant Clinical Psychologist
                  <br />Johns Hopkins Aramco Hospital
                  <br />Dhahran, Saudi Arabia
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Michael J. Nester</strong>
                  <br />Consultant Clinical Neuropsychologist
                  <br />Child &amp; Adolescent Services
                  <br />USA
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Fatimah Alhaider</strong>
                  <br />Consultant Child &amp; Adolescent Psychiatrist
                  <br />King Saud University
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Yasser A. Ad-Dab&apos;bagh</strong>
                  <br />Executive Director, Research Center, King Khalid Medical City
                  <br />Consultant, Psychoanalyst and Pediatric Neuropsychiatrist
                  <br />Department of Mental Health, Neuroscience Center
                  <br />King Fahad Specialist Hospital – Dammam
                  <br />Dammam, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Nouf Al Backer</strong>
                  <br />Consultant Developmental &amp; Behavioral Pediatrician
                  <br />Head of Developmental &amp; Behavioral Pediatrics Unit
                  <br />Pediatrics Department, King Saud University
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Khalid Alburikan</strong>
                  <br />Consultant Clinical Pharmacist
                  <br />Chairman, Saudi Pharmaceutical Society
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <p className="text-slate-700">
                  <strong className="font-bold text-slate-900">Dr Amr A. Jamal</strong>
                  <br />Chairman of Family &amp; Community Medicine Department
                  <br />Supervisor of Evidence-Based Health Care &amp; Knowledge Translation Research Chair
                  <br />Associate Professor and Consultant, Family Physician &amp; Clinical Informatician,
                  <br />College of Medicine and University Medical City, King Saud University
                  <br />Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-4">Methodology</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Hayfaa Abdelmageed Wahabi</strong>
                <br />Associate Professor, Evidence-Based Health Care &amp; Knowledge Translation
                <br />Research Chair for Evidence-Based Health Care and Knowledge Translation
                <br />Acting Head, CPG Steering Committee
                <br />King Saud University
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-slate-700">
                <strong className="font-bold text-slate-900">Dr Samia Alhabib</strong>
                <br />Consultant Family Physician
                <br />King Abdullah bin Abdulaziz University Hospital
                <br />Director, National Center for Evidence Based Health Practice
                <br />Saudi Health Council
                <br />Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CpgAboutAcknowledgementsPage;
