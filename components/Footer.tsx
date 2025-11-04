import React from "react";
import { FooterColumn } from "../types";
import { FOOTER_COLUMNS } from "@/constants";
import { Text } from "@/components/retroui/Text";

const COMPANY_NAME = "Untitled UI";
const COMPANY_TAGLINE = "A design system that fuses precision with rebellion.";

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-white border-2 border-white" />
    <span className="font-head text-xl tracking-tight text-white">
      {COMPANY_NAME}
    </span>
  </div>
);

interface FooterColumnProps {
  column: FooterColumn;
}

const FooterColumnComponent: React.FC<FooterColumnProps> = ({ column }) => (
  <div>
    <Text as="h4" className="text-white mb-4">
      {column.title}
    </Text>
    <ul className="space-y-2">
      {column.links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white hover:underline underline-offset-2 decoration-primary transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <Text as="p" className="text-gray-400 mt-4 text-sm">
              {COMPANY_TAGLINE}
            </Text>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <FooterColumnComponent key={col.title} column={col} />
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <Text as="p" className="text-gray-400 text-center text-sm">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
