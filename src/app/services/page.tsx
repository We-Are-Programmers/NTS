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
            <span className="soul"> One unified team.</span>
          </h1>
          <p className="sub">
            Every service is handled by a single core team, ensuring your website, brand, and growth strategy stay perfectly aligned.
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
          <span>Ai Solutons</span>
          <span>Digital Marketing</span>
          <span>Video Editing</span>
        </div>
      </div>

      {/* SERVICES DETAIL */}
      <section className="wrap">
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
              <p>Fast, scalable, and performance focused websites and web applications built from scratch.</p>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 3C7 3 3 6 3 10c0 4 4 7 9 7h1c1.5 0 3 1 3 2.5S15.5 22 14 22c-2 0-3-1-3-3" />
  <circle cx="7.5" cy="10" r="1" />
  <circle cx="12" cy="7" r="1" />
  <circle cx="16.5" cy="10" r="1" />
</svg>
              </div>
              <h3>Graphic Design</h3>
              <p>Distinctive visual identities that go beyond templates and reflect your brand personality.</p>
              <ul className="includes">
                <li>Logo &amp; brand identity</li>
                <li>Social media creatives</li>
                <li>Print &amp; packaging design</li>
                <li>Pitch decks &amp; brand guidelines</li>
                <li>UI/UX Design for Web & Apps</li>
              </ul>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal>
            <TiltCard>
              <span className="tag">03</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="11" cy="11" r="7" />
  <path d="M21 21l-4.3-4.3" />
</svg>
              </div>
              <h3>SEO</h3>
              <p>Data driven SEO strategies that improve visibility, rankings, and organic traffic.</p>
              <ul className="includes">
                  <li>Technical SEO audits</li>
                  <li>On-page &amp; content strategy</li>
                  <li>Local &amp; e-commerce SEO</li>
                  <li>Monthly rank &amp; traffic reports</li>
                  <li>Website Speed & Performance Optimization</li>
              </ul>
            </TiltCard>
          </ScrollReveal>


        <ScrollReveal>
            <TiltCard>
              <span className="tag">04</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3v4a3 3 0 0 0 2 3v1a3 3 0 0 0 3 3" />
  <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3v4a3 3 0 0 1-2 3v1a3 3 0 0 1-3 3" />
  <path d="M12 8v8" />
</svg>
              </div>
              <h3>AI Solutions</h3>
              <p>AI powered solutions that automate workflows, improve efficiency, and enhance customer experience using modern intelligent technologies.</p>
              <ul className="includes">
                <li>AI Chatbots & Assistants</li>
                <li>Process Automation</li>
                <li>AI Integration for Websites & Apps</li>
                <li>Business Intelligence</li>
              </ul>
            </TiltCard>
          </ScrollReveal>


          <ScrollReveal>
            <TiltCard>
              <span className="tag">05</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="3 17 9 11 13 15 21 7" />
  <polyline points="21 7 21 13" />
</svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Result driven digital marketing strategies that help businesses grow their online presence, attract customers, and increase revenue.</p>
              <ul className="includes">
                <li>Social Media Marketing</li>
                <li>Paid Ads (Google & Meta)</li>
                <li>Content Marketing Strategy</li>
                <li>Brand Awareness Campaigns</li>
                <li>SEO Optimization & Ranking Growth</li>
              </ul>
            </TiltCard>
          </ScrollReveal>


          <ScrollReveal>
            <TiltCard>
              <span className="tag">06</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M3 10h18" />
  <path d="M7 5l2 5" />
  <path d="M11 5l2 5" />
</svg>
              </div>
              <h3>Video Editing </h3>
              <p>Professional editing services for visuals and content that refine your brand message, improve quality, and create a polished final output.</p>
              <ul className="includes">
                <li>Video Editing & Reels</li>
                <li>Cash cow video editing</li>
                <li>Social Media Content Editing</li>
                <li>Brand Promotional Edits</li>
              </ul>
            </TiltCard>
          </ScrollReveal>


          <ScrollReveal>
            <TiltCard>
              <span className="tag">07</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="7" y="2" width="10" height="20" rx="2" />
  <line x1="12" y1="18" x2="12" y2="18" />
</svg>
              </div>
              <h3>App Development</h3>
              <p>High performance mobile applications for iOS and Android with seamless user experience.</p>
              <ul className="includes">
                <li>Android & iOS Development</li>
                <li>React Native</li>
                <li>Cloud & API Integration</li>
                <li>Secure & Scalable Solutions</li>
              </ul>
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
              <p>Clean, scalable WordPress solutions including custom themes and WooCommerce stores.</p>
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
              <span className="tag">09</span>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <path d="M6 2l-2 6h16l-2-6" />
  <path d="M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="M9 12h6" />
</svg>
             </div>
              <h3>Shopify</h3>
              <p>Conversion focused online stores designed to maximize sales and customer experience.</p>
              <ul className="includes">
                <li>Custom storefront design</li>
                <li>Product &amp; catalog migration</li>
                <li>Checkout &amp; conversion tuning</li>
                <li>App &amp; integration setup</li>
                <li>Conversion & Speed Optimization</li>
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
            One process for <span className="soul">every service.</span>
          </h2>
        </ScrollReveal>
        <div className="process">
          <ScrollReveal className="step">
            <div className="num">01</div>
            <h3>Discover</h3>
            <p>We understand your goals, target audience, and competitors to build a strong foundation.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">02</div>
            <h3>Design</h3>
            <p>We create wireframes and UI designs that match your vision and brand identity.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">03</div>
            <h3>Build</h3>
            <p>We turn designs into a fully functional, fast, and scalable product with clean code.</p>
          </ScrollReveal>
          <ScrollReveal className="step">
            <div className="num">04</div>
            <h3>Launch</h3>
            <p>We deploy your project and provide post launch support to ensure everything runs smoothly.</p>
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
            Tell us the problem, <span className="soul">not the solution.</span>
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
