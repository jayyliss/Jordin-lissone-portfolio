import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-divider">
      <div className="max-w-content mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-base font-semibold text-foreground tracking-tight">
          {SITE_CONFIG.name}
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-secondary hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
