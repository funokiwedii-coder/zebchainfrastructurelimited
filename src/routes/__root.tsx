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
    </div>
  );
}
