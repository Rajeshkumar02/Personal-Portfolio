"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Immediate updates for better responsiveness
      setIsScrolled(currentScrollY > 50);

      // Debounced visibility logic - Don't hide navbar when mobile menu is open
      timeoutId = setTimeout(() => {
        const scrollDifference = currentScrollY - lastScrollY;

        // Only process significant scroll movements
        if (Math.abs(scrollDifference) > 5) {
          // Always show at the top
          if (currentScrollY <= 20) {
            setIsVisible(true);
          }
          // Don't hide when mobile menu is open
          else if (isMobileMenuOpen) {
            setIsVisible(true);
          }
          // Hide when scrolling down significantly
          else if (scrollDifference > 15 && currentScrollY > 100) {
            setIsVisible(false);
          }
          // Show when scrolling up significantly
          else if (scrollDifference < -15) {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
        }

        // Update active section
        const sections = NAVIGATION_ITEMS.map((item) => item.href.slice(1));
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }, 35); // Increased debounce to 50ms for more stability
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1);

    if (window.innerWidth < 768) {
      // On mobile, close menu first, then scroll
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbar = document.querySelector(".navbar");
          const navbarHeight = navbar
            ? navbar.getBoundingClientRect().height
            : 0;
          const offsetPosition =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }, 300); // Matches menu close animation
    } else {
      // Desktop: scroll immediately
      const element = document.getElementById(sectionId);
      if (element) {
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const offsetPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <motion.nav
      ref={mobileMenuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/85 backdrop-blur-sm border-b border-border/50"
      }`}
      style={{
        backdropFilter: isScrolled ? `blur(${blur}px)` : "blur(8px)",
        backgroundColor: isScrolled
          ? `hsl(var(--background) / 0.98)`
          : `hsl(var(--background) / 0.85)`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-lg sm:text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#home")}
          >
            Rajeshkumar S
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative cursor-pointer font-medium transition-all duration-300 px-3 py-2 rounded-lg group ${
                  activeSection === item.href.slice(1)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow: "var(--shadow-card)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item?.name}
                <motion.div
                  className="absolute -bottom-1 left-1/2 h-0.5 bg-accent origin-center"
                  initial={{ width: 0, x: "-50%" }}
                  animate={{
                    width: activeSection === item.href.slice(1) ? "80%" : 0,
                    x: "-50%",
                  }}
                  whileHover={{ width: "80%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-3 -mr-2 text-foreground hover:text-accent transition-colors touch-manipulation relative z-50 rounded-lg hover:bg-muted/50"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu - Dropdown Style */}
        <motion.div
          initial={false}
          animate={
            isMobileMenuOpen && isVisible
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -10, scale: 0.95 }
          }
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="bg-background backdrop-blur-xl border border-border/50 rounded-xl shadow-xl overflow-hidden">
            <div className="py-2">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group block w-full text-left px-4 py-3 font-medium transition-all duration-200 touch-manipulation relative ${
                    activeSection === item.href.slice(1)
                      ? "text-accent bg-accent/10 border-l-2 border-accent"
                      : "text-foreground hover:text-accent hover:bg-muted/30"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.1,
                          duration: 0.3,
                          type: "spring",
                          stiffness: 400,
                        }}
                        className="w-2 h-2 bg-accent rounded-full flex-shrink-0"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
