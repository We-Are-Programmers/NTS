import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata = {
  title: "Services — Next Tech Soul",
  description:
    "Web development, graphic design, SEO, app development, WordPress and Shopify — everything Next Tech Soul builds, explained.",
};

export default function Services() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero wrap">
        <ScrollReveal>
          <p className="eyebrow">What we do</p>
          <h1>
            <span className="tech">Six services.</span>{" "}
            <span className="soul">One accountable team.</span>
          </h1>
          <p className="sub">
            Every service below is delivered by the same core team, so your site,
            your brand and your rankings are always working from the same playbook.
          </p>
        </ScrollReveal>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Web Development</span>
          <span>Graphic Design</span>
          <span>SEO</span>
          <span>App Development</span>
          <span>WordPress</span>
          <span>Shopify</span>
          <span>Web Development</span>
          <span>Graphic Design</span>
          <span>SEO</span>
          <span>App Development</span>
          <span>WordPress</span>
          <span>Shopify</span>
        </div>
      </div>

      {/* SERVICES DETAIL */}
      <section className="wrap">
        <div className="services-grid">
          <ScrollReveal>
            <TiltCard>
              <span className="tag">01</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 6v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6M4 6l1-2h14l1 2M9 21v-6h6v6" />
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>Custom-coded sites and web apps built for speed and built to scale.</p>
              <ul className="includes">
                <li>Marketing &amp; business sites</li>
                <li>Custom web applications</li>
                <li>Speed &amp; performance tuning</li>
                <li>Ongoing maintenance plans</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">02</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 16l4.5-6 3.5 4 3-3.5L20 16M4 4h16v16H4z" />
                </svg>
              </div>
              <h3>Graphic Design</h3>
              <p>Visual identity that reads as unmistakably yours, not a template.</p>
              <ul className="includes">
                <li>Logo &amp; brand identity</li>
                <li>Social media creatives</li>
                <li>Print &amp; packaging design</li>
                <li>Pitch decks &amp; brand guidelines</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">03</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3>SEO</h3>
              <p>Technical and content work that moves you up the results page.</p>
              <ul className="includes">
                <li>Technical SEO audits</li>
                <li>On-page &amp; content strategy</li>
                <li>Local &amp; e-commerce SEO</li>
                <li>Monthly rank &amp; traffic reports</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">04</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </div>
              <h3>App Development</h3>
              <p>Native and cross-platform apps, wireframe to app-store listing.</p>
              <ul className="includes">
                <li>iOS &amp; Android apps</li>
                <li>Cross-platform (React Native)</li>
                <li>App Store / Play Store launch</li>
                <li>Post-launch support</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">05</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
                </svg>
              </div>
              <h3>WordPress</h3>
              <p>Theme builds, migrations and WooCommerce work, done cleanly.</p>
              <ul className="includes">
                <li>Custom theme &amp; Elementor builds</li>
                <li>Hosting migration &amp; setup</li>
                <li>WooCommerce stores</li>
                <li>Plugin &amp; version troubleshooting</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">06</span>
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2l1.5 4h9L18 2M3 7h18l-1.5 13a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2L3 7z" />
                </svg>
              </div>
              <h3>Shopify</h3>
              <p>Storefronts and checkout tuning built to convert visitors.</p>
              <ul className="includes">
                <li>Custom storefront design</li>
                <li>Product &amp; catalog migration</li>
                <li>Checkout &amp; conversion tuning</li>
                <li>App &amp; integration setup</li>
              </ul>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS RECAP */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>
            Same process, <span className="soul">every service.</span>
          </h2>
        </ScrollReveal>
        <div className="process">
          <ScrollReveal className="step">
            <div className="num">01</div>
            <h3>Discover</h3>
            <p>Goals, audience and scope, agreed before we start.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">02</div>
            <h3>Design</h3>
            <p>Direction and structure, reviewed together.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">03</div>
            <h3>Build</h3>
            <p>Development with staging links to track progress.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">04</div>
            <h3>Launch</h3>
            <p>Go live, then a window of post-launch support.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <ScrollReveal className="cta-banner glass">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Not sure where to start?
          </p>
          <h2>
            Tell us the problem, <span className="soul">not the service.</span>
          </h2>
          <p>We'll help you figure out which service actually solves it.</p>
          <Link href="/contact" className="btn-primary">
            Talk to the team →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
