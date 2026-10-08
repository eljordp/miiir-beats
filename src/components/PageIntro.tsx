import Reveal from "@/components/Reveal";

export default function PageIntro({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description: string }) {
  return <section className="page-intro shell"><Reveal><p className="eyebrow"><span className="live-dot" />{number} / {eyebrow}</p><h1 className="display-title">{title}<span>.</span></h1><p className="intro-description">{description}</p></Reveal></section>;
}
