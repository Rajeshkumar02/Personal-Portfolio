"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, GraduationCap, Heart, Briefcase } from "lucide-react";
import { PERSONAL_INFO, ABOUT_STATS } from "@/lib/constants";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Briefcase,
      label: ABOUT_STATS[0].label,
      value: ABOUT_STATS[0].value,
      description: "Professional Development",
    },
    {
      icon: Code,
      label: ABOUT_STATS[1].label,
      value: ABOUT_STATS[1].value,
      description: "Successful Deliveries",
    },
    {
      icon: GraduationCap,
      label: ABOUT_STATS[2].label,
      value: ABOUT_STATS[2].value,
      description: "Cutting-edge Technologies",
    },
    {
      icon: Heart,
      label: ABOUT_STATS[3].label,
      value: ABOUT_STATS[3].value,
      description: "Happy Collaborations",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Crafting Digital Experiences with Passion
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I'm a dedicated Software Developer with a Bachelor's degree in
                Engineering and over 2 years of hands-on experience in the tech
                industry. My journey spans across two dynamic companies where
                I've honed my skills in building scalable, user-centric
                applications.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                My expertise lies in modern JavaScript frameworks, backend
                development, and database management. I thrive on solving
                complex problems and transforming innovative ideas into robust,
                efficient solutions that make a real impact.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Continuous Learning",
                "Innovation",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2 max-w-md mx-auto lg:max-w-none"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-hover p-4 sm:p-6 lg:p-5 text-center border border-border rounded-xl touch-manipulation"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg mb-3 sm:mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </motion.div>
                  <div className="text-xl sm:text-2xl font-bold text-gradient mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
