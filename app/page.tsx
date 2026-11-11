import Image from "next/image";
import { BookOpen } from "pixelarticons/react/BookOpen.js";
import { Briefcase } from "pixelarticons/react/Briefcase.js";
import { Mail } from "pixelarticons/react/Mail.js";
import { Instagram } from "pixelarticons/react/Instagram.js";
import { Youtube } from "pixelarticons/react/Youtube.js";
import portrait from "@/public/images/profile.webp";
import LinkCard from "@/components/LinkCard";
import ShareTools from "@/components/ShareTools";

const links = [
  { label: "Media Kit", href: "https://www.urmichakraborty.com", icon: Briefcase },
  { label: "Instagram", href: "https://www.instagram.com/uwummie", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@uwummie", icon: Youtube },
  { label: "Latest Articles", href: "https://muckrack.com/urmi-chakraborty-1", icon: BookOpen },
  { label: "Get in Touch", href: "mailto:uwummie@gmail.com", icon: Mail },
];

const siteUrl = "https://links.urmichakraborty.com/";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: "Urmi Chakraborty (@uwummie) | Official Links & Media Kit",
      mainEntity: { "@id": `${siteUrl}#person` },
      hasPart: { "@id": `${siteUrl}#links` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Urmi Chakraborty",
      alternateName: ["Urmi", "uwummie"],
      url: siteUrl,
      image: `${siteUrl}images/profile.webp`,
      jobTitle: "Content Creator & Pop Culture Writer",
      description: "Anime reviews, manga recommendations, and Japanese pop culture content.",
      sameAs: links.filter(({ href }) => href.startsWith("https://")).map(({ href }) => href),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}#links`,
      name: "Urmi’s links",
      itemListElement: links.map(({ label, href }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: label,
        url: href,
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="links-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ShareTools />
      <main className="links-sheet">
        <div className="profile">
          <Image
            src={portrait}
            alt="Urmi standing among greenery"
            className="profile-photo"
            width={128}
            height={128}
            sizes="(max-height: 650px) 88px, 128px"
            preload
          />
          <div className="name-line">
            <h1>Urmi<span className="sr-only"> Chakraborty</span></h1>
            <span className="seal" lang="ja" aria-label="Sea">海</span>
          </div>
          <p className="profile-tagline">Stories, fandoms &amp; everything in between.</p>
          <p className="bio">Anime · Manga · Pop Culture</p>
          <a className="handle" href="https://www.instagram.com/uwummie" target="_blank" rel="me noopener noreferrer">@uwummie<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <nav className="link-list" aria-label="Urmi’s links">
          {links.map(({ label, href, icon: Icon }) => (
            <LinkCard key={href} label={label} href={href} ownedProfile={href.startsWith("https://")} featured={label === "Media Kit"} icon={<Icon aria-hidden="true" />} />
          ))}
        </nav>
      </main>
    </div>
  );
}
