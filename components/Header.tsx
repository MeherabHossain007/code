import React from "react";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
] as const;

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-black border-2 border-black" />
    <span className="font-head text-xl tracking-tight">Untitled UI</span>
  </div>
);

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 hover:bg-gray-100 transition-colors rounded-md"
  >
    {children}
  </a>
);

const NavLinks: React.FC = () => (
  <nav className="hidden md:flex items-center gap-1">
    {NAV_ITEMS.map((item) => (
      <NavLink key={item.href} href={item.href}>
        {item.label}
      </NavLink>
    ))}
  </nav>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-3">
            <Button variant="link" className="hidden md:block">
              Sign in
            </Button>
            <Button variant="default" size="md">
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
