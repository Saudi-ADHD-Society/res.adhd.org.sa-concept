import React from 'react';
import { GraduationCap, BookOpen, Users, Target, Eye, Hand, Brain, CheckCircle2, ArrowRight, Lightbulb, FileText, Gavel } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideUniversalDesignLearningPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />

    {/* Hero */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-emerald-50" />
      <div className="relative p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-violet-700 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 border border-violet-100">
            <GraduationCap size={16} />
            Higher Education
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 border border-slate-200 text-slate-700">
            <FileText size={16} />
            Topic Guide
          </span>
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Universal Design for Learning in Higher Education</h1>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Universal Design for Learning (UDL) is an evidence-based framework that optimizes teaching and learning for <span className="font-semibold">all students</span> by providing 
          <span className="font-semibold"> multiple means of engagement, representation, and action & expression</span>. This guide explains how UDL principles can transform higher education 
          to better support students with ADHD and other learning differences while enhancing outcomes for all learners.
        </p>

        <p className="mt-4 text-xs text-slate-500">
          Aligned with international educational research and the Saudi National ADHD Clinical Practice Guideline.
        </p>
      </div>
    </div>

    {/* Audience + quick use */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Who this guide is for</h2>
        <p className="mt-2 text-slate-700">
          Higher education professionals who design, deliver, or support learning experiences and need evidence-based strategies to create <span className="font-semibold">inclusive, accessible, and effective</span> educational environments.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <GraduationCap size={16} /> Educators
            </div>
            <p className="mt-2 text-sm text-slate-700">Course design, curriculum development, and instructional strategies that benefit all students.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Users size={16} /> Administrators
            </div>
            <p className="mt-2 text-sm text-slate-700">Institutional policies, support services, and resource allocation for inclusive education.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Gavel size={16} /> Policymakers
            </div>
            <p className="mt-2 text-sm text-slate-700">Evidence-based frameworks for educational equity and accessibility standards.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">At a glance</h2>
        <ul className="mt-3 space-y-3 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-600" />
            UDL is <span className="font-semibold">proactive</span>, not reactive—designing for diversity from the start.
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
            Three core principles: <span className="font-semibold">Engagement, Representation, Action & Expression</span>.
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-slate-600" />
            Benefits <span className="font-semibold">all students</span>, not just those with disabilities or ADHD.
          </li>
        </ul>
        <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-900">
            UDL reduces the need for <span className="font-semibold">retroactive accommodations</span> by building flexibility into course design.
          </p>
        </div>
      </div>
    </div>

    {/* Core concept */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-bold text-slate-900">What is Universal Design for Learning?</h2>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Framework
        </span>
      </div>

      <p className="text-slate-700 max-w-4xl">
        Universal Design for Learning (UDL) is a framework developed by CAST (Center for Applied Special Technology) based on neuroscience research showing that 
        <span className="font-semibold"> learning variability is the norm, not the exception</span>. UDL recognizes that students differ in how they engage with learning, 
        how they perceive and comprehend information, and how they express what they know.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-violet-100 bg-violet-50 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Lightbulb size={18} className="text-violet-700" />
            Proactive vs. Reactive
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Traditional approaches wait for students to struggle, then provide accommodations. UDL <span className="font-semibold">builds flexibility into the design</span> from the beginning, 
            reducing barriers before they become problems.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Users size={18} className="text-emerald-700" />
            Universal Benefits
          </div>
          <p className="mt-2 text-sm text-slate-700">
            While UDL particularly benefits students with ADHD, learning disabilities, and other differences, research shows it <span className="font-semibold">improves outcomes for all students</span>, 
            including high-achieving learners.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-slate-900">
          <span className="font-semibold">Key insight:</span> UDL is not about lowering standards or "dumbing down" content. It is about <span className="font-semibold">removing unnecessary barriers</span> 
          to learning while maintaining rigor and high expectations.
        </p>
      </div>
    </section>

    {/* Three Principles */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-slate-900">The Three Principles of UDL</h2>
      <p className="text-slate-700 max-w-4xl">
        UDL is organized around three primary principles, each addressing a critical aspect of learning. These principles are based on three networks in the brain: 
        the <span className="font-semibold">affective network</span> (the "why" of learning), the <span className="font-semibold">recognition network</span> (the "what" of learning), 
        and the <span className="font-semibold">strategic network</span> (the "how" of learning).
      </p>

      {/* Principle 1: Engagement */}
      <div className="rounded-xl border border-violet-200 bg-violet-50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-violet-600 text-white rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Principle 1: Multiple Means of Engagement</h3>
            <p className="text-sm text-slate-700">The "WHY" of learning</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">
          Students with ADHD often struggle with motivation, sustained attention, and self-regulation. This principle addresses the <span className="font-semibold">affective network</span> 
          by providing options that increase interest, sustain effort, and support self-regulation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg border border-violet-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Recruiting Interest</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Offer choices in topics, formats, or methods</li>
              <li>• Connect content to students' interests and goals</li>
              <li>• Minimize threats and distractions</li>
              <li>• Use authentic, relevant examples</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-violet-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Sustaining Effort & Persistence</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Clarify goals and expectations</li>
              <li>• Provide progress feedback and checkpoints</li>
              <li>• Foster collaboration and community</li>
              <li>• Support self-regulation strategies</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-violet-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Self-Regulation</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Teach metacognitive strategies</li>
              <li>• Provide tools for self-assessment</li>
              <li>• Support coping skills and stress management</li>
              <li>• Offer flexible deadlines and pacing</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-violet-200 bg-white p-4">
          <p className="text-sm text-violet-900">
            <span className="font-semibold">Higher education example:</span> Instead of one large final project, offer students choices: a traditional research paper, 
            a multimedia presentation, a podcast series, or a creative portfolio. Provide milestone checkpoints throughout the semester with formative feedback.
          </p>
        </div>
      </div>

      {/* Principle 2: Representation */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
            <Eye size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Principle 2: Multiple Means of Representation</h3>
            <p className="text-sm text-slate-700">The "WHAT" of learning</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">
          Students with ADHD may have difficulty processing information presented in only one format, especially if it requires sustained attention to text. 
          This principle addresses the <span className="font-semibold">recognition network</span> by presenting information in multiple formats and providing supports for comprehension.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg border border-blue-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Perception</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Provide alternatives for visual and auditory information</li>
              <li>• Offer text-to-speech and speech-to-text options</li>
              <li>• Use captions, transcripts, and audio descriptions</li>
              <li>• Allow customization of display (font, size, contrast)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-blue-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Language & Symbols</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Clarify vocabulary, symbols, and notation</li>
              <li>• Provide glossaries and background knowledge</li>
              <li>• Use multiple languages when appropriate</li>
              <li>• Illustrate concepts through multiple media</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-blue-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Comprehension</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Activate prior knowledge and provide context</li>
              <li>• Highlight patterns, relationships, and big ideas</li>
              <li>• Guide information processing and visualization</li>
              <li>• Support memory and transfer</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Higher education example:</span> Record lectures and provide transcripts. Supplement readings with video summaries, 
            infographics, or interactive diagrams. Use concept maps to show relationships between ideas. Provide both written and video instructions for assignments.
          </p>
        </div>
      </div>

      {/* Principle 3: Action & Expression */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center">
            <Hand size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Principle 3: Multiple Means of Action & Expression</h3>
            <p className="text-sm text-slate-700">The "HOW" of learning</p>
          </div>
        </div>
        <p className="text-slate-700 mb-4">
          Students with ADHD often have difficulty with executive functions like planning, organizing, and time management. This principle addresses the 
          <span className="font-semibold"> strategic network</span> by providing multiple ways for students to demonstrate their knowledge and skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg border border-emerald-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Physical Action</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Provide alternatives for physical response</li>
              <li>• Allow use of assistive technologies</li>
              <li>• Support navigation and interaction</li>
              <li>• Offer varied response methods</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Expression & Communication</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Offer multiple media and formats</li>
              <li>• Support composition and problem-solving</li>
              <li>• Provide tools for planning and strategy</li>
              <li>• Allow scaffolding and graduated support</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4">
            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Executive Functions</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Support goal-setting and planning</li>
              <li>• Provide checklists, templates, and guides</li>
              <li>• Facilitate information management</li>
              <li>• Enhance capacity for monitoring progress</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-emerald-200 bg-white p-4">
          <p className="text-sm text-emerald-900">
            <span className="font-semibold">Higher education example:</span> Allow students to demonstrate learning through written papers, oral presentations, 
            video projects, portfolios, or practical applications. Provide assignment templates, rubrics, and checklists. Break large projects into smaller, 
            manageable steps with intermediate deadlines.
          </p>
        </div>
      </div>
    </section>

    {/* UDL and ADHD */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <h2 className="text-xl font-bold text-slate-900">Why UDL Matters for Students with ADHD</h2>
      <p className="text-slate-700 max-w-4xl">
        Students with ADHD face specific challenges in higher education that align directly with UDL's three principles. Understanding these connections helps 
        educators design more effective learning environments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-3">Common ADHD Challenges in Higher Education</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              <span><span className="font-semibold">Attention & Focus:</span> Difficulty sustaining attention during long lectures or reading assignments</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              <span><span className="font-semibold">Executive Function:</span> Problems with planning, organization, time management, and task initiation</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              <span><span className="font-semibold">Working Memory:</span> Difficulty holding and manipulating information while completing tasks</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              <span><span className="font-semibold">Self-Regulation:</span> Challenges with motivation, emotional regulation, and impulse control</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
              <span><span className="font-semibold">Processing Speed:</span> May need more time to process information or complete assessments</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-3">How UDL Addresses These Challenges</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Multiple Formats:</span> Video, audio, and interactive content reduce reliance on sustained reading</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Scaffolding:</span> Templates, checklists, and step-by-step guides support executive function</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Flexible Pacing:</span> Self-paced options and extended time reduce processing speed barriers</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Choice & Autonomy:</span> Options increase motivation and engagement for students with ADHD</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Progress Monitoring:</span> Regular feedback and checkpoints support self-regulation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <Brain className="text-emerald-700 mt-0.5" size={18} />
          <div>
            <p className="font-semibold text-emerald-900">Research evidence</p>
            <p className="mt-1 text-sm text-emerald-900/90">
              Studies show that UDL implementation in higher education is associated with improved academic performance, increased engagement, and reduced need for 
              individual accommodations. Students with ADHD report feeling more supported and less stigmatized in UDL-designed courses.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Implementation in Higher Education */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-slate-900">Implementing UDL in Higher Education</h2>
      <p className="text-slate-700 max-w-4xl">
        UDL implementation can occur at multiple levels: individual courses, programs, and institutions. Start small and build systematically.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          {
            icon: <BookOpen size={18} className="text-violet-700" />,
            title: 'Course Level',
            examples: [
              'Provide multiple formats for course materials (text, video, audio)',
              'Offer flexible assignment options and assessment methods',
              'Break content into smaller, digestible modules',
              'Use clear, consistent course structure and navigation',
              'Provide rubrics, templates, and examples for assignments',
              'Record lectures and provide transcripts',
              'Offer multiple ways to participate (written, oral, digital)',
            ],
          },
          {
            icon: <GraduationCap size={18} className="text-blue-700" />,
            title: 'Program Level',
            examples: [
              'Develop program-wide UDL guidelines and standards',
              'Create shared resources and templates for faculty',
              'Offer professional development on UDL principles',
              'Establish learning support services aligned with UDL',
              'Review and revise curriculum maps for accessibility',
              'Foster collaboration between faculty and support staff',
            ],
          },
          {
            icon: <Users size={18} className="text-emerald-700" />,
            title: 'Institutional Level',
            examples: [
              'Develop institutional UDL policy and commitment',
              'Invest in accessible technology and infrastructure',
              'Provide ongoing faculty training and support',
              'Create UDL resource centers and communities of practice',
              'Align UDL with accreditation and quality assurance',
              'Collect data on student outcomes and satisfaction',
            ],
          },
        ].map((level) => (
          <div key={level.title} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-900 mb-3">
              {level.icon}
              {level.title}
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {level.examples.map((example, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <Lightbulb className="text-amber-700 mt-0.5" size={18} />
          <div>
            <p className="font-semibold text-amber-900">Getting started</p>
            <p className="mt-1 text-sm text-amber-900/90">
              You don't need to redesign everything at once. Start with one course or one module. Identify the biggest barriers students face, 
              then apply UDL principles to address those specific challenges. Small, incremental changes can have significant impact.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Saudi Context */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-slate-900">UDL in the Saudi Higher Education Context</h2>
      <p className="text-slate-700 max-w-4xl">
        Implementing UDL in Saudi universities requires consideration of local educational culture, language, technology infrastructure, and policy frameworks. 
        Several factors make UDL particularly relevant and feasible in this context.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-3">Opportunities</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Vision 2030 alignment:</span> UDL supports goals of inclusive, high-quality education and workforce development</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Digital transformation:</span> Growing investment in educational technology creates opportunities for UDL implementation</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Bilingual context:</span> UDL's multiple means of representation naturally supports Arabic-English bilingual instruction</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={16} />
              <span><span className="font-semibold">Policy support:</span> National policies on inclusive education and disability rights align with UDL principles</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-3">Considerations</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
              <span><span className="font-semibold">Cultural adaptation:</span> UDL principles should be adapted to respect local educational traditions and values</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
              <span><span className="font-semibold">Faculty development:</span> Training and support for educators is essential for successful UDL implementation</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
              <span><span className="font-semibold">Resource allocation:</span> Initial investment in technology and training may be needed</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
              <span><span className="font-semibold">Assessment alignment:</span> Traditional assessment methods may need revision to align with UDL principles</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="font-bold text-slate-900 mb-3">Practical Steps for Saudi Universities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Establish UDL working groups with faculty, administrators, and students
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Provide bilingual UDL resources and training materials
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Pilot UDL in selected courses or programs before scaling
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Integrate UDL with existing disability support services
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Develop Arabic-language UDL content and examples
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
              Measure outcomes and share success stories
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Evidence Base */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <h2 className="text-xl font-bold text-slate-900">Research Evidence for UDL</h2>
      <p className="text-slate-700 max-w-4xl">
        UDL is grounded in neuroscience research and has a growing evidence base in higher education settings. While more research is needed, particularly in diverse cultural contexts, 
        existing studies support UDL's effectiveness.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: 'Neuroscience Foundation',
            text: 'UDL is based on research showing that learning involves three distinct brain networks: recognition (what), strategic (how), and affective (why). Individual differences in these networks explain learning variability.',
          },
          {
            title: 'Student Outcomes',
            text: 'Studies in higher education show UDL implementation is associated with improved course completion rates, higher grades, increased student satisfaction, and reduced need for accommodations.',
          },
          {
            title: 'Inclusive Benefits',
            text: 'Research demonstrates that UDL benefits all students, not just those with disabilities. High-achieving students also report improved learning experiences in UDL-designed courses.',
          },
          {
            title: 'Faculty Perspectives',
            text: 'Faculty who implement UDL report increased teaching satisfaction, better student engagement, and more positive classroom experiences. However, they also note the need for training and support.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="mt-2 text-sm text-slate-700">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Note:</span> Most UDL research has been conducted in Western contexts. More research is needed to understand UDL's effectiveness 
          and cultural adaptation in Saudi Arabia and other Middle Eastern educational settings. This represents an important opportunity for local research.
        </p>
      </div>
    </section>

    {/* Key Takeaways */}
    <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-3">Key Takeaways for Higher Education Professionals</h2>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
        <li>
          <strong>UDL is a framework, not a prescription.</strong> It provides principles and guidelines that can be adapted to different contexts, subjects, and student populations.
        </li>
        <li>
          <strong>Start small and build systematically.</strong> You don't need to redesign everything at once. Identify barriers and apply UDL principles incrementally.
        </li>
        <li>
          <strong>UDL benefits all students.</strong> While particularly important for students with ADHD and other learning differences, UDL improves outcomes for all learners.
        </li>
        <li>
          <strong>Technology is a tool, not a requirement.</strong> While technology can support UDL implementation, many UDL strategies can be implemented with low-tech or no-tech approaches.
        </li>
        <li>
          <strong>Faculty support is critical.</strong> Successful UDL implementation requires training, resources, and ongoing support for educators.
        </li>
        <li>
          <strong>Cultural adaptation matters.</strong> UDL principles should be adapted to respect and incorporate local educational culture, values, and practices.
        </li>
        <li>
          <strong>Measure and iterate.</strong> Collect data on student outcomes and experiences, then use that information to refine and improve UDL implementation.
        </li>
      </ul>
    </section>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={getHref('topic-guides', basePath)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Topic Guides
        </a>
      </div>
    </div>
  </div>
);

export default TopicGuideUniversalDesignLearningPage;

