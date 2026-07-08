import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div className="foot-brand">
            <img src="/assets/logo.webp" alt="Next Tech Soul" />
            <span className="tech" style={{ fontSize: "14px" }}>
              NEXT TECH <span className="soul" style={{ fontSize: "14px" }}>Soul</span>
            </span>
          </div>
          <ul className="foot-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">© 2026 Next Tech Soul. All rights reserved.</p>
      </div>
    </footer>
  );
}
