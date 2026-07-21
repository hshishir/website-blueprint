import { siteConfig } from "../../config/site";

export function Footer() {
  const socialLinks = Object.entries(siteConfig.social).filter(([, href]) => href);
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="container-shell grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#" className="focus-ring inline-flex items-center gap-2 font-semibold tracking-tight text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ff00] text-xs text-black">●</span>
            {siteConfig.shortName}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#9a9a9a]">{siteConfig.description}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</p>
          <ul className="mt-4 grid gap-3">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="focus-ring text-sm text-[#9a9a9a] hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
          <ul className="mt-4 grid gap-3 text-sm text-[#9a9a9a]">
            <li><a className="focus-ring hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.location}</li>
            {socialLinks.map(([key, href]) => (
              <li key={key}><a className="focus-ring capitalize hover:text-white" href={href}>{key}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-[#9a9a9a]">
        <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
