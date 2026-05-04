import { Link } from "@tanstack/react-router";
import zebchaLogo from "@/assets/zebcha-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-forest-deep text-ivory">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="rounded-sm bg-ivory px-3 py-2">
              <img src={zebchaLogo} alt="Zebcha Infrastructure" className="h-9 w-auto" />
            </div>
            <div>
              <div className="font-display text-xl">Zebcha Infrastructure</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/60">
                Building the continent
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/75">
            Delivering large-scale, government-backed infrastructure across Africa through the
            Africa Infrastructure Programme — in partnership with leading European Union project
            finance institutions.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Navigate</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-ochre">About Zebcha</Link></li>
            <li><Link to="/programme" className="hover:text-ochre">The AIP</Link></li>
            <li><Link to="/projects" className="hover:text-ochre">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-ochre">Contact</Link></li>
            <li><a href="https://zebcha-test.lovable.app/login" target="_blank" rel="noopener noreferrer" className="hover:text-ochre">Careers</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">Headquarters</div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ivory/80">
            44 Panama Street, Maitama<br />
            Abuja, Nigeria
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a href="tel:+2348172495115" className="block hover:text-ochre">
              +234 817 249 5115
            </a>
            <a href="mailto:tope@potomakwealth.com" className="block hover:text-ochre">
              tope@potomakwealth.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-editorial flex flex-col items-start justify-between gap-2 py-6 text-xs text-ivory/55 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Zebcha Infrastructure Limited. All rights reserved.</div>
          <div className="font-display italic">Accessing growth opportunities in Africa.</div>
        </div>
      </div>
    </footer>
  );
}
