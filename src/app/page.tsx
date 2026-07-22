import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import Image from "next/image";

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="hero wrap" style={{ paddingTop: "40px" }}>
        <div className="hero-copy">
          <p className="eyebrow">Digital Agency · Karachi</p>
          <h1>
            <span className="line tech">We Engineer the Tech </span>
            <span className="line tech">
            <span className="soul">W&amp; Give It Soul.</span>
            </span>
          </h1>
          <p className="sub">
            Next Tech Soul builds modern websites, powerful web applications, mobile apps, and digital solutions that help businesses grow. We combine innovative technology, creative design, and reliable development to deliver exceptional digital experiences.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="btn-primary">
              Start Your Project →
            </Link>
            <Link href="/services" className="btn-ghost">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="hero-glass glass">
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <Image src="/assets/logo.webp" alt="Next Tech Soul mark" width={500} height={500} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} priority />
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
          <span>Ai Solutons</span>
          <span>Digital Marketing</span>
          <span>Video Editing</span>
        </div>
      </div>

      {/* FEATURED SERVICES */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">What we build</p>
          <h2>
            We build modern digital solutions that help your <span className="soul">business grow online.</span>
          </h2>
          <p>
            From strategy and design to development and digital growth, we provide complete technology solutions that help businesses succeed in the modern digital world.
          </p>
        </ScrollReveal>

        <div className="services-grid">
          <ScrollReveal>
            <TiltCard>
              <span className="tag">01</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                 <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>We build fast, secure, and scalable websites tailored to your business needs using modern technologies.</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">02</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3v4a3 3 0 0 0 2 3v1a3 3 0 0 0 3 3" />
                <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3v4a3 3 0 0 1-2 3v1a3 3 0 0 1-3 3" />
                <path d="M12 8v8" />
                </svg>
              </div>
              <h3>Ai Solutions</h3>
              <p> AI powered solutions that automate workflows, improve efficiency, and enhance user experience using smart technologies.</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">03</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3C7 3 3 6 3 10c0 4 4 7 9 7h1c1.5 0 3 1 3 2.5S15.5 22 14 22c-2 0-3-1-3-3" />
               <circle cx="7.5" cy="10" r="1" />
               <circle cx="12" cy="7" r="1" />
               <circle cx="16.5" cy="10" r="1" />
                </svg>
              </div>
              <h3>Graphic Design</h3>
              <p> Designing logos, brand identities, and marketing materials that make your business stand out.</p>
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
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3>SEO</h3>
              <p>Improving your online visibility through technical SEO, content strategy, and digital marketing solutions.</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">05</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="7" y="2" width="10" height="20" rx="2" />
  <line x1="12" y1="18" x2="12" y2="18" />
</svg>
              </div>
              <h3>App Development</h3>
              <p>Developing high performance Android and iOS applications that deliver seamless user experiences.</p>
            </TiltCard>
          </ScrollReveal>


          <ScrollReveal>
            <TiltCard>
              <span className="tag">06</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="3 17 9 11 13 15 21 7" />
               <polyline points="21 7 21 13" />
              </svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Result driven digital marketing strategies that help businesses grow their online presence, attract customers, and increase revenue.</p>
            </TiltCard>
          </ScrollReveal>


                    <ScrollReveal>
            <TiltCard>
              <span className="tag">07</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                 <path d="M3 10h18" />
                 <path d="M7 5l2 5" />
                 <path d="M11 5l2 5" />
                </svg>
              </div>
              <h3>Video Editing</h3>
              <p>Professional editing services for visuals and content that refine your brand message, improve quality, and create a polished final output.</p>
            </TiltCard>
          </ScrollReveal>


          <ScrollReveal>
            <TiltCard>
              <span className="tag">08</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15 15 0 0 1 0 20" />
                <path d="M12 2a15 15 0 0 0 0 20" />
                </svg>
              </div>
              <h3>WordPress</h3>
              <p>Custom WordPress websites designed for speed, security, and easy management. We build responsive, SEO friendly, and scalable solutions tailored to your business needs.</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">09</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
               <path d="M6 2l-2 6h16l-2-6" />
               <path d="M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
                <path d="M9 12h6" />
                </svg>
              </div>
              <h3>Shopify</h3>
              <p>We build high converting Shopify stores with modern designs, optimized performance, secure payment integration, and seamless shopping experiences to help your online business grow.</p>
            </TiltCard>
          </ScrollReveal>

      


        </div>
      </section>

      {/* PROCESS */}
      <section className="wrap">
        <ScrollReveal className="section-head">
          <p className="eyebrow">How a project runs</p>
          <h2>
            From Idea to Reality <br /> <span className="soul">We’ve Got You Covered.</span>
          </h2>
          <p>
              A simple and transparent workflow from idea to launch, so you always know what’s happening at every step.
          </p>
        </ScrollReveal>

        <div className="process">
          <ScrollReveal className="step">
            <div className="num">01</div>
            <h3>Discover</h3>
            <p>
                We understand your goals, target audience, and competitors to build a strong foundation.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">02</div>
            <h3>Design</h3>
            <p>
                We create wireframes and UI designs that match your vision and brand identity.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">03</div>
            <h3>Build</h3>
            <p>
                We turn designs into a fully functional, fast, and scalable product with clean code.
            </p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">04</div>
            <h3>Launch</h3>
            <p>
              We deploy your project and provide post launch support to ensure everything runs smoothly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="wrap">
        <ScrollReveal className="cta-banner glass ">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ready when you are
          </p>
          <h2>
            Let's build something with <span className="soul">soul.</span>
          </h2>
          <p>Tell us about your project, and we’ll get back to you with a clear plan and a detailed quote.</p>
          <Link href="/contact" className="btn-primary">
            Start a project →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
