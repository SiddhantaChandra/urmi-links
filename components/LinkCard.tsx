import type { ReactNode } from "react";
import Image from "next/image";
import blossomBranch from "@/public/images/cherry-blossom-small-crop.webp";
import { ExternalLink } from "pixelarticons/react/ExternalLink.js";

export default function LinkCard({ icon, label, href, featured = false }: { icon: ReactNode; label: string; href: string; featured?: boolean }) {
  const external = href.startsWith("https://");
  return (
    <a className={`link-card${featured ? " link-card-featured" : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      <span className="link-icon">{icon}</span>
      {featured ? (
        <span className="featured-copy">
          <span className="featured-title">Work with me</span>
          <span className="featured-description">{label}</span>
        </span>
      ) : <span>{label}</span>}
      {featured ? (
        <Image src={blossomBranch} alt="" className="featured-branch" sizes="180px" />
      ) : <ExternalLink className="link-arrow" aria-hidden="true" />}
    </a>
  );
}
