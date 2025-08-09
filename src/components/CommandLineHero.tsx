"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Download, Mail, Terminal } from "lucide-react";
import { COMMAND_LINES, HERO_CONTENT } from "@/lib/constants";

export function CommandLineHero() {
  const [commandText, setCommandText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex < COMMAND_LINES.length - 1) {
      const timer = setTimeout(
        () => {
          const currentLine = COMMAND_LINES[currentLineIndex];
          if (commandText.length < currentLine.length) {
            setCommandText(currentLine.slice(0, commandText.length + 1));
          } else {
            setCurrentLineIndex(currentLineIndex + 1);
            setCommandText("");
          }
        },
        currentLineIndex % 2 === 0 ? 100 : 50
      ); // Slower for commands, faster for outputs

      return () => clearTimeout(timer);
    }
  }, [commandText, currentLineIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor(!showCursor), 500);
    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = async () => {
    try {
      // Check if the file exists by making a HEAD request
      const response = await fetch("/resume.pdf", { method: "HEAD" });

      if (!response.ok) {
        alert("Resume file not found. Please contact the administrator.");
        console.error("Resume file not found at /resume.pdf");
        return;
      }

      // File exists, proceed with download
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Rajeshkumar_S_Resume.pdf";
      link.target = "_blank"; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Resume download initiated successfully");
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback: open in new tab
      window.open("/resume.pdf", "_blank");
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 md:pt-16"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 mb-8 shadow-2xl max-w-2xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">
                terminal
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="text-left font-mono text-sm space-y-2">
            {COMMAND_LINES.slice(0, currentLineIndex).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${
                  index % 2 === 0 ? "text-accent" : "text-foreground"
                }`}
              >
                {line}
              </motion.div>
            ))}
            {currentLineIndex < COMMAND_LINES.length - 1 && (
              <div
                className={`${
                  currentLineIndex % 2 === 0 ? "text-accent" : "text-foreground"
                }`}
              >
                {commandText}
                {showCursor && <span className="text-accent">|</span>}
              </div>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            {HERO_CONTENT.greeting}{" "}
            <span className="text-gradient">{HERO_CONTENT.name}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {HERO_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <motion.button
            className="relative overflow-hidden bg-gradient-to-r from-accent to-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{HERO_CONTENT.cta.primary}</span>
            </div>
            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.button
            className="relative overflow-hidden border-2 border-accent/50 text-accent font-semibold py-3 px-6 rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              borderColor: "hsl(var(--accent))",
              backgroundColor: "hsl(var(--accent) / 0.1)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
          >
            <div className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span>{HERO_CONTENT.cta.secondary}</span>
            </div>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-8 h-8 text-accent" />
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl hidden lg:block"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl hidden lg:block"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
