import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="logo" href="/"><Image src="/long_logo_tr.png" alt="Staxcent logo" width={145} height={32} priority /></Link>
            <p className="footer-description">Digital products for teams doing meaningful work. Built with care, clarity, and room to grow.</p>
          </div>
          <div><p className="footer-label">Explore</p><nav className="footer-links" aria-label="Footer navigation"><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav></div>
          <div><p className="footer-label">Connect</p><div className="footer-links"><span>hello@staxcent.example</span><span>LinkedIn / placeholder</span><span>Location / placeholder</span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Staxcent. Built for what is next.</span><span>Privacy &nbsp;&nbsp; Terms</span></div>
      </div>
    </footer>
  );
}