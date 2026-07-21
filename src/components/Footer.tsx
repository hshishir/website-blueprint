import { siteConfig } from "../../config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-shell flex flex-col gap-4 text-sm text-[#9a9a9a] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
        <p>{siteConfig.location} · <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      </div>
    </footer>
  );
}
