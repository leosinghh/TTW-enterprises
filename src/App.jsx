import React, { useEffect, useState } from 'react';

const whatsappUrl = 'https://wa.me/233500729916?text=Hi%20TTW%20Enterprises%2C%20I%20want%20a%20custom%20quote%20for%20my%20business.';

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

const quoteOptions = [
  {
    name: 'Website Builds',
    description: 'Landing pages, full business websites, service pages, mobile responsive design, basic SEO, and launch support.',
    features: ['Custom page structure', 'Mobile-first design', 'WhatsApp-ready contact flow', 'Launch and refinement'],
  },
  {
    name: 'Brand Presence',
    description: 'Visual direction, messaging, layout style, and digital presentation for businesses that need to look more established.',
    features: ['Brand positioning', 'Design direction', 'Copy and messaging', 'Premium customer perception'],
    featured: true,
  },
  {
    name: 'Monthly Digital Support',
    description: 'Ongoing support for brands that need edits, campaign planning, social media direction, and digital growth structure.',
    features: ['Website maintenance', 'Content direction', 'Analytics review', 'Growth planning'],
  },
];

const processSteps = [
  ['01', 'Message us on WhatsApp', 'Tell us your business name, what you do, and what you want your digital presence to improve.'],
  ['02', 'Scope the project', 'We define the pages, services, brand direction, timeline, and level of support needed.'],
  ['03', 'Custom quote', 'You receive pricing based on your exact project instead of a fixed one-size-fits-all package.'],
  ['04', 'Design and launch', 'We build, refine, launch, and support the digital presence so the brand looks serious.'],
];

const showcaseItems = [
  {
    title: 'Wonders Studio',
    label: 'Client Website',
    text: 'A clean digital presence for a modern barber studio, built to make the business easier to discover and contact.',
    href: 'https://wondersstudio.vercel.app',
  },
  {
    title: 'Website Design Systems',
    label: 'Service Direction',
    text: 'Clean digital storefronts for brands that need trust before the first conversation.',
    href: '#contact',
  },
  {
    title: 'Brand Presence Builds',
    label: 'Creative Direction',
    text: 'Visual direction, messaging, and structure that make businesses feel established.',
    href: '#contact',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Custom Quote</a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['about', 'services', 'work', 'process', 'contact'].map((item) => (
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
                <a className="button light" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Custom Quote →</a>
                <a className="button outline-light" href="#work">View Client Work</a>
              </div>
              <div className="mini-stats reveal" style={{ transitionDelay: '0.4s' }}>
                <div><strong>Custom</strong><span>Every quote is based on the actual scope of your business.</span></div>
                <div><strong>Direct</strong><span>Start the conversation quickly through WhatsApp.</span></div>
                <div><strong>Accra</strong><span>Built for modern Ghanaian businesses.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="marquee-track">
            {['Website Design', 'Digital Marketing', 'Brand Presence', 'Growth Strategy', 'Custom Quotes', 'WhatsApp First', 'Website Design', 'Digital Marketing', 'Brand Presence', 'Growth Strategy'].map((item, index) => (
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
                  <a href="#contact">Ask about this →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            <div className="reveal"><strong>No Menu</strong><span>Pricing is customized</span></div>
            <div className="reveal"><strong>Scope</strong><span>Quote based on needs</span></div>
            <div className="reveal"><strong>Fast</strong><span>WhatsApp consultation</span></div>
            <div className="reveal"><strong>Premium</strong><span>Design direction</span></div>
          </div>
        </section>

        <section className="section" id="quote">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="section-pill">Custom Quotes</div>
                <h2>Services are shaped around your <em>actual</em> business.</h2>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Get a custom quote →</a>
            </div>
            <div className="quote-grid">
              {quoteOptions.map((item, index) => (
                <article className={`quote-card stagger ${item.featured ? 'featured' : ''}`} style={{ transitionDelay: `${index * 0.08}s` }} key={item.name}>
                  {item.featured && <div className="badge">Popular Scope</div>}
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">Discuss this on WhatsApp →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="work">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="section-pill">Client Work</div>
                <h2>Real work and directions TTW can build for your <em>brand</em>.</h2>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Start yours →</a>
            </div>
            <div className="showcase-grid">
              {showcaseItems.map((item, index) => (
                <article className="showcase-card portfolio-card stagger" key={item.title} style={{ transitionDelay: `${index * 0.08}s` }}>
                  <span className="work-label">{item.label}</span>
                  <div className="showcase-number">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="work-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.href.startsWith('http') ? 'View live project →' : 'Start a similar project →'}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="center-heading reveal">
              <div className="section-pill">Our Process</div>
              <h2>Simple, premium, and <em>WhatsApp-first</em>.</h2>
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
              <p>Instead of fixed pricing or a long form, send us a quick WhatsApp message. We’ll recommend the right direction and quote based on your exact scope.</p>
              <div className="contact-list">
                <div><strong>WhatsApp</strong><span>+233 50 072 9916</span></div>
                <div><strong>Instagram</strong><span>@ttw.enterprises</span></div>
                <div><strong>Location</strong><span>Accra, Ghana</span></div>
              </div>
            </div>

            <div className="whatsapp-panel glass-dark reveal-right">
              <div className="section-pill">How To Inquire</div>
              <h3>Send these details on WhatsApp</h3>
              <div className="prompt-list">
                <span>Your business name</span>
                <span>What your business does</span>
                <span>The service you need</span>
                <span>Your preferred timeline</span>
                <span>Any examples or style you like</span>
              </div>
              <p>We’ll use that to suggest the best website, branding, or digital marketing direction and send a custom quote.</p>
              <a className="button light full" href={whatsappUrl} target="_blank" rel="noreferrer">Get a Custom Quote on WhatsApp</a>
            </div>
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
          <div><h4>Company</h4><a href="#about">About</a><a href="#work">Client Work</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
          <div><h4>Contact</h4><span>Accra, Ghana</span><span>+233 50 072 9916</span><span>@ttw.enterprises</span></div>
        </div>
        <div className="container footer-bottom">© 2026 TTW Enterprises. All rights reserved.</div>
      </footer>
    </div>
  );
}
