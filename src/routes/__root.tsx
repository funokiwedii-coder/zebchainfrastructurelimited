import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ScrollProgress } from "../components/ScrollProgress";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="eyebrow">Error 404</div>
      <h1 className="mt-4 font-display text-7xl text-foreground">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-forest-deep"
      >
        Return home
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zebcha Infrastructure — The Africa Infrastructure Programme" },
      {
        name: "description",
        content:
          "Zebcha delivers large-scale, government-backed infrastructure across Africa with up to $15B in EU-partnered project finance.",
      },
      { name: "author", content: "Zebcha Infrastructure Limited" },
      { property: "og:title", content: "Zebcha Infrastructure — The Africa Infrastructure Programme" },
      {
        property: "og:description",
        content:
          "Funding and executing roads, rail, ports, power and housing across Africa through the Africa Infrastructure Programme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zebcha Infrastructure — The Africa Infrastructure Programme" },
      { name: "description", content: "Builds professional websites from company documents, showcasing your brand and team." },
      { property: "og:description", content: "Builds professional websites from company documents, showcasing your brand and team." },
      { name: "twitter:description", content: "Builds professional websites from company documents, showcasing your brand and team." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5F6quKa6aLOCmDmcBVFWcpdPJjd2/social-images/social-1776872314049-Zebcha_logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/5F6quKa6aLOCmDmcBVFWcpdPJjd2/social-images/social-1776872314049-Zebcha_logo.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function WhatsAppFloat() {
  const phone = "2347037351590"; // +234 703 735 1590, no leading 0, no symbols
  const message = encodeURIComponent(
    "Hello Zebcha, I'd like to enquire about your services."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zebcha on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.244-.515.244-.945.143-1.318-.072-.244-1.69-.948-2.064-1.075z"/>
        <path d="M16.014.001C7.169.001.005 7.165.005 16.01c0 2.804.733 5.55 2.122 7.97L.18 31.998l8.21-2.139c2.336 1.275 4.97 1.95 7.624 1.95 8.846 0 16.01-7.164 16.01-16.01S24.86 0 16.014 0zm0 29.142a13.13 13.13 0 0 1-6.69-1.83l-.48-.286-4.97 1.302 1.327-4.847-.314-.5a13.118 13.118 0 0 1-2.01-7.013c0-7.244 5.892-13.137 13.137-13.137S29.15 8.766 29.15 16.01c0 7.245-5.892 13.132-13.137 13.132z"/>
      </svg>
    </a>
  );
}
