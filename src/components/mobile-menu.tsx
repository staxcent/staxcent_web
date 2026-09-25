"use client";

import Link from "next/link";
import { useState } from "react";

type MobileMenuProps = { links: string[][] };

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && <nav id="mobile-nav" className="mobile-menu" aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></Link>
      </nav>}
    </>
  );
}