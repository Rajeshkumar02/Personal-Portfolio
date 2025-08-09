"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SKILLS_DATA, PROFESSIONAL_STRENGTHS } from "@/lib/constants";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            experience across various technologies and domains.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-8 lg:gap-12">
          {Object.entries(SKILLS_DATA).map(
            ([category, skills], categoryIndex) => (
              <ScrollReveal key={category} delay={categoryIndex * 0.1}>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      {skills[0] &&
                        (() => {
                          const IconComponent = skills[0].icon;
                          return (
                            <IconComponent className="w-6 h-6 text-white" />
                          );
                        })()}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {category}
                      </h3>
                      <p className="text-muted-foreground">
                        {skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="group relative bg-background/50 border border-border rounded-lg p-4 hover:bg-background/80 hover:border-accent/50 transition-all duration-300"
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              {(() => {
                                const IconComponent = skill.icon;
                                return (
                                  <IconComponent className="w-4 h-4 text-accent" />
                                );
                              })()}
                            </div>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              skill.level === "Expert"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                : skill.level === "Advanced"
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                : skill.level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Experience Level - Show experience duration */}
                        <div className="mb-3">
                          <div className="text-sm text-muted-foreground">
                            Experience:{" "}
                            <span className="font-medium text-foreground">
                              {skill.experience}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          )}
        </div>

        {/* Professional Strengths */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Professional <span className="text-gradient">Strengths</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Core competencies that enhance technical expertise and drive
                project success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROFESSIONAL_STRENGTHS.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-background to-muted/30 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-bold text-lg mb-3 text-foreground">
                    {strength.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
