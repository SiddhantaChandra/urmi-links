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

export default function Home() {
  return (
    <div className="links-page">
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
            <h1>Urmi</h1>
            <span className="seal" lang="ja" aria-label="Sea">海</span>
          </div>
          <p className="bio">Anime · Manga · Pop Culture</p>
          <a className="handle" href="https://www.instagram.com/uwummie" target="_blank" rel="noopener noreferrer">@uwummie</a>
        </div>
        <nav className="link-list" aria-label="Urmi’s links">
          {links.map(({ label, href, icon: Icon }) => (
            <LinkCard key={href} label={label} href={href} featured={label === "Media Kit"} icon={<Icon aria-hidden="true" />} />
          ))}
        </nav>
      </main>
    </div>
  );
}
