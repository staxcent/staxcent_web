import type { Metadata } from "next";
import SiteFooter from "@/src/components/site-footer";
import SiteHeader from "@/src/components/site-header";
import { CTA, Services } from "@/src/components/home-sections";

export const metadata: Metadata = { title: "Services", description: "Product design and software development services from Staxcent." };

export default function ServicesPage() { return <><SiteHeader /><main><section className="page-hero"><div className="container"><span className="eyebrow">Services</span><h1>Build the right thing, the right way.</h1><p>From a focused website to a complex business platform, we bring design and engineering together around the work that matters.</p></div></section><Services /><CTA /></main><SiteFooter /></>; }