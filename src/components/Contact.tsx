"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Send, CheckCircle, AlertCircle, Phone, MapPin, X } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  VALIDATION_MESSAGES,
} from "@/lib/constants";

// Type definitions
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, VALIDATION_MESSAGES.name.minLength)
      .max(50, VALIDATION_MESSAGES.name.maxLength)
      .required(VALIDATION_MESSAGES.name.required),
    email: Yup.string()
      .email(VALIDATION_MESSAGES.email.invalid)
      .required(VALIDATION_MESSAGES.email.required),
    subject: Yup.string()
      .min(5, VALIDATION_MESSAGES.subject.minLength)
      .max(100, VALIDATION_MESSAGES.subject.maxLength)
      .required(VALIDATION_MESSAGES.subject.required),
    message: Yup.string()
      .min(10, VALIDATION_MESSAGES.message.minLength)
      .max(1000, VALIDATION_MESSAGES.message.maxLength)
      .required(VALIDATION_MESSAGES.message.required),
  });

  // Handle form submission
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, setStatus, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      setStatus(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const successMessage =
          data.message ||
          "Message sent successfully! I'll get back to you soon.";
        setStatus({
          type: "success",
          message: successMessage,
        });
        setToast({
          type: "success",
          message: successMessage,
        });
        resetForm();
      } else {
        const errorMessage =
          data.message || "Failed to send message. Please try again.";
        setStatus({
          type: "error",
          message: errorMessage,
        });
        setToast({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      const errorMessage =
        "Failed to send message. Please check your connection and try again.";
      setStatus({
        type: "error",
        message: errorMessage,
      });
      setToast({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: SOCIAL_LINKS.find((link) => link.name === "Email")?.icon,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT_INFO.location,
      href: "https://share.google/tkkoXdRea1FOffFG7",
    },
  ];

  const socialLinks = SOCIAL_LINKS;

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6"
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your project and
            explore how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  I'm always interested in new opportunities, collaborations,
                  and interesting projects. Whether you have a project in mind
                  or just want to chat about technology, feel free to reach out!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors group touch-manipulation"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        {IconComponent ? (
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-foreground text-sm sm:text-base">
                          {info.label}
                        </div>
                        <div className="text-muted-foreground text-sm sm:text-base truncate">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Follow Me
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 touch-manipulation"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                        aria-label={`Follow on ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.4}>
            <div className="p-6 sm:p-8 border border-border rounded-xl bg-card/80 backdrop-blur-sm">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, status }) => (
                  <Form className="space-y-4 sm:space-y-6">
                    {/* Status Message */}
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className={`p-4 rounded-lg flex items-center gap-3 shadow-lg border-2 ${
                          status.type === "success"
                            ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-900/40 dark:border-green-600 dark:text-green-200"
                            : "bg-red-50 border-red-300 text-red-800 dark:bg-red-900/40 dark:border-red-600 dark:text-red-200"
                        }`}
                      >
                        {status.type === "success" ? (
                          <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm">
                            {status.type === "success" ? "Success!" : "Error"}
                          </p>
                          <p className="text-sm opacity-90">{status.message}</p>
                        </div>
                      </motion.div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          disabled={isSubmitting}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                          placeholder="Your name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          disabled={isSubmitting}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <Field
                        type="text"
                        id="subject"
                        name="subject"
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                        placeholder="What's this about?"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={6}
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50"
                        placeholder="Tell me about your project or just say hello!"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className={`relative overflow-hidden w-full py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 transform ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed text-white"
                          : "bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="font-medium">Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium">Send Message</span>
                          </>
                        )}
                      </div>

                      {/* Animated background effect */}
                      {!isSubmitting && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            </div>
          </ScrollReveal>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              className="fixed top-4 right-4 z-50 max-w-md"
            >
              <div
                className={`p-4 rounded-lg shadow-xl border-2 backdrop-blur-sm ${
                  toast.type === "success"
                    ? "bg-green-50/95 border-green-300 text-green-800 dark:bg-green-900/90 dark:border-green-600 dark:text-green-200"
                    : "bg-red-50/95 border-red-300 text-red-800 dark:bg-red-900/90 dark:border-red-600 dark:text-red-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  {toast.type === "success" ? (
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">
                      {toast.type === "success" ? "Message Sent!" : "Error"}
                    </p>
                    <p className="text-sm opacity-90 mt-1">{toast.message}</p>
                  </div>
                  <button
                    onClick={() => setToast(null)}
                    className="flex-shrink-0 p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
