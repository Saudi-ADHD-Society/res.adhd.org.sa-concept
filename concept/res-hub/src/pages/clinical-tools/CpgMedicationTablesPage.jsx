import React from 'react';

const CpgMedicationTablesPage = () => {
  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `${window.location.pathname}${anchorId}`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Medication Tables</h2>
        <p className="text-slate-500 mt-2">
          Comprehensive medication tables with dosing information for ADHD management.
        </p>
      </div>

      {/* Two Column Layout: Content Left, Navigation Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Wide Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Children and Young People */}
          <section id="children-and-young-people" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children and Young People</h2>
            
            <div className="space-y-4 text-slate-600 text-sm md:text-base mb-6">
              <p>
                Drug treatment is not recommended for pre-school children with ADHD without a second opinion from an ADHD specialized practitioner. At the time of publication, lisdexamfetamine and dexamfetamine did not have SFDA approval. Informed consent should be obtained and documented.
              </p>
              <p>
                Drug treatment is not indicated as the first-line treatment for all school-age children and young people with ADHD. It should be reserved for those with severe symptoms and impairment or for those with moderate levels of impairment who have refused non-drug interventions, or whose symptoms have not responded sufficiently to parent-training/education programmes or group psychological treatment where available.
              </p>
              <p>
                Antipsychotics and tricyclic antidepressants are not recommended for the treatment of ADHD in children and young people.
              </p>
            </div>

            {/* Table 1: Methylphenidate */}
            <div id="table-1-methylphenidate" className="mb-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 1: Methylphenidate</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Methylphenidate</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>ADHD without significant comorbidity</li>
                  <li>ADHD with comorbid conduct disorder</li>
                  <li>In ADHD when tics, Tourette's syndrome, anxiety disorder, stimulant misuse, or risk of stimulant diversion are present</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorisation Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">Authorized</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>Modified-release preparations are preferred because of:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Convenience</li>
                      <li>Improving adherence</li>
                      <li>Reducing stigma (because the child or young person does not need to take medication at school)</li>
                      <li>Reducing problems schools have in storing and administering controlled drugs</li>
                      <li>Their pharmacokinetic profiles</li>
                    </ul>
                  </li>
                  <li>Initial treatment should begin with low doses of immediate-release or modified-release preparations consistent with starting doses in the Saudi National Formulary (SNF).</li>
                  <li>The dose should be titrated against symptoms and side effects over 4 to 6 weeks until dose optimisation is achieved.</li>
                  <li>Modified-release preparations should be given as a single dose in the morning</li>
                  <li>Immediate-release preparations should be given in two or three divided doses</li>
                  <li>Methylphenidate can be increased to 0.7 mg/kg per dose up to three times a day or a total daily dose of 2.1 mg/kg/day (up to a total maximum dose of 90 mg/day for immediate release; or an equivalent dose of modified-release methylphenidate</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Height should be measured every 6 months.</li>
                  <li>Weight should be measured 3 and 6 months after drug treatment has started and every 6 months thereafter.</li>
                  <li>Height and weight should be plotted on a growth chart and reviewed by the healthcare professional responsible for treatment</li>
                  <li>Healthcare professionals and parents or carers should monitor changes in the potential for drug misuse and diversion, which may come with changes in circumstances and age. In these situations, modified-release methylphenidate or atomoxetine may be preferred</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced and be referred to a paediatrician.</li>
                  <li>If psychotic symptoms (for example, delusions and hallucinations) emerge starting methylphenidate or dexamfetamine, the drug should be withdrawn and a full psychiatric assessment carried out. Atomoxetine could be considered as an alternative.</li>
                  <li>Although there is no evidence that methylphenidate increases the risk of seizures, if seizures are exacerbated in a child or young person with epilepsy, or de novo seizures emerge following the introduction of methylphenidate, the drug should be discontinued immediately. Dexamfetamine may be considered as an alternative in consultation with a regional tertiary specialist treatment centre.</li>
                  <li>If tics emerge in people taking methylphenidate, healthcare professionals should consider whether:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The tics are stimulant-related (tics naturally wax and wane)</li>
                      <li>Tic-related impairment outweighs the benefits of ADHD treatment</li>
                      <li>If tics are stimulant-related, reduce the dose of methylphenidate; consider changing to atomoxetine, or stop drug treatment.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Table 2: Atomoxetine */}
            <div id="table-2-atomoxetine" className="mb-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 2: Atomoxetine</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Atomoxetine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>When tics, Tourette's syndrome, anxiety disorder, stimulant misuse, or risk of stimulant diversion are present.</li>
                  <li>If methylphenidate has been tried and has been ineffective at the maximum tolerated dose, or the child or young person is intolerant to low or moderate doses of methylphenidate.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">Authorized</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>For those weighing up to 70 kg, the initial total daily dose should be approximately 0.5 mg/kg; the dose should be increased after 7 days to approximately 1.2 mg/kg/day.</li>
                  <li>For those weighing more than 70 kg, the initial total daily dose should be 40 mg; the dose should be increased after 7 days up to a maintenance dose of 80 mg/day.</li>
                  <li>A single daily dose can be given; two divided doses may be prescribed to minimise side effects.</li>
                  <li>Atomoxetine may be increased to 1.8 mg/kg/day (up to a total maximum dose of 120 mg/day).</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>People treated with atomoxetine should be observed for agitation, irritability, suicidal thinking and self-harming behaviour, and unusual changes in behaviour, particularly during the initial months of treatment, or after a change in dose.</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced and be referred to a paediatrician.</li>
                  <li>If seizures are exacerbated in a child or young person with epilepsy, or de novo seizures emerge following the introduction atomoxetine, the drug should be discontinued immediately. Dexamfetamine may be considered as an alternative in consultation with a regional tertiary specialist treatment centre.</li>
                </ul>
              </div>
            </div>

            {/* Table 3: Dexamfetamine or Lisdexamfetamine */}
            <div id="table-3-dexamfetamine" className="mb-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 3: Dexamfetamine or Lisdexamfetamine</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Dexamfetamine or<br />Lisdexamfetamine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>Dexamfetamine should be considered (if available) in children and young people whose ADHD is unresponsive to a maximum tolerated dose of methylphenidate or atomoxetine.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">At time of publication, not approved by SFDA.</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>Initial treatment should begin with low doses</li>
                  <li>The dose should be titrated against symptoms and side effects over 4 to 6 weeks</li>
                  <li>Treatment should be given in divided doses increasing to a maximum of 20 mg/day</li>
                  <li>For children aged 6 to 18 years, doses up to 40 mg/day may occasionally be required</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Healthcare professionals and parents or carers should monitor changes in the potential for drug misuse and diversion, which may come with changes in circumstances and age. In these situations, modified-release methylphenidate or atomoxetine may be preferred</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced &amp; be referred to a paediatrician.</li>
                  <li>If psychotic symptoms (for example, delusions and hallucinations) emerge starting methylphenidate or dexamfetamine, the drug should be withdrawn and a full psychiatric assessment carried out. Atomoxetine could be considered as an alternative.</li>
                  <li>If tics emerge in people taking dexamfetamine, healthcare professionals should consider whether:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The tics are stimulant-related (tics naturally wax &amp; wane)</li>
                      <li>Tic-related impairment outweighs the benefits of ADHD treatment</li>
                      <li>If tics are stimulant-related, reduce the dose of dexamfetamine; consider changing to atomoxetine, or stop drug treatment.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Table 4: Non-stimulants */}
            <div id="table-4-non-stimulants" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 4: Non-stimulants</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Bupropion, Clonidine, Modafinil<br />Imipramine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <p className="text-slate-700 mb-4">In children and young people whose ADHD is unresponsive to methylphenidate, atomoxetine and dexamfetamine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">(Off-label)</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <p className="text-slate-700 mb-4">–</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>The use of medication unlicensed for ADHD should only be considered in the context of tertiary services.</li>
                  <li>Informed consent should be obtained and documented.</li>
                  <li>A cardiovascular examination and electrocardiogram (ECG) should be carried out before starting treatment with clonidine in children or young people with ADHD.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Adult Treatment */}
          <section id="adult-treatment" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Adult Treatment</h2>
            
            <div className="space-y-4 text-slate-600 text-sm md:text-base mb-6">
              <p>
                Drug treatment is the first-line treatment for adults with ADHD with either moderate or severe levels of impairment. Methylphenidate is the first-line drug.
              </p>
              <p>
                There is the potential for drug misuse and diversion in adults with ADHD, especially in some settings, such as prison, although there is no strong evidence that this is a significant problem.
              </p>
              <p>
                For adults with ADHD, drug treatment should be the first-line treatment unless the person would prefer a psychological approach. (At the time of publication dexamfetamine and lisdexamfetamine did not have SFDA Approval. Informed consent should be obtained and documented.)
              </p>
            </div>

            {/* Table 5: Methylphenidate */}
            <div id="table-5-methylphenidate" className="mb-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 5: Methylphenidate</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Methylphenidate</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <p className="text-slate-700 mb-4">First-line drug</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">Authorized</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>Initial treatment should begin with low doses (5 mg three times daily for immediate-release preparations; the equivalent dose for modified-release preparations)</li>
                  <li>The dose should be titrated against symptoms and side effects over 4 to 6 weeks</li>
                  <li>The dose should be increased according to response up to a maximum of 100 mg/day</li>
                  <li>Modified-release preparations should usually be given once daily and no more than twice daily</li>
                  <li>Modified-release preparations may be preferred to increase adherence and in circumstances where there are concerns about substance misuse or diversion</li>
                  <li>Immediate-release preparations should be given up to four times daily</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Weight should be measured 3 and 6 months after drug treatment has started and every 6 months thereafter</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced and be referred to adult physician.</li>
                  <li>If psychotic symptoms (for example, delusions and hallucinations) emerge starting methylphenidate the drug should be withdrawn and a full psychiatric assessment carried out. Atomoxetine could be considered as an alternative.</li>
                  <li>If tics emerge in people taking methylphenidate, healthcare professionals should consider whether:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The tics are stimulant-related (tics naturally wax &amp; wane)</li>
                      <li>Tic-related impairment outweighs the benefits of ADHD treatment</li>
                    </ul>
                  </li>
                  <li>If tics are stimulant-related, reduce the dose of methylphenidate; consider changing to atomoxetine, or stop drug treatment.</li>
                  <li>Anxiety symptoms, including panic, may be precipitated by stimulants, particularly in adults with a history of coexisting anxiety. Where this is an issue, lower doses of the stimulant and/or combined treatment with an antidepressant used to treat anxiety can be used; switching to atomoxetine may be effective</li>
                </ul>
              </div>
            </div>

            {/* Table 6: Atomoxetine */}
            <div id="table-6-atomoxetine" className="mb-6 scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 6: Atomoxetine</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Atomoxetine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>In adults unresponsive or intolerant to an adequate trial of methylphenidate (this should usually be about 6 weeks).</li>
                  <li>Where there may be concern about the potential for drug misuse and diversion (for example, in prison services), atomoxetine may be considered as the first-line drug treatment for ADHD in adults.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">Authorized</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>For people with ADHD weighing up to 70 kg, the initial total daily dose should be approximately 0.5 mg/kg; the dose should be increased after 7 days to approximately 1.2 mg/kg/day</li>
                  <li>For people with ADHD weighing more than 70 kg, the initial total daily dose should be 40 mg; the dose should be increased after 7 days up to a maintenance dose of 100 mg/day</li>
                  <li>The usual maintenance dose is either 80 or 100 mg, which may be taken in divided doses</li>
                  <li>A trial of 6 weeks on a maintenance dose should be allowed to evaluate the full effectiveness of atomoxetine</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>People treated with atomoxetine should be observed for agitation, irritability, suicidal thinking and self-harming behaviour, and unusual changes in behaviour, particularly during the initial months of treatment, or after a change in dose.</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced and be referred to adult physician.</li>
                  <li>Sexual dysfunction (that is, erectile and ejaculatory dysfunction) and dysmenorrhoea should be monitored as potential side effects of atomoxetine</li>
                </ul>
              </div>
            </div>

            {/* Table 7: Dexamfetamine or Lisdexamfetamine */}
            <div id="table-7-dexamfetamine" className="scroll-mt-20">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Table 7: Dexamfetamine or Lisdexamfetamine</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Name</h4>
                <p className="text-slate-700 mb-4">Dexamfetamine or<br />Lisdexamfetamine</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Indication</h4>
                <p className="text-slate-700 mb-4">In adults unresponsive or intolerant to an adequate trial of methylphenidate (this should usually be about 6 weeks).</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Authorization Status (SFDA)</h4>
                <p className="text-slate-700 mb-4">At time of publication, not approved by SFDA</p>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Dosage</h4>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
                  <li>Initial treatment should begin with low doses (5 mg twice daily)</li>
                  <li>The dose should be titrated against symptoms and side effects over 4 to 6 weeks</li>
                  <li>Treatment should be given in divided doses</li>
                  <li>The dose should be increased according to response up to a maximum of 60 mg/day</li>
                  <li>The dose should usually be given between two and four times daily</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mb-2">Special Precautions &amp; Monitoring</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>If psychotic symptoms (for example, delusions and hallucinations) emerge starting methylphenidate or dexamfetamine, the drug should be withdrawn and a full psychiatric assessment carried out. Atomoxetine could be considered as an alternative.</li>
                  <li>For people who have sustained resting tachycardia, arrhythmia or systolic blood pressure greater than the 95th percentile (or a clinically significant increase) measured on two occasions should have their dose reduced and be referred to adult physician.</li>
                  <li>If tics emerge in people taking dexamfetamine, healthcare professionals should consider whether:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The tics are stimulant-related (tics naturally wax and wane)</li>
                      <li>Tic-related impairment outweighs the benefits of ADHD treatment</li>
                    </ul>
                  </li>
                  <li>If tics are stimulant-related, reduce the dose of dexamfetamine; consider changing to atomoxetine, or stop drug treatment.</li>
                  <li>Anxiety symptoms, including panic, may be precipitated by stimulants, particularly in adults with a history of coexisting anxiety. Where this is an issue, lower doses of the stimulant and/or combined treatment with an antidepressant used to treat anxiety can be used; switching to atomoxetine may be effective</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation - Narrow Right Column */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20 z-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Sections</h2>
            <div className="border-t border-slate-200 mb-4"></div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a 
                  href="#children-and-young-people" 
                  onClick={(e) => handleAnchorClick(e, '#children-and-young-people')} 
                  className="hover:text-emerald-600 transition-colors block font-semibold"
                >
                  Children and Young People
                </a>
              </li>
              <li className="ml-4 space-y-1">
                <a 
                  href="#table-1-methylphenidate" 
                  onClick={(e) => handleAnchorClick(e, '#table-1-methylphenidate')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 1: Methylphenidate
                </a>
                <a 
                  href="#table-2-atomoxetine" 
                  onClick={(e) => handleAnchorClick(e, '#table-2-atomoxetine')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 2: Atomoxetine
                </a>
                <a 
                  href="#table-3-dexamfetamine" 
                  onClick={(e) => handleAnchorClick(e, '#table-3-dexamfetamine')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 3: Dexamfetamine or Lisdexamfetamine
                </a>
                <a 
                  href="#table-4-non-stimulants" 
                  onClick={(e) => handleAnchorClick(e, '#table-4-non-stimulants')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 4: Non-stimulants
                </a>
              </li>
              <li>
                <a 
                  href="#adult-treatment" 
                  onClick={(e) => handleAnchorClick(e, '#adult-treatment')} 
                  className="hover:text-emerald-600 transition-colors block font-semibold"
                >
                  Adult Treatment
                </a>
              </li>
              <li className="ml-4 space-y-1">
                <a 
                  href="#table-5-methylphenidate" 
                  onClick={(e) => handleAnchorClick(e, '#table-5-methylphenidate')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 5: Methylphenidate
                </a>
                <a 
                  href="#table-6-atomoxetine" 
                  onClick={(e) => handleAnchorClick(e, '#table-6-atomoxetine')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 6: Atomoxetine
                </a>
                <a 
                  href="#table-7-dexamfetamine" 
                  onClick={(e) => handleAnchorClick(e, '#table-7-dexamfetamine')} 
                  className="hover:text-emerald-600 transition-colors block"
                >
                  Table 7: Dexamfetamine or Lisdexamfetamine
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpgMedicationTablesPage;
