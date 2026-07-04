import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="hero wrap" style={{ paddingTop: "40px" }}>
        <div className="hero-copy">
          <p className="eyebrow">Digital studio · Karachi</p>
          <h1>
            <span className="line tech">We engineer the</span>
            <span className="line tech">
              tech<span className="soul">, &amp; give it soul.</span>
            </span>
          </h1>
          <p className="sub">
            Next Tech Soul designs and builds websites, apps and brand systems for
            teams who want the polish of a big agency without losing what makes
            them different.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="btn-primary">
              Book a free consult →
            </Link>
            <Link href="/services" className="btn-ghost">
              See what we do
            </Link>
          </div>
        </div>

        <div className="hero-glass glass">
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <img src="/assets/logo.png" alt="Next Tech Soul mark" />
        </div>
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

      {/* FEATURED SERVICES */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">What we build</p>
          <h2>
            One studio, every layer of your <span className="soul">digital presence</span>.
          </h2>
          <p>
            Pick a single service or hand us the whole roadmap — our teams work
            together so nothing gets lost in translation between design, code and
            rankings.
          </p>
        </ScrollReveal>

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
              <p>Custom-coded sites and web apps built for speed, built to scale.</p>
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
              <p>Logos, brand kits and creatives that read as unmistakably yours.</p>
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
              <p>Technical audits and content strategy that move you up the results.</p>
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
              <p>Theme builds, migrations and Elementor / WooCommerce work.</p>
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
              <p>Storefronts and checkout tuning built to convert.</p>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">How a project runs</p>
          <h2>
            Four stages, <span className="soul">start to launch.</span>
          </h2>
          <p>
            The same sequence every time, so you always know what's next and what we
            need from you.
          </p>
        </ScrollReveal>

        <div className="process">
          <ScrollReveal className="step">
            <div className="num">01</div>
            <h3>Discover</h3>
            <p>
              We map goals, audience and competitors before a single pixel is placed.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">02</div>
            <h3>Design</h3>
            <p>
              Wireframes and visual direction, reviewed with you until it feels
              right.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">03</div>
            <h3>Build</h3>
            <p>
              Development and QA in parallel, with staging links to watch it take
              shape.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">04</div>
            <h3>Launch</h3>
            <p>
              Go live, then a support window to tune performance post-launch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="wrap">
        <ScrollReveal className="cta-banner glass">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ready when you are
          </p>
          <h2>
            Let's build something with <span className="soul">soul.</span>
          </h2>
          <p>Tell us about your project and we'll come back with a clear plan and quote.</p>
          <Link href="/contact" className="btn-primary">
            Start a project →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
