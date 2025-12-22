import React from 'react';
import { Shield, Lock, Eye, FileText, ExternalLink, Server, Key } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const PrivacyPolicyPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const getFullPath = (href) => {
    if (href.startsWith('http')) return href;
    const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
    if (href === '/') {
      return normalizedBase;
    }
    const normalizedHref = href.startsWith('/') ? href.slice(1) : href;
    // Add trailing slash for Astro's trailingSlash: 'always' config
    // Handle hash fragments by adding slash before the hash
    const hashIndex = normalizedHref.indexOf('#');
    if (hashIndex !== -1) {
      const pathPart = normalizedHref.substring(0, hashIndex);
      const hashPart = normalizedHref.substring(hashIndex);
      const finalPath = pathPart.endsWith('/') ? pathPart : `${pathPart}/`;
      return `${normalizedBase}${finalPath}${hashPart}`;
    }
    const finalPath = normalizedHref.endsWith('/') ? normalizedHref : `${normalizedHref}/`;
    return `${normalizedBase}${finalPath}`;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
        <div className="relative p-6 md:p-8">
          <div className="flex items-center gap-3 text-indigo-700 mb-4">
            <Shield size={24} className="text-indigo-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          </div>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            At the Saudi ADHD Society, your privacy is our commitment. We believe that every visitor to this site has the right to complete privacy in-line with international standards, regardless of their level of technical competence or awareness of privacy practices.
          </p>
        </div>
      </div>

      {/* Our Promises Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Lock size={24} className="text-emerald-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Promises</h2>
        </div>
        
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          As such, we make the following promises:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-600 p-2 flex-shrink-0">
                <Lock size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">No Cookies</h3>
                <p className="text-sm text-emerald-900/90">
                  The Saudi ADHD Society website does not use any cookies, whether for functionality, tracking, or analytics, either for site visitors or logged-in users.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-600 p-2 flex-shrink-0">
                <Eye size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">No "Cookie Alternatives"</h3>
                <p className="text-sm text-emerald-900/90">
                  This website does not use any other forms of persistent data storage for tracking purposes or otherwise. Emails sent from this site do not use tracking pixels.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-600 p-2 flex-shrink-0">
                <Shield size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">No IP Addresses Saved</h3>
                <p className="text-sm text-emerald-900/90">
                  When you fill in a form on this site, we do not save any extra hidden information about you, your location, your device, or anything else.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-600 p-2 flex-shrink-0">
                <Lock size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-2">Protection of Minors</h3>
                <p className="text-sm text-emerald-900/90">
                  In line with the (Saudi Arabian) Children and Incompetent's Privacy Protection Policy, no personal identifiable information of minors or those otherwise incapable of responsible privacy decisions is collected via this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Controller & Collection Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Data Controller & Collection</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            <strong>Data Controller:</strong> Saudi ADHD Society (Registered with Ministry of Human Resources & Social Development – License 474), Riyadh, Kingdom of Saudi Arabia.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-900 mb-2">No Personal Data Collection</h3>
            <p className="text-sm md:text-base text-blue-900">
              This Research Portal does not collect, store, or process any personal data from visitors. We do not use contact forms, registration systems, or any other means of collecting personal information. As such, there is no personal data to retain, transfer, or share.
            </p>
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Shield size={24} className="text-emerald-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Commitments</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            <strong>Non-Profit Commitment:</strong> This website is operated by the Saudi ADHD Society, a non-profit organization. We are not engaged in any commercial or for-profit activities, and we do not share personal data with commercial entities.
          </p>

          <p className="text-sm md:text-base">
            <strong>No Commercial Communications:</strong> We do not use visitor contact information to send commercial or promotional messages, as we do not collect such information through this website.
          </p>

          <p className="text-sm md:text-base">
            <strong>We will never sell, lease, or trade your data</strong> to any third parties. We are committed to maintaining the privacy and confidentiality of any personal data we receive, though as stated above, we do not collect personal data through this website.
          </p>
        </div>
      </div>

      {/* Legal & Compliance Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-slate-700" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Legal & Compliance</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            <strong>Legal Compliance:</strong> In the event of legal investigations or proceedings, we may be required to provide information to regulatory authorities or judicial bodies as required by law. However, as we do not collect personal data through this website, there is typically no personal information available to disclose.
          </p>

          <p className="text-sm md:text-base">
            <strong>Policy Scope:</strong> This Privacy Policy applies to all content and services provided on this Research Portal. If any specific service or transaction has its own privacy policy, that policy will take precedence for that particular service.
          </p>
        </div>
      </div>

      {/* Security Measures Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Key size={24} className="text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Security Measures</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            While we do not collect personal data, we maintain security best practices for the website infrastructure:
          </p>
          <ul className="space-y-2 text-sm md:text-base list-disc list-inside ml-4">
            <li><strong>HTTPS/TLS Encryption:</strong> All connections to this website are encrypted using Transport Layer Security (TLS) via Cloudflare, ensuring secure communication between your browser and our servers.</li>
            <li><strong>Static Site Hosting:</strong> This website is hosted on GitHub Pages, which provides secure, reliable hosting without server-side processing that could collect data.</li>
            <li><strong>No Server-Side Processing:</strong> As a static site, there is no server-side code that could collect or process personal information.</li>
          </ul>
        </div>
      </div>

      {/* Technical Infrastructure Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Server size={24} className="text-slate-700" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Technical Infrastructure</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            This website uses the following third-party services for hosting and content delivery:
          </p>
          <ul className="space-y-2 text-sm md:text-base list-disc list-inside ml-4">
            <li><strong>Cloudflare:</strong> Provides HTTPS/TLS encryption and content delivery network (CDN) services. Cloudflare's privacy policy applies to their services, but as we do not collect personal data, no personal information flows through their systems.</li>
            <li><strong>GitHub Pages:</strong> Hosts the static website files. GitHub's privacy policy applies to their hosting services.</li>
          </ul>
          <p className="text-sm md:text-base">
            These services are used solely for website hosting and delivery. No personal data is shared with these providers as we do not collect personal data.
          </p>
        </div>
      </div>

      {/* Policy Updates Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900">Policy Updates</h3>
            <p className="text-sm text-slate-500">
              Last updated: 20 December 2025
            </p>
          </div>
          <p className="text-sm md:text-base">
            We may update this Privacy Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any updates will be posted on this page. You can track changes to this Privacy Policy through the{' '}
            <a 
              href="https://github.com/Saudi-ADHD-Society/res.adhd.org.sa-concept"
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
              <ExternalLink size={14} className="inline ml-1" />
            </a>
            , which maintains a complete version history of all changes. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
          </p>
        </div>
      </div>

      {/* Data Protection Contact Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 border border-indigo-200 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-indigo-600 p-3 flex-shrink-0">
            <Shield size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Data Protection Contact</h3>
            <p className="text-slate-700 text-sm md:text-base mb-3">
              At the Saudi ADHD Society, your privacy is our commitment. For questions or concerns regarding data protection, privacy rights, or this Privacy Policy, please contact:
            </p>
            <p className="text-slate-700 text-sm md:text-base mb-2">
              <strong>Jeremy Varnham</strong><br />
              Research Director, Saudi ADHD Society
            </p>
            <p className="text-slate-700 text-sm md:text-base">
              Email:{' '}
              <a 
                href="mailto:privacy@adhd.org.sa"
                className="text-indigo-700 hover:text-indigo-800 font-semibold underline"
              >
                privacy@adhd.org.sa
              </a>
            </p>
            <p className="text-slate-700 text-sm md:text-base mt-3 text-slate-600">
              <strong>Note:</strong> As we do not collect personal data, there is typically no personal information to access, modify, or delete. However, we are happy to address any privacy-related questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

