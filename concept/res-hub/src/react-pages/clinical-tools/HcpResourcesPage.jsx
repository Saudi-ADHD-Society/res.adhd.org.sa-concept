import React from 'react';
import { ArrowRight, ExternalLink, MapPin, Globe, Brain, BookOpen, FlaskConical, Library, Puzzle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const HcpResourcesPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">HCP Resources</h2>
      <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
        A curated collection of evidence-based resources, clinical guidelines, professional organizations, and training opportunities 
        for healthcare professionals working with ADHD. Resources are organized by region and category to help you quickly find 
        relevant information for your practice, whether you're looking for local guidelines, international evidence, or professional 
        development opportunities.
      </p>
    </div>
    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">World Federation of ADHD International Consensus Statement</h3>
        <p className="text-indigo-800 mb-6">
            We endorse and provide access to the 208 evidence-based conclusions about the disorder. This statement debunks myths
            and provides a solid foundation for clinical practice.
        </p>
        <a
          href={getHref('consensus-statement', basePath)}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
        >
            Read Consensus Statement <ArrowRight size={16} className="ml-2"/>
        </a>
    </div>
    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">World Federation of ADHD Guide</h3>
        <p className="text-indigo-800 mb-6">
            The World Federation of ADHD Guide is designed and written by an international team for an international audience. 
            This comprehensive guide provides evidence-based information on ADHD, with special attention to healthcare professionals 
            in Low-Middle Income Countries (LMIC) who have limited access to evidence-based information on the disorder.
        </p>
        <p className="text-indigo-700 text-sm mb-4 italic">
            <strong>Note:</strong> We are currently working on an Arabic translation of this guide, with permission from 
            World Federation of ADHD President Prof. Stephen Faraone.
        </p>
        <a
          href="https://www.adhd-federation.org/publications/adhd-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
        >
            Access ADHD Guide <ExternalLink size={16} className="ml-2"/>
        </a>
    </div>
    
    {/* Saudi Arabia */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="text-indigo-600" size={28} />
                Saudi Arabia
            </h3>
            <p className="text-slate-600 mb-6">
                Official guidelines, protocols, and professional organizations specific to Saudi Arabia, including government 
                resources, clinical practice guidelines, and national professional associations.
            </p>
        </div>
        
        {/* Government Resources & Guidelines */}
        <div>
            <div className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Resources & Guidelines</div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">CHI Formulary Indication Update for ADHD</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Council of Health Insurance (CHI) formulary indication review and update for ADHD, including drug therapy 
                    recommendations, treatment algorithms, and clinical guidance for healthcare professionals in Saudi Arabia.
                </p>
                <a
                    href="https://www.chi.gov.sa/Style%20Library/IDF_Branding/Indication/209%20-%20ADHD-Indication%20Update.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View CHI Indication Update <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">MOH Protocol for ADHD Across the Life Span</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Ministry of Health clinical protocol for the assessment, diagnosis, and treatment of ADHD across all age groups, 
                    providing evidence-based guidance for healthcare providers in Saudi Arabia.
                </p>
                <a
                    href="https://www.moh.gov.sa/en/Ministry/MediaCenter/Publications/Documents/MOH-Protocol-for-ADHD-Across-the-Life-Span.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View MOH Protocol <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">My.gov.sa – Disabilities Services</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Saudi government portal providing information and services for people with disabilities, including registration, 
                    support services, and available resources.
                </p>
                <a
                    href="https://my.gov.sa/en/content/disabilities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Disabilities Portal <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">HRSD – Financial Assistance for People with Disabilities</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Ministry of Human Resources and Social Development services providing financial assistance and support 
                    programs for individuals with disabilities in Saudi Arabia.
                </p>
                <a
                    href="https://www.hrsd.gov.sa/en/ministry-services/services/الإعانة-المالية-للأشخاص-ذوي-الإعاقة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View Financial Assistance <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Ministry of Education – Student Evaluation Regulations</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Executive procedures and regulations for student evaluation in Saudi Arabia, including accommodations and 
                    support measures for students with ADHD and other learning differences.
                </p>
                <a
                    href="https://www.moe.gov.sa/ar/aboutus/aboutministry/RPRLibrary/الإجراءات%20التنفيذية%20للائحة%20تقويم%20الطالب%202025م.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View Student Evaluation Regulations <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">King Salman Center for Disability Research – Disability Code</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Comprehensive disability code and research resources from the King Salman Center for Disability Research, 
                    providing policy frameworks and evidence-based guidance for disability services in Saudi Arabia.
                </p>
                <a
                    href="https://www.kscdr.org.sa/en/disability-code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View Disability Code <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            </div>
        </div>
        
        {/* Professional Associations */}
        <div>
            <div className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Professional Associations & Societies</div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Saudi Psychological Association</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National professional association for psychologists and mental health practitioners in Saudi Arabia, 
                    aiming to support scientific practice and professional standards. Provides resources and professional 
                    development opportunities for mental health professionals.
                </p>
                <a
                    href="https://nfs.org.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Saudi Psychological Association <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Saudi Society of Professional Psychology</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Professional society focused on professional development, ethics, training, and research exchange for 
                    psychologists in Saudi Arabia. Promotes evidence-based practice and professional standards in psychology.
                </p>
                <a
                    href="https://sspp-sa.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Saudi Society of Professional Psychology <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">National Center for Mental Health Promotion (KSA)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National center supporting mental health promotion and professional training in Saudi Arabia. Offers 
                    psychosocial programs, prevention initiatives, and resources for mental health professionals working 
                    with ADHD and related conditions.
                </p>
                <a
                    href="https://ncmh.org.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit National Center for Mental Health Promotion <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Saudi Pediatric Association (SPA)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National professional association for pediatricians in Saudi Arabia. Provides clinical practice guidelines, 
                    clinical tools, resources, and professional development opportunities relevant to child health, including 
                    ADHD and neurodevelopmental conditions.
                </p>
                <a
                    href="https://www.saudipeds.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Saudi Pediatric Association <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Saudi Pediatric Neurology Society (SPNS)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National scientific association for physicians and health workers in pediatric neurology in Saudi Arabia. 
                    Promotes excellence in clinical care, education, and research for childhood neurological disorders, 
                    including ADHD and related neurodevelopmental conditions. Organizes annual conferences and educational events.
                </p>
                <a
                    href="https://spnsociety.org.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Saudi Pediatric Neurology Society <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">SIPHA (Saudi International Pharmaceutical Conference)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National pharmacy conference and workshop under the umbrella of the Saudi Pharmaceutical Society. 
                    Gathers pharmacists from different backgrounds for education and professional development. Includes 
                    sessions on clinical pharmacy, medication management, and patient-centered care relevant to ADHD 
                    treatment and medication safety.
                </p>
                <a
                    href="https://www.sipha-sps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit SIPHA <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Wassmah (وصمة)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Saudi organization dedicated to educating society about mental health and reducing stigma around mental 
                    health disorders through arts and media. Uses visual arts, theater, literature, fashion, and media to 
                    raise awareness about mental health conditions, including ADHD, and promote understanding and support 
                    for individuals with mental health challenges.
                </p>
                <a
                    href="https://wassmah.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Wassmah <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            </div>
        </div>
    </div>

    {/* Gulf Region */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Globe className="text-indigo-600" size={28} />
                Gulf Region
            </h3>
            <p className="text-slate-600 mb-6">
                Professional organizations, societies, and resources from across the Gulf Cooperation Council (GCC) countries, 
                including Bahrain, Kuwait, and the United Arab Emirates.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Society Bahrain</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Regional ADHD society in Bahrain providing support, awareness, and resources for individuals with ADHD 
                    and their families. Offers information and community engagement through social media platforms.
                </p>
                <a
                    href="https://www.instagram.com/adhdbhsociety/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Society Bahrain <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">KALD (Kuwaiti Association for Learning Differences)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Kuwait-based association that collaboratively works towards helping students with learning differences 
                    and/or Attention Deficit Hyperactivity Disorder (ADHD). Provides awareness campaigns, educational 
                    programs, and resources for parents, teachers, and professionals.
                </p>
                <a
                    href="https://kaldkuwait.org/Pages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit KALD <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Emirates Mental Health Society (EMHS)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Scientific society for mental health professionals in the UAE focused on advancing clinical practice and 
                    professional skills. Organizes annual EMHS Congress and provides scientific and professional development 
                    activities for mental health professionals.
                </p>
                <a
                    href="https://ema.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit EMHS <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">EMHS Congress</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Annual congress organized by the Emirates Mental Health Society, bringing together clinicians and 
                    researchers for scientific exchange and professional development in mental health, including ADHD and 
                    related conditions.
                </p>
                <a
                    href="https://emhscongress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit EMHS Congress <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Emirates Society for Child and Adolescent Mental Health (ESCAM)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Psychiatric society focusing on child and adolescent mental health for clinicians and psychiatrists 
                    working with youth populations in the UAE. Provides professional development and resources relevant 
                    to ADHD and related neurodevelopmental conditions.
                </p>
                <a
                    href="https://escam.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ESCAM <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Middle East Psychological Association (MEPA)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Regional professional association connecting psychologists and mental health practitioners across Middle 
                    Eastern countries, including GCC members. Promotes professional standards, ethics, and peer development 
                    relevant to ADHD and mental health practice.
                </p>
                <a
                    href="https://mepa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit MEPA <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>

    {/* Evidence & Clinical Resource Platforms */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Brain className="text-indigo-600" size={28} />
                Evidence & Clinical Resource Platforms
            </h3>
            <p className="text-slate-600 mb-6">
                Evidence-based platforms and databases providing access to research, clinical guidelines, and evidence summaries 
                to support evidence-based practice in ADHD care.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Evidence Project</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Curates, disseminates, and promotes scientifically researched and evidence-based conclusions about ADHD. 
                    Features the International Consensus Statement with 208 evidence-based statements.
                </p>
                <a
                    href="https://www.adhdevidence.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Evidence Project <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Institute (Takeda)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Clinical educational platform for healthcare professionals focused on ADHD research, diagnosis, and treatment. 
                    Offers expert-level content on disease burden, management, meetings, and publications.
                </p>
                <a
                    href="https://adhd-institute.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Institute <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Australian Evidence-Based Clinical Practice ADHD Guideline</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Comprehensive practice guideline with evidence-based recommendations on diagnosis, assessment, treatment, 
                    and management of ADHD across the lifespan. Includes downloadable factsheets for clinicians.
                </p>
                <a
                    href="https://www.adhdguideline.aadpa.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View Guideline <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Murdoch Children's Research Institute – ADHD Resources</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Evidence-based ADHD resources from Australia's leading child health research institute, providing 
                    comprehensive information on ADHD diagnosis, treatment, and management for children and adolescents.
                </p>
                <a
                    href="https://www.mcri.edu.au/impact/a-z-child-adolescent-health/a/adhd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit MCRI ADHD Resources <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">National Elf Service</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Evidence-based mental health resource providing accessible summaries of the latest research in mental health, 
                    including ADHD. Helps healthcare professionals stay current with research through digestible, expert-reviewed 
                    content and critical appraisals.
                </p>
                <a
                    href="https://www.nationalelfservice.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit National Elf Service <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>

    {/* Professional & Research Organizations */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="text-indigo-600" size={28} />
                Professional & Research Organizations
            </h3>
            <p className="text-slate-600 mb-6">
                International and national professional societies, research organizations, and advocacy groups dedicated to 
                advancing ADHD care, research, and professional development.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">CHADD (Children and Adults with ADHD)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Major nonprofit with clinical insights, practical strategies, updates on research, and professional 
                    development opportunities. Contains publications and resources for clinicians and families.
                </p>
                <a
                    href="https://chadd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit CHADD <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADDA (Attention Deficit Disorder Association) – ADHD Professionals Section</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Provides networking opportunities, professional development, events, and a professional directory, 
                    helpful for clinicians, coaches, and researchers.
                </p>
                <a
                    href="https://add.org/professionals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADDA Professionals <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">AACAP ADHD Resource Center</h4>
                <p className="text-sm text-slate-600 mb-4">
                    American Academy of Child and Adolescent Psychiatry's ADHD hub with medication guides, factsheets, 
                    and evidence summaries relevant for child and adolescent clinicians.
                </p>
                <a
                    href="https://www.aacap.org/AACAP/Families_and_Youth/Resource_Centers/ADHD_Resource_Center/Home.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit AACAP Resource Center <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD in Women</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Resources and information focused on ADHD in women and girls, addressing unique presentation, 
                    diagnosis, and treatment considerations.
                </p>
                <a
                    href="https://adhd-women.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD in Women <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">CADDRA (Canadian ADHD Resource Alliance)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Independent, not-for-profit resource organization for medical, healthcare, and research professionals. 
                    Provides Canadian ADHD Practice Guidelines, treatment resources, medication charts, and professional 
                    development opportunities including annual conferences.
                </p>
                <a
                    href="https://www.caddra.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit CADDRA <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Research Lab (King's College London)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Research laboratory conducting studies on ADHD across the lifespan, including women's health, 
                    neurodiversity in higher education, and innovative interventions. Provides information on current 
                    and completed research studies.
                </p>
                <a
                    href="https://www.adhdresearchlab.com/adhd-studies.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Research Lab <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">APSARD (American Professional Society of ADHD and Related Disorders)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Multi-disciplinary organization dedicated to enhancing outcomes for individuals with ADHD and their families 
                    by fostering lifespan research on ADHD and sharing evidence-based practices and education. Offers annual 
                    conferences, webinars, and professional development opportunities.
                </p>
                <a
                    href="https://apsard.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit APSARD <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ACAMH (Association for Child and Adolescent Mental Health)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    UK-based organization sharing best evidence and improving practice in child and adolescent mental health. 
                    Provides access to world-class research journals, CPD resources, conferences, and evidence-based guides 
                    relevant to ADHD and related disorders.
                </p>
                <a
                    href="https://www.acamh.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ACAMH <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">AADPA (Australasian ADHD Professionals Association)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Professional association for healthcare professionals working with ADHD in Australia and New Zealand. 
                    Provides the Australian Evidence-Based Clinical Practice Guideline for ADHD, prescribing guides, 
                    professional directory, and educational resources.
                </p>
                <a
                    href="https://aadpa.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit AADPA <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADDA (Attention Deficit Disorder Association)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    World's largest organization dedicated exclusively to helping adults with ADHD. Provides support groups, 
                    self-paced courses, virtual workgroups, webinars, and a comprehensive ADHD library. Offers resources 
                    for both individuals with ADHD and healthcare professionals.
                </p>
                <a
                    href="https://add.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADDA <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Foundation (UK)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    UK's leading neurodiversity charity providing support and training for individuals, families, and professionals 
                    across the lifespan for ADHD, Autism, Dyslexia, Dyspraxia (DCD), and related conditions. Uses a strength-based 
                    approach to improve life chances and create social change by tackling systemic inequalities in health, 
                    education, and work.
                </p>
                <a
                    href="https://www.adhdfoundation.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Foundation UK <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD UK</h4>
                <p className="text-sm text-slate-600 mb-4">
                    UK-based organization providing information, support, and resources for people with ADHD and their families. 
                    Offers guidance on diagnosis, treatment, and living with ADHD, as well as advocacy and awareness initiatives.
                </p>
                <a
                    href="https://adhduk.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD UK <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">SFG-ADHS (Swiss ADHD Society)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Swiss professional society for ADHD, providing resources, guidelines, and support for healthcare professionals 
                    working with ADHD in Switzerland. Offers information on diagnosis, treatment, and best practices for ADHD 
                    across the lifespan.
                </p>
                <a
                    href="https://www.sfg-adhs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit SFG-ADHS <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">FEAADAH (Spanish ADHD Federation)</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Spanish federation of ADHD associations providing support, resources, and advocacy for individuals with ADHD 
                    and their families across Spain. Offers information on diagnosis, treatment, educational support, and 
                    professional resources for healthcare providers.
                </p>
                <a
                    href="https://www.feaadah.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit FEAADAH <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>

    {/* Government & Public Health Evidence */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FlaskConical className="text-indigo-600" size={28} />
                Government & Public Health Evidence
            </h3>
            <p className="text-slate-600 mb-6">
                Official government resources and public health agencies providing evidence-based information, surveillance data, 
                and clinical resources for ADHD.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">CDC ADHD Resources</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Part of the U.S. Centers for Disease Control and Prevention's ADHD section, offering free evidence-based 
                    materials for health professionals, including fact sheets and clinical resources.
                </p>
                <a
                    href="https://www.cdc.gov/ncbddd/adhd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit CDC ADHD Resources <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">NIMH – ADHD Topic Page</h4>
                <p className="text-sm text-slate-600 mb-4">
                    National Institute of Mental Health's dedicated ADHD page links to research updates, clinical trials, 
                    and evidence summaries, useful for researchers and clinicians tracking state-of-science developments.
                </p>
                <a
                    href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit NIMH ADHD Page <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>

    {/* Supplemental Professional Resources */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Library className="text-indigo-600" size={28} />
                Supplemental Professional Resources
            </h3>
            <p className="text-slate-600 mb-6">
                Additional resources including educational websites, awareness campaigns, and practical tools to support 
                professional practice and patient education.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADDitude Magazine / Website</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Though not strictly academic, this site includes expert-reviewed ADHD content, Q&A with clinicians, 
                    research summaries, and a provider directory — useful for staying current on practice trends and research discussions.
                </p>
                <a
                    href="https://www.additudemag.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADDitude <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Understood.org</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Comprehensive resource for parents, educators, and professionals about learning and thinking differences 
                    including ADHD. Provides evidence-based information, practical strategies, and tools for supporting 
                    individuals with ADHD across settings.
                </p>
                <a
                    href="https://www.understood.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Understood.org <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHDadultUK</h4>
                <p className="text-sm text-slate-600 mb-4">
                    UK-based registered charity for adults with ADHD, run by adults with ADHD. Provides peer-led support, 
                    evidence-based advice, resources, video guides, and an online ADHD magazine. Offers information on 
                    diagnosis, treatment, and co-existing conditions.
                </p>
                <a
                    href="https://www.adhdadult.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHDadultUK <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Awareness Month</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Annual awareness campaign providing resources, educational materials, and advocacy tools to increase 
                    understanding of ADHD. Offers downloadable resources, awareness materials, and information to help 
                    healthcare professionals and the public better understand ADHD.
                </p>
                <a
                    href="https://www.adhdawarenessmonth.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Awareness Month <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>

    {/* Additional Professional Support */}
    <div className="space-y-6">
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Puzzle className="text-indigo-600" size={28} />
                Additional Professional Support
            </h3>
            <p className="text-slate-600 mb-6">
                Training programs, continuing education opportunities, and professional development resources to enhance 
                your skills in ADHD assessment, diagnosis, and treatment.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Continuing Education Courses</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Current Practice in ADHD: Meet the Experts — Harvard-affiliated continuing education offering 
                    evidence-based diagnosis and treatment strategies.
                </p>
                <a
                    href="https://cmecatalog.hms.harvard.edu/adhd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    View Harvard CME Courses <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">The REACH Institute</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Empowers primary care providers, therapists, and other healthcare professionals with evidence-based 
                    training in child and adolescent mental health, including ADHD. Offers live virtual courses, 
                    resources, and tools for improving access to mental health care.
                </p>
                <a
                    href="https://thereachinstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit REACH Institute <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">ADHD Working</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Research-based training and resources for businesses, educators, and parents on understanding and supporting 
                    ADHD. Provides insights into ADHD strengths and challenges, helping employers, teachers, and families 
                    create supportive environments that bring out the best in people with ADHD.
                </p>
                <a
                    href="https://adhdworking.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit ADHD Working <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-800 mb-2">Do-IT Profiler</h4>
                <p className="text-sm text-slate-600 mb-4">
                    Internationally recognized neurodiversity screening and training platform. Provides evidence-informed 
                    neurodiversity profilers for organizations and individuals, helping identify strengths and challenges 
                    associated with ADHD, Dyslexia, Autism, and other neurodevelopmental conditions. Offers training 
                    courses and consultancy services.
                </p>
                <a
                    href="https://doitprofiler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                    Visit Do-IT Profiler <ExternalLink size={14} className="ml-1"/>
                </a>
            </div>
        </div>
    </div>
  </div>
);

export default HcpResourcesPage;


