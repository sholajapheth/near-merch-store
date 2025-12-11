import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { MarketplaceHeader } from "@/components/marketplace-header";
import { COLLECTIONS } from "@/integrations/marketplace-api";

export const Route = createFileRoute("/_marketplace")({
  component: MarketplaceLayout,
});

function MarketplaceLayout() {
  return (
    <div className="bg-white min-h-screen w-full font-['Red_Hat_Mono',monospace]">
      <MarketplaceHeader />

      <main>
        <Outlet />
      </main>

      <footer className="bg-neutral-950 text-white py-16">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00ec97] rounded-full" />
                <span className="font-semibold text-lg">NEAR Store</span>
              </div>
              <p className="text-white/60 text-sm">
                Official merchandise for the NEAR Protocol community.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <div className="space-y-2">
                {COLLECTIONS.map((c: string) => (
                  <Link
                    key={c}
                    to="/collections/$collection"
                    params={{ collection: c.toLowerCase() }}
                    className="block text-white/60 hover:text-[#00ec97] transition-colors text-sm"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Shipping Info
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Returns
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} NEAR Protocol. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
