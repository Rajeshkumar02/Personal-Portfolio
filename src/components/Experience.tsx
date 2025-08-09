"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building, Zap, Code } from "lucide-react";
import { EXPERIENCE_DATA } from "@/lib/constants";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through innovative companies and impactful projects
          </p>
        </motion.div>

        <div className="max-w-2xl lg:max-w-4xl mx-auto space-y-6 lg:space-y-10">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < EXPERIENCE_DATA.length - 1 && (
                <div className="absolute left-4 lg:left-6 top-16 lg:top-20 w-0.5 h-20 lg:h-28 bg-gradient-to-b from-accent/50 to-transparent z-0" />
              )}

              <div className="flex items-start gap-4 lg:gap-6">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`relative z-10 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${exp.color} shadow-lg flex items-center justify-center`}
                >
                  <Building className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.8,
                    }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-20 animate-pulse`}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2 + 0.2,
                    ease: "easeOut",
                  }}
                  className="flex-1 group"
                >
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-sm transition-all duration-300">
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 lg:gap-4 mb-3 lg:mb-4">
                        <div className="space-y-1 lg:space-y-2">
                          <span
                            className={`inline-block px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} mb-2 lg:mb-3`}
                          >
                            {exp.type}
                          </span>
                          <h3 className="text-lg lg:text-xl font-bold text-foreground transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-base lg:text-lg font-semibold text-primary">
                            {exp.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end space-y-1 lg:space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 lg:gap-2">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 lg:gap-2">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 lg:mb-6">
                        <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-r-lg p-4">
                          <h4 className="text-sm lg:text-base font-bold text-accent mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-3 text-sm lg:text-base text-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm lg:text-base font-bold text-primary mb-3 flex items-center gap-2">
                          <div className="w-5 h-5 bg-primary/20 rounded-md flex items-center justify-center">
                            <Code className="w-3 h-3 text-primary" />
                          </div>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs lg:text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
