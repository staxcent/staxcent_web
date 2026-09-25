import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

const links = [
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="logo" href="/" aria-label="Staxcent home">
          <Image src="/long_logo_tr.png" alt="Staxcent logo" width={145} height={32} priority />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}