import React, { useEffect, useState } from 'react';

const whatsappUrl = 'https://wa.me/233500729916?text=Hi%20TTW%20Enterprises%2C%20I%20want%20to%20start%20a%20project.';

const fallbackPackages = [
  {
    name: 'Starter Presence',
    price: 'From GHS 4,000',
    monthly: 'GHS 1,200 / month',
    description: 'A polished first website for businesses that need a premium online presence.',
    features: ['Up to 5 pages', 'Mobile responsive design', 'Basic SEO setup', 'Monthly edits and maintenance', 'Performance checks'],
    tone: 'deep',
  },
  {
    name: 'Growth Package',
    price: 'From GHS 7,000',
    monthly: 'GHS 3,000 / month',
    description: 'For brands ready for web design plus digital marketing support.',
    features: ['Expanded custom website', 'Brand messaging support', 'Social media direction', 'Monthly analytics report', 'Content and campaign planning'],
    featured: true,
    tone: 'gold',
  },
  {
    name: 'Custom Luxury Build',
    price: 'Custom quote',
    monthly: 'Tailored support plan',
    description: 'A high-touch build for businesses that want a fully bespoke digital presence.',
    features: ['Custom design system', 'Advanced conversion flow', 'Brand strategy', 'Campaign consulting', 'Priority support'],
    tone: 'cream',
  },
];

const serviceCards = [
  {
    icon: '✦',
    title: 'Website Design',
    text: 'Premium-looking websites built to make brands feel trusted, sharp, and high-value.',
  },
  {
    icon: '◈',
    title: 'Digital Marketing',
    text: 'Content direction, positioning, and campaign thinking designed to turn attention into action.',
  },
  {
    icon: '◇',
    title: 'Brand Presence',
    text: 'A polished visual and verbal identity that makes a business feel established from day one.',
  },
  {
    icon: '◎',
    title: 'Growth Strategy',
    text: 'Clear digital structure and analytics support so your brand can scale with intention.',
  },
];

const processSteps = [
  ['01', 'Discovery and positioning', 'We define the offer, audience, and the feel your brand should communicate.'],
  ['02', 'Design and build', 'We create a premium site experience that fits your ambition and business goals.'],
  ['03', 'Launch and refine', 'We go live, support the site, and improve your digital presence over time.'],
  ['04', 'Support and growth', 'We keep your presence updated with maintenance, reporting, and digital guidance.'],
];

const showcaseItems = [
  ['Website Design', 'Clean digital storefronts for brands that need trust before the first conversation.'],
  ['Brand Presence', 'Visual direction, messaging, and structure that make businesses feel established.'],
  ['Digital Growth', 'Content planning and campaign systems that turn attention into action.'],
];

export default function App() {
  const [packages, setPackages] = useState(fallbackPackages);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: 'Website Design',
    message: '',
  });

  useEffect(() => {
    async function loadPackages() {
      try {
        const response = await fetch('/api/packages');
        if (!response.ok) throw new Error('Could not load packages');
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) setPackages(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadPackages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');

      setStatus('Your project inquiry was sent successfully.');
      setFormData({ name: '', email: '', business: '', service: 'Website Design', message: '' });
    } catch (error) {
      setStatus('The form could not send yet. Please message us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="site-shell" id="home">
      <nav className="floating-nav glass-nav">
        <a className="nav-brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src="/ttw-logo.png" alt="TTW logo" />
          <span>Enterprises</span>
        </a>

        <div className="desktop-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Quote</a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['about', 'services', 'packages', 'process', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
        ))}
        <a className="mobile-quote" href={whatsappUrl} target="_blank" rel="noreferrer">Message on WhatsApp</a>
      </div>

      <main>
        <section className="hero-section">
          <div className="hero-bg">
            <img src="/ttw-logo.png" alt="" />
          </div>
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-copy-wrap">
              <div className="pill reveal"><span /> Premium websites and digital growth</div>
              <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
                Build a digital presence that <em>looks expensive</em> and performs like it means business.
              </h1>
              <p className="reveal" style={{ transitionDelay: '0.2s' }}>
                TTW Enterprises creates sleek websites and digital marketing systems for modern brands that want to look premium, move professionally, and grow with intention.
              </p>
              <div className="hero-actions reveal" style={{ transitionDelay: '0.3s' }}>
                <a className="button light" href={whatsappUrl} target="_blank" rel="noreferrer">Start a Project →</a>
                <a className="button outline-light" href="#packages">View Packages</a>
              </div>
              <div className="mini-stats reveal" style={{ transitionDelay: '0.4s' }}>
                <div><strong>24/7</strong><span>Your site keeps your business visible around the clock.</span></div>
                <div><strong>Elite</strong><span>Designed to elevate how customers perceive your brand.</span></div>
                <div><strong>Accra</strong><span>Built for modern Ghanaian businesses.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="marquee-track">
            {['Website Design', 'Digital Marketing', 'Brand Presence', 'Growth Strategy', 'Premium Builds', 'Monthly Support', 'Website Design', 'Digital Marketing', 'Brand Presence', 'Growth Strategy'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section split-section" id="about">
          <div className="blob gold" />
          <div className="container split-grid">
            <div className="visual-card reveal-left">
              <img src="/ttw-logo.png" alt="TTW Enterprises" />
              <div className="floating-badge">
                <strong>TTW</strong>
                <span>To The Wiase</span>
              </div>
            </div>
            <div className="content-side reveal-right">
              <div className="section-pill">Who We Are</div>
              <h2>A modern creative partner for brands that need to look <em>serious</em>.</h2>
              <p>
                We create a premium digital front that makes businesses feel current, established, and worth paying attention to. From websites to brand presence and digital marketing direction, TTW helps brands show up with clarity and confidence.
              </p>
              <p>
                Clean execution. Strong messaging. Premium visual identity. Designed for businesses that want to look serious before they even speak.
              </p>
              <div className="check-grid">
                <span>Premium-first design</span>
                <span>Strategy-led builds</span>
                <span>Mobile responsive</span>
                <span>Ongoing support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="center-heading reveal">
              <div className="section-pill">What We Do</div>
              <h2>Digital solutions for brands ready to <em>stand out</em>.</h2>
              <p>Every service is built around trust, clarity, and premium customer perception.</p>
            </div>
            <div className="service-grid">
              {serviceCards.map((service, index) => (
                <article className="service-card glass-card stagger" style={{ transitionDelay: `${index * 0.08}s` }} key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Learn more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            <div className="reveal"><strong>Premium</strong><span>Design direction</span></div>
            <div className="reveal"><strong>GHS 4k+</strong><span>Website builds</span></div>
            <div className="reveal"><strong>GHS 1.2k+</strong><span>Monthly support</span></div>
            <div className="reveal"><strong>Accra</strong><span>Ghana based</span></div>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="section-pill">Packages</div>
                <h2>Pricing built for different <em>growth stages</em>.</h2>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Ask for a quote →</a>
            </div>
            <div className="package-grid">
              {packages.map((item, index) => (
                <article className={`package-card stagger ${item.featured ? 'featured' : ''}`} style={{ transitionDelay: `${index * 0.08}s` }} key={item.name}>
                  {item.featured && <div className="badge">Most Popular</div>}
                  <h3>{item.name}</h3>
                  <div className="price">{item.price}</div>
                  <p className="monthly">{item.monthly}</p>
                  <p className="description">{item.description}</p>
                  <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="section-pill">Featured Work</div>
                <h2>What TTW can build for your <em>brand</em>.</h2>
              </div>
              <a href="#contact">Start yours →</a>
            </div>
            <div className="showcase-grid">
              {showcaseItems.map(([title, text], index) => (
                <article className="showcase-card stagger" key={title} style={{ transitionDelay: `${index * 0.08}s` }}>
                  <div className="showcase-number">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="center-heading reveal">
              <div className="section-pill">Our Process</div>
              <h2>Simple, premium, and <em>strategy-first</em>.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map(([number, title, text], index) => (
                <article className="process-card reveal" style={{ transitionDelay: `${index * 0.1}s` }} key={number}>
                  <div className="step-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-bg" />
          <div className="container contact-grid">
            <div className="contact-copy reveal-left">
              <div className="pill dark">Get In Touch</div>
              <h2>Let’s make your business look like it belongs at the <em>top</em>.</h2>
              <p>Tell us about your project and we’ll help you shape a premium digital presence that customers can trust.</p>
              <div className="contact-list">
                <div><strong>WhatsApp</strong><span>+233 50 072 9916</span></div>
                <div><strong>Instagram</strong><span>@ttw.enterprises</span></div>
                <div><strong>Location</strong><span>Accra, Ghana</span></div>
              </div>
              <a className="button light whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Message on WhatsApp</a>
            </div>

            <form className="contact-form glass-dark reveal-right" onSubmit={handleSubmit}>
              <label>Name<input name="name" value={formData.name} onChange={handleChange} required /></label>
              <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
              <label>Business<input name="business" value={formData.business} onChange={handleChange} required /></label>
              <label>Service Needed<select name="service" value={formData.service} onChange={handleChange}>
                <option>Website Design</option><option>Digital Marketing</option><option>Brand Presence</option><option>Growth Strategy</option><option>Multiple Services</option>
              </select></label>
              <label>Project Details<textarea name="message" rows="5" value={formData.message} onChange={handleChange} required /></label>
              <button className="button light full" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Inquiry'}</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand"><img src="/ttw-logo.png" alt="TTW logo" /><span>TTW Enterprises</span></div>
            <p>Premium websites and digital marketing systems for modern brands in Accra, Ghana.</p>
          </div>
          <div><h4>Services</h4><a href="#services">Website Design</a><a href="#services">Digital Marketing</a><a href="#services">Brand Presence</a><a href="#services">Growth Strategy</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#packages">Packages</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
          <div><h4>Contact</h4><span>Accra, Ghana</span><span>+233 50 072 9916</span><span>@ttw.enterprises</span></div>
        </div>
        <div className="container footer-bottom">© 2026 TTW Enterprises. All rights reserved.</div>
      </footer>
    </div>
  );
}
