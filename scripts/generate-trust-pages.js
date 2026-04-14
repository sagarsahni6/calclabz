#!/usr/bin/env node
/**
 * Calc Labz — Trust & Legal Pages Generator
 * ==========================================
 * Generates static pre-rendered HTML for:
 *   - /about
 *   - /privacy
 *   - /terms
 *   - /contact
 *   - /disclaimer
 *   - /editorial-policy
 *
 * Each page has real, substantive content baked into the HTML —
 * not SPA-rendered, so crawlers see actual text.
 *
 * Usage:  node scripts/generate-trust-pages.js
 */

'use strict';

var fs   = require('fs');
var path = require('path');

var ROOT     = path.resolve(__dirname, '..');
var TEMPLATE = path.join(ROOT, 'index.html');
var BASE_URL = 'https://calclabz.com';
var TODAY    = new Date().toISOString().split('T')[0];

// SEO CSS (same as generate-prerender.js)
var SEO_CSS = '\n/* SEO Pre-rendered Content */\n' +
'.seo-breadcrumb{padding:8px 0;font-size:.82rem;color:var(--txt2)}\n' +
'.seo-breadcrumb a{color:var(--p);text-decoration:none}\n' +
'.seo-breadcrumb a:hover{text-decoration:underline}\n' +
'#seo-content h1{font-size:1.8rem;font-weight:800;margin:16px 0 8px;color:var(--txt)}\n' +
'#seo-content h2{font-size:1.2rem;font-weight:700;margin:24px 0 8px;color:var(--txt)}\n' +
'#seo-content h3{font-size:1rem;font-weight:600;margin:16px 0 6px;color:var(--txt)}\n' +
'.seo-intro{font-size:.95rem;color:var(--txt1);line-height:1.7;margin-bottom:20px}\n' +
'.seo-section{margin-bottom:24px;padding:16px;background:var(--bg1);border:1px solid var(--brd);border-radius:var(--rmd)}\n' +
'.seo-section p,.seo-section li{font-size:.9rem;color:var(--txt1);line-height:1.7}\n' +
'.seo-section ol,.seo-section ul{padding-left:20px;margin:8px 0}\n' +
'.seo-section li{margin:4px 0}\n' +
'.seo-trust{margin:24px 0;padding:16px;background:var(--bg2);border-radius:var(--rsm);border-left:3px solid var(--p)}\n' +
'.seo-trust p{font-size:.82rem;color:var(--txt2);line-height:1.6;margin:4px 0}\n' +
'.seo-trust strong{color:var(--txt1)}\n';

// ── UPDATED FOOTER ──────────────────────────────────────────────────────────
var UPDATED_FOOTER = `    <!-- ═══ FOOTER ═══ -->
    <footer class="footer">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="footer-brand"><a href="/" aria-label="Calc Labz Home"><img src="/calclabz-logo.png" alt="Calc Labz" width="140" height="30"></a></div>
                <div class="footer-tagline">300+ free online calculators for finance, health, math, engineering &amp; more. Instant results, zero signup.</div>
                <div class="footer-trust">
                    <span><i class="fas fa-check-circle" aria-hidden="true"></i>Free Forever</span>
                    <span><i class="fas fa-lock" aria-hidden="true"></i>No Data Collected</span>
                    <span><i class="fas fa-wifi" aria-hidden="true"></i>Works Offline</span>
                </div>
            </div>
            <div class="footer-col">
                <h4><i class="fas fa-compass" aria-hidden="true"></i>Quick Links</h4>
                <div class="footer-col-links">
                    <a href="/" class="footer-link"><i class="fas fa-house" aria-hidden="true"></i>Home</a>
                    <a href="/finance-calculators" class="footer-link"><i class="fas fa-coins" aria-hidden="true"></i>Finance Calculators</a>
                    <a href="/health-calculators" class="footer-link"><i class="fas fa-heartbeat" aria-hidden="true"></i>Health Calculators</a>
                    <a href="/math-calculators" class="footer-link"><i class="fas fa-calculator" aria-hidden="true"></i>Math Calculators</a>
                    <a href="/education-calculators" class="footer-link"><i class="fas fa-graduation-cap" aria-hidden="true"></i>Education Calculators</a>
                </div>
            </div>
            <div class="footer-col">
                <h4><i class="fas fa-fire" aria-hidden="true"></i>Popular Calculators</h4>
                <div class="footer-col-links">
                    <a href="/emi-calculator" class="footer-link"><i class="fas fa-university" aria-hidden="true"></i>Loan EMI Calculator</a>
                    <a href="/sip-calculator" class="footer-link"><i class="fas fa-seedling" aria-hidden="true"></i>SIP Calculator</a>
                    <a href="/gst-calculator" class="footer-link"><i class="fas fa-receipt" aria-hidden="true"></i>GST Calculator</a>
                    <a href="/bmi-calculator" class="footer-link"><i class="fas fa-heartbeat" aria-hidden="true"></i>BMI Calculator</a>
                    <a href="/incometax-calculator" class="footer-link"><i class="fas fa-file-invoice-dollar" aria-hidden="true"></i>Income Tax Calculator</a>
                </div>
            </div>
            <div class="footer-col">
                <h4><i class="fas fa-shield-halved" aria-hidden="true"></i>About &amp; Legal</h4>
                <div class="footer-col-links">
                    <a href="/about" class="footer-link"><i class="fas fa-info-circle" aria-hidden="true"></i>About Calc Labz</a>
                    <a href="/contact" class="footer-link"><i class="fas fa-envelope" aria-hidden="true"></i>Contact Us</a>
                    <a href="/privacy" class="footer-link"><i class="fas fa-user-shield" aria-hidden="true"></i>Privacy Policy</a>
                    <a href="/terms" class="footer-link"><i class="fas fa-file-contract" aria-hidden="true"></i>Terms of Use</a>
                    <a href="/disclaimer" class="footer-link"><i class="fas fa-exclamation-triangle" aria-hidden="true"></i>Disclaimer</a>
                    <a href="/editorial-policy" class="footer-link"><i class="fas fa-clipboard-check" aria-hidden="true"></i>Editorial Policy</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <span>&copy; 2026 Calc Labz. Free forever.</span>
            <span>Made with ❤️ in India</span>
            <span>No data collected. Your privacy matters.</span>
        </div>
    </footer>`;

// ── PAGE DEFINITIONS ────────────────────────────────────────────────────────
var TRUST_PAGES = [
  {
    slug: 'about',
    title: 'About Calc Labz — Our Mission, Team & Methodology',
    desc: 'Learn about Calc Labz, the team behind 300+ free online calculators, our editorial standards, and how we ensure accuracy in every calculation.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>About Calc Labz</span>
      </nav>

      <h1>About Calc Labz</h1>
      <p class="seo-intro">Calc Labz is a free, open-access calculator platform built by a small team of engineers and finance professionals in India. We believe everyone deserves access to accurate, trustworthy calculation tools — without paywalls, signups, or data collection.</p>

      <section class="seo-section">
        <h2>Our Mission</h2>
        <p>We started Calc Labz with a simple observation: most online calculators are either buried behind ads and popups, or they give results without showing the methodology. We wanted to build something different — a platform where every calculation is transparent, every formula is documented, and every result can be verified.</p>
        <p>Today, Calc Labz offers over 250 calculators spanning finance, health &amp; fitness, mathematics, education, engineering, and everyday decision-making. Each tool is designed to give you clear, actionable results with full transparency into how the numbers are computed.</p>
      </section>

      <section class="seo-section">
        <h2>Who We Are</h2>
        <p>Calc Labz is maintained by <strong>Sagar Sahni</strong> and a small editorial team based in India. Our team includes contributors with backgrounds in:</p>
        <ul>
          <li><strong>Software Engineering</strong> — Building reliable, accessible web applications</li>
          <li><strong>Personal Finance</strong> — Understanding Indian tax laws, investment instruments, and banking products</li>
          <li><strong>Data Analysis</strong> — Ensuring our formulas and methodologies are accurate and well-sourced</li>
        </ul>
        <p>We are not a financial advisory firm, a medical practice, or a licensed professional services company. We build tools that help you understand numbers — always consult qualified professionals for decisions about your money, health, or legal matters.</p>
      </section>

      <section class="seo-section">
        <h2>How We Ensure Accuracy</h2>
        <p>Every calculator on Calc Labz follows our <a href="/editorial-policy">editorial policy</a>. In short:</p>
        <ul>
          <li>Formulas are sourced from established textbooks, government publications, or industry-standard references</li>
          <li>Financial calculators reference current tax slabs from the Income Tax Department of India, RBI circulars, and SEBI guidelines where applicable</li>
          <li>Health calculators use clinically validated formulas (e.g., Mifflin-St Jeor for BMR, Devine formula for ideal weight)</li>
          <li>All calculators include a methodology note explaining the formula used</li>
          <li>We display "last updated" dates so you know when formulas were last verified</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Privacy &amp; Data</h2>
        <p>Calc Labz does not collect personal data. All calculations happen in your browser — no data is sent to any server. We do not require signups, accounts, or email addresses to use any calculator. Read our full <a href="/privacy">Privacy Policy</a> for details.</p>
      </section>

      <section class="seo-section">
        <h2>Contact Us</h2>
        <p>Have a question, spot an error, or want to suggest a new calculator? We would love to hear from you.</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a></li>
          <li><strong>Contact Page:</strong> <a href="/contact">calclabz.com/contact</a></li>
        </ul>
        <p>We typically respond within 1&ndash;2 business days.</p>
      </section>

      <div class="seo-trust">
        <p><strong>Last updated:</strong> April 2026</p>
      </div>
    </div>`;
    }
  },

  {
    slug: 'contact',
    title: 'Contact Us — Calc Labz',
    desc: 'Get in touch with the Calc Labz team. Report errors, suggest calculators, or ask questions about our tools.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>Contact Us</span>
      </nav>

      <h1>Contact Us</h1>
      <p class="seo-intro">We value your feedback, questions, and suggestions. Whether you have found an error in a calculation, want to request a new calculator, or have a general inquiry, we are here to help.</p>

      <section class="seo-section">
        <h2>How to Reach Us</h2>
        <p>The best way to contact us is via email. We aim to respond to all inquiries within 1&ndash;2 business days.</p>
        <ul>
          <li><strong>General Inquiries:</strong> <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a></li>
          <li><strong>Bug Reports &amp; Corrections:</strong> <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a> (please include the calculator name and the error you found)</li>
          <li><strong>Calculator Requests:</strong> <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a> (tell us what you need and we will prioritize it)</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Report an Error</h2>
        <p>Accuracy is our top priority. If you believe a calculator is producing incorrect results, please let us know with the following details:</p>
        <ol>
          <li>Name of the calculator (e.g., "EMI Calculator")</li>
          <li>The inputs you used</li>
          <li>The result you received</li>
          <li>What you expected the result to be (and how you calculated it)</li>
        </ol>
        <p>We investigate every accuracy report and will update the calculator if an error is confirmed.</p>
      </section>

      <section class="seo-section">
        <h2>About Calc Labz</h2>
        <p>Calc Labz is operated by Sagar Sahni from India. We are a small, independent team focused on building high-quality free calculator tools. Learn more on our <a href="/about">About page</a>.</p>
        <p><strong>Website:</strong> <a href="https://calclabz.com">calclabz.com</a></p>
        <p><strong>Location:</strong> India</p>
      </section>

      <div class="seo-trust">
        <p><strong>Response time:</strong> We typically respond within 1&ndash;2 business days.</p>
        <p><strong>Last updated:</strong> April 2026</p>
      </div>
    </div>`;
    }
  },

  {
    slug: 'privacy',
    title: 'Privacy Policy — Calc Labz',
    desc: 'Calc Labz privacy policy. Learn how we handle your data, cookies, and third-party services. We do not collect personal information.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>Privacy Policy</span>
      </nav>

      <h1>Privacy Policy</h1>
      <p class="seo-intro"><strong>Effective Date:</strong> April 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 13, 2026</p>

      <section class="seo-section">
        <h2>Overview</h2>
        <p>Calc Labz (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights. Calc Labz is operated by Sagar Sahni from India.</p>
        <p><strong>Key point:</strong> All calculations on Calc Labz happen entirely in your browser. We do not send your calculation inputs or results to any server.</p>
      </section>

      <section class="seo-section">
        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide</h3>
        <p>We do not require registration, login, or personal details to use our calculators. If you contact us by email, we receive your email address and message content solely to respond to your inquiry.</p>

        <h3>1.2 Automatically Collected Information</h3>
        <p>If you consent to analytics, we may collect:</p>
        <ul>
          <li>Page views and calculator usage (via Google Analytics)</li>
          <li>Device type, browser type, and operating system</li>
          <li>Approximate geographic location (country/city level, via IP address)</li>
          <li>Referral source (how you found our site)</li>
        </ul>
        <p>This information is collected only after you provide consent through our cookie consent banner. It is used in aggregate form to understand traffic patterns and improve our calculators.</p>

        <h3>1.3 Calculation Data</h3>
        <p>All calculations run locally in your web browser using JavaScript. <strong>No calculation inputs or results are transmitted to our servers or any third party.</strong> Your financial, health, and personal data never leaves your device.</p>
      </section>

      <section class="seo-section">
        <h2>2. Cookies &amp; Local Storage</h2>
        <p>Calc Labz uses the following types of storage:</p>
        <ul>
          <li><strong>Essential (Local Storage):</strong> Theme preference (dark/light mode), favorites list, and PWA settings. These are stored locally on your device and not transmitted anywhere.</li>
          <li><strong>Analytics Cookies (Consent Required):</strong> Google Analytics cookies are loaded only after you consent via our cookie banner. These track anonymized usage data.</li>
          <li><strong>Advertising Cookies (Consent Required):</strong> If ads are displayed, ad-related cookies from Google AdSense may be set. These are loaded only after your consent.</li>
        </ul>
        <p>You can withdraw consent at any time by clearing your browser cookies and revisiting our site.</p>
      </section>

      <section class="seo-section">
        <h2>3. Third-Party Services</h2>
        <p>Calc Labz may use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics:</strong> For anonymized traffic analysis (consent required)</li>
          <li><strong>Google AdSense:</strong> For serving advertisements (consent required)</li>
          <li><strong>Google Fonts:</strong> For web font delivery</li>
          <li><strong>Cloudflare/CDN:</strong> For hosting Font Awesome icon library</li>
        </ul>
        <p>We do not sell, rent, or share personal information with any third party for marketing purposes.</p>
      </section>

      <section class="seo-section">
        <h2>4. Children&rsquo;s Privacy</h2>
        <p>Calc Labz is a general-purpose educational tool. We do not knowingly collect personal information from children under 13. Our calculators do not require any personal data to function.</p>
      </section>

      <section class="seo-section">
        <h2>5. Data Retention</h2>
        <p>Since we do not collect personal data through our calculators, there is no personal data to retain. Analytics data (if consented) is retained according to Google Analytics default retention settings (14 months). Contact emails are retained for as long as necessary to address your inquiry.</p>
      </section>

      <section class="seo-section">
        <h2>6. Your Rights</h2>
        <p>Under applicable privacy laws (including the Indian Information Technology Act, 2000, and GDPR where applicable), you have the right to:</p>
        <ul>
          <li>Access any personal data we hold about you</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for analytics/advertising cookies</li>
          <li>Contact us with any privacy concerns</li>
        </ul>
        <p>To exercise any of these rights, email us at <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a>.</p>
      </section>

      <section class="seo-section">
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of Calc Labz after changes constitutes acceptance of the revised policy.</p>
      </section>

      <section class="seo-section">
        <h2>8. Contact</h2>
        <p>For privacy-related questions or concerns:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a></li>
          <li><strong>Website:</strong> <a href="https://calclabz.com/contact">calclabz.com/contact</a></li>
        </ul>
      </section>

      <div class="seo-trust">
        <p><strong>Last updated:</strong> April 13, 2026</p>
      </div>
    </div>`;
    }
  },

  {
    slug: 'terms',
    title: 'Terms of Use — Calc Labz',
    desc: 'Terms of use for Calc Labz. Understand the conditions for using our free online calculators, accuracy disclaimers, and intellectual property rights.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>Terms of Use</span>
      </nav>

      <h1>Terms of Use</h1>
      <p class="seo-intro"><strong>Effective Date:</strong> April 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 13, 2026</p>

      <section class="seo-section">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Calc Labz (<a href="https://calclabz.com">calclabz.com</a>), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website. Calc Labz is operated by Sagar Sahni from India.</p>
      </section>

      <section class="seo-section">
        <h2>2. Description of Service</h2>
        <p>Calc Labz provides free online calculation tools across various categories including finance, health, mathematics, education, engineering, and everyday use. All calculations are performed locally in your web browser using JavaScript. The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind.</p>
      </section>

      <section class="seo-section">
        <h2>3. Accuracy Disclaimer</h2>
        <p>While we strive for accuracy in all our calculators:</p>
        <ul>
          <li>Results are <strong>estimates for informational purposes only</strong> and should not be used as the sole basis for financial, medical, legal, or other professional decisions</li>
          <li>Tax calculations reference published tax slabs but may not account for all individual circumstances, exemptions, or recent amendments</li>
          <li>Health calculators use peer-reviewed formulas but cannot replace professional medical diagnosis or advice</li>
          <li>Engineering and construction calculations provide estimates that must be verified by a licensed professional before use in real projects</li>
          <li>We update our formulas and data periodically, but cannot guarantee that all information is current at all times</li>
        </ul>
        <p><strong>Always verify calculator results with a qualified professional before making important decisions.</strong></p>
      </section>

      <section class="seo-section">
        <h2>4. No Professional Advice</h2>
        <p>Nothing on Calc Labz constitutes financial advice, tax advice, medical advice, legal advice, or any form of professional consultation. Our tools are educational aids designed to help you understand numbers and make informed decisions in consultation with qualified professionals.</p>
      </section>

      <section class="seo-section">
        <h2>5. Intellectual Property</h2>
        <p>The Calc Labz name, logo, design, and original content are the intellectual property of Calc Labz. Mathematical formulas and calculation methods used are based on publicly available, standard methodologies and are not proprietary. You may use our calculators freely but may not scrape, replicate, or commercially redistribute our website content.</p>
      </section>

      <section class="seo-section">
        <h2>6. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our service for any unlawful purpose</li>
          <li>Attempt to disrupt or overload our servers or infrastructure</li>
          <li>Scrape or harvest data from our website using automated means</li>
          <li>Misrepresent Calc Labz results as certified professional advice</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>7. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Calc Labz and its operator shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of our calculators or reliance on any results provided. This includes, but is not limited to, financial losses, health outcomes, or project cost overruns resulting from use of our tools.</p>
      </section>

      <section class="seo-section">
        <h2>8. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites or resources. We are not responsible for the content, accuracy, or practices of external sites. Inclusion of a link does not imply endorsement.</p>
      </section>

      <section class="seo-section">
        <h2>9. Changes to These Terms</h2>
        <p>We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated date. Continued use of Calc Labz after modifications constitutes acceptance of the revised terms.</p>
      </section>

      <section class="seo-section">
        <h2>10. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of courts in India.</p>
      </section>

      <section class="seo-section">
        <h2>11. Contact</h2>
        <p>For questions about these Terms of Use, contact us at <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a>.</p>
      </section>

      <div class="seo-trust">
        <p><strong>Last updated:</strong> April 13, 2026</p>
      </div>
    </div>`;
    }
  },

  {
    slug: 'disclaimer',
    title: 'Disclaimer — Calc Labz',
    desc: 'Important disclaimers for Calc Labz calculators covering financial, medical, and general content. Understand the limitations of our calculation tools.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>Disclaimer</span>
      </nav>

      <h1>Disclaimer</h1>
      <p class="seo-intro">Calc Labz provides free online calculators for informational and educational purposes. Please read the following disclaimers carefully before using our tools.</p>

      <section class="seo-section">
        <h2>General Disclaimer</h2>
        <p>The content and calculators on Calc Labz are provided for <strong>informational and educational purposes only</strong>. While we make every effort to ensure the accuracy of our calculations, we cannot guarantee that results are error-free or up to date. All results should be treated as estimates, not as definitive figures.</p>
        <p>Calc Labz is not a licensed financial advisory, medical, legal, or engineering firm. Our tools do not constitute professional advice of any kind.</p>
      </section>

      <section class="seo-section">
        <h2>Financial Calculator Disclaimer</h2>
        <p>Our finance calculators — including EMI, SIP, income tax, GST, PPF, FD, and others — are designed to help you understand financial concepts and make preliminary estimates. Important caveats:</p>
        <ul>
          <li>Tax calculations are based on publicly available tax slab rates and rules. Actual tax liability depends on individual circumstances, applicable deductions, and current legislation. Tax laws change frequently — always verify with the latest Income Tax Department guidelines.</li>
          <li>Loan EMI calculations assume a standard reducing balance method. Actual EMIs may vary based on bank-specific policies, processing fees, and prepayment terms.</li>
          <li>Investment return projections (SIP, FD, PPF, etc.) are based on assumed rates of return. Past performance does not guarantee future results. Actual returns depend on market conditions.</li>
          <li>We do not provide investment recommendations. Consult a SEBI-registered investment advisor for personalized advice.</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Health &amp; Fitness Calculator Disclaimer</h2>
        <p>Our health calculators — including BMI, BMR, TDEE, calorie, body fat, and others — use clinically validated formulas from peer-reviewed research. However:</p>
        <ul>
          <li>These tools provide <strong>general estimates</strong> and are not a substitute for professional medical evaluation</li>
          <li>BMI categories may vary for different Asian populations — the WHO has recommended lower cutoffs for Asian individuals</li>
          <li>Calorie and nutrition calculators provide starting estimates that should be adjusted based on individual response</li>
          <li>Do not use health calculators to self-diagnose conditions. Always consult a qualified healthcare professional</li>
          <li>Pregnancy and ovulation calculators provide estimates only — consult your obstetrician or gynaecologist for medical guidance</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Engineering &amp; Construction Calculator Disclaimer</h2>
        <p>Engineering and construction calculators provide preliminary estimates to assist in project planning. <strong>All structural, electrical, and material calculations must be verified by a licensed engineer before use in any real-world project.</strong> Calc Labz accepts no responsibility for construction decisions based on our calculators.</p>
      </section>

      <section class="seo-section">
        <h2>No Guarantee of Accuracy</h2>
        <p>Despite our best efforts to maintain accurate formulas and current data:</p>
        <ul>
          <li>Interest rates, tax slabs, and government scheme rules may change without notice</li>
          <li>We update calculators periodically but cannot guarantee real-time accuracy</li>
          <li>Rounding, compounding frequency, and edge cases may cause minor differences between our results and exact figures</li>
        </ul>
        <p>If you find any error in our calculators, please <a href="/contact">report it to us</a> and we will investigate promptly.</p>
      </section>

      <section class="seo-section">
        <h2>External Links</h2>
        <p>Calc Labz may contain links to third-party websites for reference purposes. We do not endorse, verify, or take responsibility for the content or accuracy of external websites.</p>
      </section>

      <div class="seo-trust">
        <p><strong>Questions about this disclaimer?</strong> Contact us at <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a>.</p>
        <p><strong>Last updated:</strong> April 13, 2026</p>
      </div>
    </div>`;
    }
  },

  {
    slug: 'editorial-policy',
    title: 'Editorial Policy — Calc Labz',
    desc: 'How Calc Labz creates, reviews, and maintains its calculator content. Our editorial standards ensure accuracy, transparency, and trustworthiness.',
    body: function() {
      return `
    <div id="seo-content">
      <nav class="seo-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>Editorial Policy</span>
      </nav>

      <h1>Editorial Policy</h1>
      <p class="seo-intro">Transparency and accuracy are the foundation of Calc Labz. This policy describes how we create, review, and maintain our calculators and educational content.</p>

      <section class="seo-section">
        <h2>Our Editorial Principles</h2>
        <ul>
          <li><strong>Accuracy First:</strong> Every formula we implement is sourced from established references — textbooks, government publications, peer-reviewed research, or industry standards.</li>
          <li><strong>Transparency:</strong> We document the methodology behind every calculator. You should always be able to understand how your result was computed.</li>
          <li><strong>No Conflicts of Interest:</strong> We do not accept payment from financial institutions, insurance companies, or healthcare providers to influence our calculator results or recommendations.</li>
          <li><strong>User-First Content:</strong> Our guides and blog posts are written to educate, not to drive affiliate revenue or sell products. We do not use clickbait or misleading claims.</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>How We Build Calculators</h2>
        <ol>
          <li><strong>Research:</strong> We identify the standard formula or methodology for the calculation from authoritative sources.</li>
          <li><strong>Implementation:</strong> A developer implements the calculation logic in JavaScript, ensuring edge cases are handled correctly.</li>
          <li><strong>Testing:</strong> Each calculator is tested against known reference values. For financial calculators, we compare outputs with bank calculators and published amortization tables. For health calculators, we validate against published clinical tools.</li>
          <li><strong>Documentation:</strong> We write clear explanations of what the calculator does, who it is for, the formula used, worked examples, common mistakes to avoid, and FAQ answers.</li>
          <li><strong>Review:</strong> Content is reviewed for accuracy and clarity before publication.</li>
        </ol>
      </section>

      <section class="seo-section">
        <h2>Sources We Reference</h2>
        <p>Our calculators and content reference the following types of sources:</p>
        <ul>
          <li><strong>Finance:</strong> Income Tax Department of India published tax slabs and circulars, RBI master circulars, SEBI guidelines, published bank interest rates</li>
          <li><strong>Health:</strong> Peer-reviewed research papers, WHO guidelines, formulas from established medical literature (e.g., Harris-Benedict equation, Mifflin-St Jeor equation, Devine formula)</li>
          <li><strong>Education:</strong> University grading policies, UGC guidelines, published exam patterns</li>
          <li><strong>Engineering:</strong> Standard engineering reference materials, IS codes (Bureau of Indian Standards), established physics equations</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Updates &amp; Corrections</h2>
        <p>We review and update our calculators regularly, particularly when:</p>
        <ul>
          <li>Tax slabs or government scheme rates change (typically after Union Budget announcements)</li>
          <li>Users report potential errors</li>
          <li>New research updates a health or science formula</li>
        </ul>
        <p>Every calculator page displays a &ldquo;Last updated&rdquo; date. If you find outdated information, please <a href="/contact">contact us</a> and we will prioritize a review.</p>
      </section>

      <section class="seo-section">
        <h2>YMYL Content Standards</h2>
        <p>We recognize that many of our calculators fall under Google&rsquo;s &ldquo;Your Money or Your Life&rdquo; (YMYL) category. For these pages, we apply heightened editorial standards:</p>
        <ul>
          <li>Finance calculators include explicit disclaimers that results are estimates and should not replace professional financial advice</li>
          <li>Health calculators include medical disclaimers and recommend consulting healthcare professionals</li>
          <li>All YMYL pages display methodology notes explaining exactly how results are computed</li>
          <li>We avoid making unverifiable claims about returns, health outcomes, or legal interpretations</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Content We Do Not Create</h2>
        <p>Calc Labz does not:</p>
        <ul>
          <li>Generate content using AI without human review and fact-checking</li>
          <li>Publish fake testimonials, fabricated statistics, or invented regulatory claims</li>
          <li>Use keyword stuffing or manipulative SEO techniques</li>
          <li>Accept sponsored content or paid reviews that are not clearly disclosed</li>
        </ul>
      </section>

      <section class="seo-section">
        <h2>Author &amp; Editorial Team</h2>
        <p>Calc Labz is maintained by <strong>Sagar Sahni</strong> and a small editorial team. For questions about our editorial standards, content corrections, or methodology inquiries, contact us at <a href="mailto:sagarsahni69@gmail.com">sagarsahni69@gmail.com</a>.</p>
      </section>

      <div class="seo-trust">
        <p><strong>Last updated:</strong> April 13, 2026</p>
      </div>
    </div>`;
    }
  }
];

// ── GENERATOR ───────────────────────────────────────────────────────────────

function buildPage(page) {
  var template = fs.readFileSync(TEMPLATE, 'utf8');
  var pageUrl = BASE_URL + '/' + page.slug;
  var html = template;

  // 1. Replace <title>
  html = html.replace(/<title>.*?<\/title>/, '<title>' + page.title + ' | Calc Labz</title>');

  // 2. Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + page.desc.replace(/"/g, '&quot;') + '">'
  );

  // 3. Replace canonical
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + pageUrl + '">');

  // 4. Replace og tags
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + pageUrl + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + page.title + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="' + page.title + '">');
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="' + page.desc.replace(/"/g, '&quot;') + '">');

  // 5. Remove hreflang (inner pages)
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\r?\n/g, '');

  // 6. Remove homepage JSON-LD
  html = html.replace(/<!-- ═══ JSON-LD: SoftwareApplication[\s\S]*?<\/script>\s*\n/, '');
  html = html.replace(/<!-- ═══ JSON-LD: WebSite[\s\S]*?<\/script>\s*\n/, '');

  // 7. Inject breadcrumb schema
  var bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: page.title.split(' —')[0].split(' |')[0], item: pageUrl }
    ]
  };
  html = html.replace('</head>',
    '<script type="application/ld+json" id="jsonld-breadcrumb">\n' +
    JSON.stringify(bc, null, 2) + '\n</script>\n</head>'
  );

  // 8. Inject SEO CSS
  html = html.replace('    </style>', SEO_CSS + '    </style>');

  // 9. Replace body placeholder with real content
  var bodyHtml = page.body();
  html = html.replace(
    /<!-- Content injected by JS -->[\s\S]*?<p>Loading Calc Labz\.\.\.<\/p>\s*<\/div>/,
    bodyHtml
  );

  // 10. Update footer with new links
  html = html.replace(
    /    <!-- ═══ FOOTER ═══ -->[\s\S]*?<\/footer>/,
    UPDATED_FOOTER
  );

  // Write file
  var outFile = path.join(ROOT, page.slug + '.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log('  ✓  ' + page.slug + '.html');
}

// ── MAIN ────────────────────────────────────────────────────────────────────
console.log('\n📄 Generating trust & legal pages...\n');

TRUST_PAGES.forEach(buildPage);

console.log('\n✅ Generated ' + TRUST_PAGES.length + ' trust/legal pages.\n');

// Export for use in generate-all.js
module.exports = {
  TRUST_PAGES: TRUST_PAGES,
  UPDATED_FOOTER: UPDATED_FOOTER
};
