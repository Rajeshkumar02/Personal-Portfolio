"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import {
  PERSONAL_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  QUICK_LINKS,
} from "@/lib/constants";
import { ThemeToggle } from "./SimpleThemeToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand & Bio - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {PERSONAL_INFO.name}
            </motion.h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.description}
            </p>

            {/* Social Links - Compact on mobile */}
            <div className="flex items-center gap-3 sm:gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card/50 border border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation - Simplified on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="sm:col-span-1 lg:col-span-1"
          >
            <h4 className="font-semibold text-foreground mb-4 sm:mb-6 text-base sm:text-lg">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-3">
              {QUICK_LINKS.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 group text-sm sm:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    {link}
                    <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info - Compact layout on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:col-span-1 lg:col-span-1"
          >
            <h4 className="font-semibold text-foreground mb-4 sm:mb-6 text-base sm:text-lg">
              Get In Touch
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground group"
                whileHover={{ x: 4 }}
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-accent transition-colors text-xs sm:text-sm truncate"
                >
                  {CONTACT_INFO.email}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground group"
                whileHover={{ x: 4 }}
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                </div>
                <span className="text-xs sm:text-sm">{CONTACT_INFO.phone}</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground group"
                whileHover={{ x: 4 }}
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                </div>
                <span className="text-xs sm:text-sm">
                  {CONTACT_INFO.location}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom - Simplified on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-border/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-4">
            <div className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <motion.a
                href="#home"
                className="text-muted-foreground hover:text-accent transition-colors text-xs sm:text-sm"
                whileHover={{ y: -1 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Back to Top
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
