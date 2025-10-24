import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  return (
    <>
      {/* --- Navbar --- */}
      <nav
        className={cn(
          "fixed w-full z-[1000] transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="relative flex items-center justify-left px-6 md:px-16">
          {/* --- Logo --- */}
          <a
            href="#hero"
            className="flex items-center text-xl font-bold text-primary"
          >
            <span className="relative z-10 flex items-center">
              <span
                className="text-glow text-foreground font-['Rethink_Sans']
                text-[36px] sm:text-[60px] md:text-[50px] lg:text-[60px]"
              >
                Cha
              </span>
            </span>
          </a>

          {/* --- Desktop Nav --- */}
          <div
            className={cn(
              "hidden md:flex absolute left-1/2 -translate-x-1/2",
              "space-x-6 sm:space-x-10 md:space-x-14 lg:space-x-20 xl:space-x-24"
            )}
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base md:text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* --- Mobile Menu Button (Burger) --- */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="absolute right-6 md:right-16 p-2 text-foreground md:hidden"
            style={{ zIndex: 1002 }}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay (Outside nav) --- */}
      <div
        className={cn(
          "fixed inset-0 h-screen w-full bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden flex flex-col items-center justify-center",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ zIndex: 1001 }}
      >
        {/* --- Close Button (Visible on Overlay) --- */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {/* --- Navigation Links --- */}
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
