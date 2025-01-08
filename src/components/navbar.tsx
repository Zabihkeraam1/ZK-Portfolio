import { Link, useLocation } from "react-router-dom";
import {  Home, Mail, ServerIcon, Workflow } from 'lucide-react';
import { Button } from "./ui/button";
import { ResumeIcon } from "@radix-ui/react-icons";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: ServerIcon },
  { name: "Resume", href: "/resume", icon: ResumeIcon },
  { name: "Work", href: "/work", icon: Workflow },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-sm md:block hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:px-16">
            <Link to="/" className="text-white text-2xl font-bold">
              Zabih<span className="text-[#00FF94]">.</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navigation.slice(0, 5).map((item) => (
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
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1e1b4b] shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center w-16 h-16 ${
                  location.pathname === item.href
                    ? "text-[#00FF94]"
                    : "text-gray-300"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

