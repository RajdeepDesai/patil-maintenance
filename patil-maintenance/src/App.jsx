
import { useState } from "react";
import "./App.css";

const phone1 = "9021426286";
const phone2 = "9923358721";

const gardenImage =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85";
const poolImage =
  "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=85";
const outdoorImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85";

function ImageWithFallback({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="image-fallback">{fallback || alt}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Patil Maintenance home">
      <svg className="logo-mark" viewBox="0 0 54 54" aria-hidden="true">
        <path
          d="M27 3C20 15 7 25 10 36C12 45 22 49 27 49C32 49 42 45 44 36C47 25 34 15 27 3Z"
          fill="#477B51"
        />
        <path
          d="M27 43C26 30 29 19 35 12"
          fill="none"
          stroke="#F8F6ED"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M27 29C18 29 16 22 16 18C24 18 28 23 27 29Z" fill="#F8F6ED" />
        <path d="M28 35C37 35 40 29 40 25C32 25 28 29 28 35Z" fill="#D5E5C9" />
        <path
          d="M9 43C17 47 37 47 45 43"
          fill="none"
          stroke="#7CA6CF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-copy">
        <strong>PATIL</strong>
        <small>MAINTENANCE</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const services = [
    {
      number: "01",
      title: "Garden Maintenance",
      description:
        "Keep your outdoor spaces neat, green and welcoming with garden maintenance tailored to your needs.",
      features: [
        "Garden upkeep",
        "Lawn and plant care",
        "Outdoor space maintenance",
      ],
      image: gardenImage,
      icon: "✳",
    },
    {
      number: "02",
      title: "Swimming Pool Maintenance",
      description:
        "Keep your swimming pool looking clean and inviting with regular maintenance and care.",
      features: [
        "Pool cleaning",
        "Regular pool upkeep",
        "Clean, inviting water",
      ],
      image: poolImage,
      icon: "≈",
    },
  ];

  const faqs = [
    {
      question: "Which areas do you serve?",
      answer:
        "Patil Maintenance serves customers in North Goa. Contact us to discuss your location and maintenance requirements.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We focus on garden maintenance and swimming pool maintenance.",
    },
    {
      question: "How can I enquire about your services?",
      answer:
        "Call either of our listed contact numbers or use WhatsApp to discuss your maintenance requirements.",
    },
  ];

  function enquiryUrl(service = "") {
    const message = `Hello Patil Maintenance, I would like to enquire about ${
      service || "your maintenance services"
    }.`;

    return `https://wa.me/91${phone1}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="site-shell" id="home">
      <div className="top-strip">
        <span>GARDEN &amp; POOL CARE</span>
        <span>Serving North Goa, India</span>
      </div>

      <header className="navbar">
        <Logo />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Get in touch <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-backdrop" />

          <div className="hero-copy">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              NORTH GOA · OUTDOOR CARE
            </div>

            <h1>
              Beautiful spaces.
              <br />
              <em>Consistent care.</em>
            </h1>

            <p>
              Thoughtful garden and swimming pool maintenance to help keep
              your outdoor spaces fresh, clean and inviting.
            </p>

            <div className="hero-buttons">
              <a className="button button-light" href="#services">
                Discover our services <span>↗</span>
              </a>
              <a className="button button-outline" href="#contact">
                Contact us
              </a>
            </div>

            <div className="hero-points">
              <span><b>✳</b> Garden care</span>
              <span><b>≈</b> Pool care</span>
              <span><b>⌖</b> North Goa</span>
            </div>
          </div>

          <div className="hero-caption">
            <span>YOUR OUTDOOR SPACE</span>
            <strong>Our priority.</strong>
          </div>

          <a className="scroll-cue" href="#services" aria-label="Scroll to services">
            ↓
          </a>
        </section>

        <section className="welcome section-wrap" id="about">
          <div className="section-kicker">
            <span>01</span> A LITTLE ABOUT US
          </div>

          <div className="welcome-content">
            <h2>
              A little care goes
              <br />
              <em>a long way.</em>
            </h2>

            <div className="welcome-description">
              <p>
                Patil Maintenance provides garden and swimming pool
                maintenance in North Goa. We help customers care for their
                outdoor spaces with practical maintenance services suited
                to their needs.
              </p>
              <a className="underlined-link" href="#contact">
                Talk to us about your space <span>↗</span>
              </a>
            </div>
          </div>

          <div className="welcome-bottom">
            <span>GREEN SPACES</span>
            <span className="welcome-star">✳</span>
            <span>BLUE WATERS</span>
            <span className="welcome-star">✳</span>
            <span>THOUGHTFUL MAINTENANCE</span>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <span>02</span> WHAT WE DO
                </div>
                <h2>
                  Care for every <em>corner.</em>
                </h2>
              </div>

              <p>
                Two focused services to help keep your garden and swimming
                pool looking their best.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-photo">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      fallback={service.title}
                    />
                    <span className="photo-number">{service.number}</span>
                    <span className="photo-icon">{service.icon}</span>
                  </div>

                  <div className="service-content">
                    <div className="service-label">
                      PATIL MAINTENANCE <span>·</span> NORTH GOA
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <ul className="feature-list">
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <span>✓</span> {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      className="service-link"
                      href={enquiryUrl(service.title.toLowerCase())}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire about this service <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band">
          <div className="feature-band-image">
            <ImageWithFallback
              src={outdoorImage}
              alt="Outdoor living space inspiration"
              fallback="Outdoor living inspiration"
            />
          </div>

          <div className="feature-band-content">
            <div className="section-kicker light-eyebrow">
              <span>03</span> THE PATIL APPROACH
            </div>

            <h2>
              Care for your space.
              <br />
              <em>Peace of mind for you.</em>
            </h2>

            <p>
              Every outdoor space is different. Tell us what you need, and
              we can discuss a maintenance approach that suits your property.
            </p>

            <a className="button button-light" href="#contact">
              Discuss your requirements <span>↗</span>
            </a>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="gallery">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>04</span> A FEEL FOR THE FINISH
              </div>
              <h2>
                Inspired by <em>nature.</em>
              </h2>
            </div>

            <p>
              Garden and pool inspiration for fresh, welcoming outdoor spaces.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item gallery-large">
              <ImageWithFallback
                src={outdoorImage}
                alt="Outdoor living space inspiration"
                fallback="Outdoor living spaces"
              />
              <figcaption>Spaces to unwind</figcaption>
            </figure>

            <figure className="gallery-item">
              <ImageWithFallback
                src={gardenImage}
                alt="Lush green garden"
                fallback="Lush green garden"
              />
              <figcaption>Garden inspiration</figcaption>
            </figure>

            <figure className="gallery-item">
              <ImageWithFallback
                src={poolImage}
                alt="Swimming pool"
                fallback="Swimming pool inspiration"
              />
              <figcaption>Poolside calm</figcaption>
            </figure>
          </div>

          <p className="gallery-note">
            Illustrative photos only; these are not confirmed photos of
            completed Patil Maintenance projects.
          </p>
        </section>

        <section className="faq-section">
          <div className="section-wrap faq-layout">
            <div>
              <div className="section-kicker">
                <span>05</span> GOOD TO KNOW
              </div>
              <h2>
                Questions, <em>answered.</em>
              </h2>
              <p className="faq-intro">
                A few quick details about our maintenance services.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    onClick={() =>
                      setFaqOpen(faqOpen === index ? -1 : index)
                    }
                    aria-expanded={faqOpen === index}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-symbol">
                      {faqOpen === index ? "−" : "+"}
                    </span>
                  </button>

                  {faqOpen === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb contact-orb-one" />
          <div className="contact-orb contact-orb-two" />

          <div className="contact-inner">
            <div className="section-kicker light-eyebrow">
              <span>06</span> START A CONVERSATION
            </div>

            <h2>
              Let's make your
              <br />
              outdoor space <em>shine.</em>
            </h2>

            <p>
              Need garden or swimming pool maintenance in North Goa?
              Get in touch with Patil Maintenance.
            </p>

            <div className="contact-actions">
              <a className="button button-light" href={`tel:+91${phone1}`}>
                Call {phone1} <span>↗</span>
              </a>

              <a
                className="button button-whatsapp"
                href={enquiryUrl()}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us <span>↗</span>
              </a>
            </div>

            <div className="contact-secondary">
              <span>Prefer the other number?</span>
              <a href={`tel:+91${phone2}`}>Call {phone2}</a>
              <span className="contact-divider">·</span>
              <a
                href={`https://wa.me/91${phone2}?text=${encodeURIComponent(
                  "Hello Patil Maintenance, I would like to enquire about your services."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {phone2}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Garden and swimming pool maintenance in North Goa.</p>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About us</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-column">
            <strong>Get in touch</strong>
            <a href={`tel:+91${phone1}`}>{phone1}</a>
            <a href={`tel:+91${phone2}`}>{phone2}</a>
            <a href="#contact">North Goa, India</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Patil Maintenance</span>
          <span>Garden &amp; Pool Maintenance</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={enquiryUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Patil Maintenance on WhatsApp"
      >
        <span>◉</span> WhatsApp
      </a>
    </div>
  );
}

export default App;
