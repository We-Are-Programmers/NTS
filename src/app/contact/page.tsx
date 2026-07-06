import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Next Tech Soul",
  description:
    "Get in touch with Next Tech Soul to start your web, app, design or SEO project.",
};

export default function Contact() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero wrap">
        <ScrollReveal>
          <p className="eyebrow">Get in touch</p>
          <h1>
            <span className="tech">Tell us about</span>{" "}
            <span className="soul">you're project.</span>
          </h1>
          <p className="sub">
            Share a few details and we'll reply with next steps within 24 hours.
          </p>
        </ScrollReveal>
      </section>

      {/* CONTACT GRID */}
      <section className="wrap" style={{ paddingTop: "20px" }}>
        <div className="contact-grid">
          <ScrollReveal className="contact-info">
            <div className="item">
              <div className="label">Email</div>
              <div className="value">hello@nexttechsoul.com</div>
            </div>
            <div className="item">
              <div className="label">Phone / WhatsApp</div>
              <div className="value">+92 3XX XXXXXXX</div>
            </div>
            <div className="item">
              <div className="label">Studio</div>
              <div className="value">Karachi, Pakistan — remote-first</div>
            </div>
            <div className="item">
              <div className="label">Working hours</div>
              <div className="value">Mon – Sat, 10am – 7pm PKT</div>
            </div>
            <div className="item">
              <div className="label">Response time</div>
              <div className="value">Within 24 hours</div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">Before You Reach Out </p>
          <h2>
            A few things people <span className="soul">usually ask.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal className="glass" style={{ padding: "10px 32px" }}>
          <div className="faq-item" style={{ borderTop: "none" }}>
            <h3>How fast can you start?</h3>
            <p>
              Most projects kick off within a week of the quote being approved,
              depending on our current schedule.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you work with clients outside Pakistan?</h3>
            <p>
              Yes — we're remote-first and work across time zones with async
              updates and scheduled calls.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can you take over an existing site?</h3>
            <p>
              Yes, including WordPress/WooCommerce and Shopify stores already
              built by another developer.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer ongoing support after launch?</h3>
            <p>
              Yes — monthly maintenance plans are available for updates, backups
              and small changes.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
