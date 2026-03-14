import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-divider py-8 mt-8">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-secondary">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>
        <a
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-secondary hover:text-foreground transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
