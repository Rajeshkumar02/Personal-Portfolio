import nodemailer from "nodemailer";
import { getAdminEmailTemplate, getAutoReplyTemplate } from "./email-templates";
import type { ContactFormData } from "./validation";

// Mail configuration interface
export interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

// Create transporter with environment validation
export const createTransporter = () => {
  // Check if all required environment variables are present
  const requiredEnvVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "SMTP_TO",
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
};

// Send contact form emails
export const sendContactEmails = async (formData: ContactFormData) => {
  const { name, email, subject } = formData;

  // Create transporter
  const transporter = createTransporter();

  // Verify transporter configuration
  await transporter.verify();

  // Generate email templates
  const adminTemplate = getAdminEmailTemplate(formData);
  const autoReplyTemplate = getAutoReplyTemplate(formData);

  // Email content for admin (receiving the message)
  const mailOptionsToAdmin = {
    from: `"${name}" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    subject: `Portfolio Contact: ${subject}`,
    html: adminTemplate.html,
    text: adminTemplate.text,
  };

  // Auto-reply email to the sender
  const mailOptionsToSender = {
    from: `"Portfolio" <${process.env.SMTP_FROM}>`,
    to: email,
    subject: `Thank you for contacting me - ${name}`,
    html: autoReplyTemplate.html,
    text: autoReplyTemplate.text,
  };

  // Send both emails concurrently
  await Promise.all([
    transporter.sendMail(mailOptionsToAdmin),
    transporter.sendMail(mailOptionsToSender),
  ]);

  return {
    success: true,
    message: "Message sent successfully! Thank you for contacting me.",
  };
};
