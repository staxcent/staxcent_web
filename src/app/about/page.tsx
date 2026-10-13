import type { Metadata } from "next";
import SiteFooter from "@/src/components/site-footer";
import SiteHeader from "@/src/components/site-header";
import { AboutBand, CTA, Process, Technology } from "@/src/components/home-sections";

export const metadata: Metadata = { title: "About", description: "Learn how Staxcent approaches product design and software engineering." };

export default function AboutPage() { return <><SiteHeader /><main id="main"><section className="page-hero"><div className="container"><span className="eyebrow">About Staxcent</span><h1>Good software is a team sport.</h1><p>We work at the intersection of product thinking, design, and engineering to create digital tools people can rely on.</p></div></section><AboutBand /><Process /><Technology /><CTA /></main><SiteFooter /></>; }