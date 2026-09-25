import SiteFooter from "@/src/components/site-footer";
import SiteHeader from "@/src/components/site-header";
import { AboutBand, CapabilityStrip, CTA, Hero, Process, Services, Technology, WhatWeBuild } from "@/src/components/home-sections";

export default function HomePage() {
  return <><SiteHeader /><main><Hero /><CapabilityStrip /><Services /><WhatWeBuild /><Process /><Technology /><AboutBand /><CTA /></main><SiteFooter /></>;
}
