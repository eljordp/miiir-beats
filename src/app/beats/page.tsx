import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import BeatCatalog from "@/components/BeatCatalog";
import InstrumentalSamples from "@/components/InstrumentalSamples";
export const metadata: Metadata = { title: "Beats", description: "Find your next Miiir beat. $70 single leases, $60 each for two or more.", alternates: {canonical:"/beats"} };
export default function BeatsPage() {
  return <><PageIntro number="01" eyebrow="THE CATALOG" title="Find your sound" description="Bay Area bounce. Dark melodies. Something to write to. Pick your beats and build a lease request." /><InstrumentalSamples /><BeatCatalog /></>;
}
