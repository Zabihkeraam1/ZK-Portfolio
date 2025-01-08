import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:px-16">
          <Link to="/" className="text-white text-2xl font-bold">
            Zabih<span className="text-[#00FF94]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "text-[#00FF94]"
                    : "text-gray-300 hover:text-[#00FF94]"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
              Hire me
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "text-[#00FF94]"
                    : "text-gray-300 hover:text-[#00FF94]"
                } block px-3 py-2 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90 w-full mt-4">
              Hire me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

