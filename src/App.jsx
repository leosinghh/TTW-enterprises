import React, { useEffect, useState } from 'react';

const fallbackPackages = [
  {
    name: 'Starter Presence',
    price: 'From GHS 4,000',
    monthly: 'GHS 1,200 / month',
    description: 'A polished first website for businesses that need a premium online presence.',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      'Monthly edits and maintenance',
      'Performance checks',
    ],
  },
  {
    name: 'Growth Package',
    price: 'From GHS 7,000',
    monthly: 'GHS 3,000 / month',
    description: 'For brands ready for web design plus digital marketing support.',
    features: [
      'Expanded custom website',
      'Brand messaging support',
      'Social media direction',
      'Monthly analytics report',
      'Content and campaign planning',
    ],
    featured: true,
  },
  {
    name: 'Custom Luxury Build',
    price: 'Custom quote',
    monthly: 'Tailored support plan',
    description: 'A high-touch build for businesses that want a fully bespoke digital presence.',
    features: [
      'Custom design system',
      'Advanced conversion flow',
      'Brand strategy',
      'Campaign consulting',
      'Priority support',
    ],
  },
];

const serviceCards = [
  {
    title: 'Website Design',
    text: 'Premium-looking websites built to make brands feel trusted, sharp, and high-value.',
  },
  {
    title: 'Digital Marketing',
    text: 'Content direction, positioning, and campaign thinking designed to turn attention into action.',
  },
  {
    title: 'Brand Presence',
    text: 'A polished visual and verbal identity that makes a business feel established from day one.',
  },
  {
    title: 'Growth Strategy',
    text: 'Clear digital structure and analytics support so your brand can scale with intention.',
  },
];

export default function App() {
  const [packages, setPackages] = useState(fallbackPackages);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
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
        if (Array.isArray(data) && data.length > 0) {
          setPackages(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadPackages();
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

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('Your project inquiry was sent successfully.');
      setFormData({
        name: '',
        email: '',
        business: '',
        service: 'Website Design',
        message: '',
      });
    } catch (error) {
      setStatus(error.message || 'There was a problem sending your inquiry.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <a className="brand" href="#home">
            <img src="/ttw-logo.png" alt="TTW logo" />
            <div>
              <span>TTW</span>
              <small>To The Wiase</small>
            </div>
          </a>

          <nav>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Premium websites and digital growth</p>
              <h1>Build a digital presence that looks expensive and performs like it means business.</h1>
              <p className="hero-copy">
                TTW Enterprises creates sleek websites and digital marketing systems for modern brands that want to look premium, move professionally, and grow with intention.
              </p>

              <div className="hero-actions">
                <a className="button gold" href="#contact">Start a Project</a>
                <a className="button ghost" href="#packages">View Packages</a>
              </div>

              <div className="highlights">
                <article>
                  <h3>Premium-first design</h3>
                  <p>Luxury visuals without making the experience feel bloated.</p>
                </article>
                <article>
                  <h3>Strategy-led builds</h3>
                  <p>Every page is designed to create clarity, trust, and action.</p>
                </article>
                <article>
                  <h3>Ongoing support</h3>
                  <p>Maintenance and digital guidance that keep your momentum moving.</p>
                </article>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="hero-card">
                <img src="/ttw-logo.png" alt="TTW Enterprises" className="hero-logo" />
                <p className="eyebrow center">To The Wiase</p>
                <h2>Luxury web presence for modern brands</h2>
                <p>
                  Clean execution. Strong messaging. Premium visual identity. Designed for brands that want to look serious before they even speak.
                </p>
                <div className="stat-grid">
                  <div>
                    <strong>24/7</strong>
                    <span>Your site keeps your business visible around the clock.</span>
                  </div>
                  <div>
                    <strong>Elite</strong>
                    <span>Designed to elevate how customers perceive your brand.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Services</p>
                <h2>What TTW helps brands do</h2>
              </div>
              <p>
                We create a premium digital front that makes businesses feel current, established, and worth paying attention to.
              </p>
            </div>

            <div className="card-grid four">
              {serviceCards.map((service) => (
                <article className="glass-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="centered-heading">
              <p className="eyebrow">Packages</p>
              <h2>Pricing built for different growth stages</h2>
            </div>

            <div className="card-grid three">
              {packages.map((item) => (
                <article className={`package-card ${item.featured ? 'featured' : ''}`} key={item.name}>
                  {item.featured && <div className="badge">Most Popular</div>}
                  <h3>{item.name}</h3>
                  <div className="price">{item.price}</div>
                  <p className="monthly">{item.monthly}</p>
                  <p className="description">{item.description}</p>
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container process-block">
            <div>
              <p className="eyebrow">Process</p>
              <h2>Simple, premium, and strategy-first</h2>
              <p>
                TTW keeps the workflow tight so your brand moves quickly without ever looking rushed.
              </p>
            </div>

            <div className="steps">
              {[
                ['01', 'Discovery and positioning', 'We define the offer, audience, and the feel your brand should communicate.'],
                ['02', 'Design and build', 'We create a premium site experience that fits your ambition and business goals.'],
                ['03', 'Launch and refine', 'We go live, support the site, and improve your digital presence over time.'],
              ].map(([number, title, text]) => (
                <article className="step-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-wrap">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s make your business look like it belongs at the top.</h2>
              <div className="contact-list">
                <div>
                  <strong>WhatsApp</strong>
                  <span>+233 050 072 9916</span>
                </div>
                <div>
                  <strong>Instagram</strong>
                  <span>@ttw.enterprises</span>
                </div>
                <div>
                  <strong>Location</strong>
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Business
                <input name="business" value={formData.business} onChange={handleChange} required />
              </label>
              <label>
                Service Needed
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option>Website Design</option>
                  <option>Digital Marketing</option>
                  <option>Brand Presence</option>
                  <option>Growth Strategy</option>
                  <option>Multiple Services</option>
                </select>
              </label>
              <label>
                Project Details
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </label>
              <button className="button gold full" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
