import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About — Next Tech Soul",
  description:
    "Meet Next Tech Soul — a Karachi-based digital studio building web, app and brand work with technical precision and creative soul.",
};

export default function About() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero wrap">
        <ScrollReveal>
          <p className="eyebrow">About the studio</p>
          <h1>
            <span className="tech">Built by people who</span>{" "} 
            <span className="soul">still write the code.</span>
          </h1>
          <p className="sub">
            Next Tech Soul started as a small team of developers and designers who believe great ideas deserve fast, clean, and thoughtful execution. We focus on keeping things simple, efficient, and purposeful  without unnecessary complexity.
          </p>
        </ScrollReveal>
      </section>

      {/* STORY / ABOUT GRID */}
      <section className="wrap">
        <div className="about-grid">
          <ScrollReveal>
            <p className="eyebrow">Our story</p>
            <h2
              style={{
                marginTop: "16px",
                fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
              }}
            >
              Technology built the structure <span className="soul">Soul made it meaningful.</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: "18px" }}>
              Next Tech Soul is a full-stack digital studio  web development, app
              development, graphic design and SEO under one roof. We work with
              founders, small teams and growing brands who need a partner that can
              move fast without cutting corners.
            </p>
            <p style={{ color: "var(--muted)", marginTop: "16px" }}>
              Every project passes through the same hands from kickoff to launch, so
              nothing gets diluted between the pitch and the final product.
            </p>

            <div className="value-list">
              <div className="value-item">
                <span className="dot"></span>
                <div>
                  <h3>Craft over templates</h3>
                  <p>Every build starts from your content and goals, not a recycled layout.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="dot"></span>
                <div>
                  <h3>Clear Communication</h3>
                  <p>Clear timelines, honest estimates, and no disappearing after the invoice.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="dot"></span>
                <div>
                  <h3>Built to be maintained</h3>
                  <p>Clean code and documented back-ends, so you're never locked to one developer.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about-media glass">
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <img src="/assets/logo-large.png" alt="Next Tech Soul mark" />
          </ScrollReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="wrap">
        <div className="stats-grid">
          <ScrollReveal className="stat glass">
            <div className="figure">40+</div>
            <div className="label">Successfully Delivered Projects</div>
          </ScrollReveal>
          <ScrollReveal className="stat glass">
            <div className="figure">6</div>
            <div className="label">Core services</div>
          </ScrollReveal>
          <ScrollReveal className="stat glass">
            <div className="figure">24h</div>
            <div className="label">Avg. response time</div>
          </ScrollReveal>
          <ScrollReveal className="stat glass">
            <div className="figure">100%</div>
            <div className="label">Remote friendly</div>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">Our Journey</p>
          <h2>
            A studio built one project at a time, <span className="soul">with purpose and precision.</span>
          </h2>
        </ScrollReveal>
        <div className="timeline">
          <ScrollReveal className="tl-item">
            <div className="dot">01</div>
            <div>
              <h3>Freelance roots</h3>
              <p>
                Started taking on web development and design projects independently,
                one client relationship at a time.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="tl-item">
            <div className="dot">02</div>
            <div>
              <h3>Forming the studio</h3>
              <p>
                Brought design, development and SEO together as Next Tech Soul, so
                clients get one accountable team instead of three vendors.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="tl-item">
            <div className="dot">03</div>
            <div>
              <h3>E-commerce &amp; apps</h3>
              <p>
                Expanded into Shopify, WooCommerce and app development as client
                needs grew beyond marketing sites.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="tl-item">
            <div className="dot">04</div>
            <div>
              <h3>Today</h3>
              <p>
                A small, senior team taking on a deliberately limited number of
                projects at a time  so quality never slips.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <ScrollReveal className="cta-banner glass">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Work with us
          </p>
          <h2>
            Have a project in <span className="soul">mind ?</span>
          </h2>
          <p>Let’s discuss your idea and how we can turn it into a powerful digital product.</p>
          <Link href="/contact" className="btn-primary">
            Get in touch →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
