import { Outlet } from "react-router-dom";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { Footer } from "./footer";
import { FloatingCTA } from "./floating-cta";
import { ScrollToTop } from "./scroll-to-top";

export function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollToTop />
      <DesktopHeader />
      <MobileHeader />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingCTA />
    </div>
  );
}
