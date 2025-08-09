import * as Yup from "yup";

// Type definitions
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validation messages
export const VALIDATION_MESSAGES = {
  name: {
    minLength: "Name must be at least 2 characters",
    maxLength: "Name must be less than 50 characters",
    required: "Name is required",
  },
  email: {
    invalid: "Invalid email format",
    required: "Email is required",
  },
  subject: {
    minLength: "Subject must be at least 3 characters",
    maxLength: "Subject must be less than 100 characters",
    required: "Subject is required",
  },
  message: {
    minLength: "Message must be at least 10 characters",
    maxLength: "Message must be less than 1000 characters",
    required: "Message is required",
  },
} as const;

// Validation schema for contact form
export const contactFormSchema = Yup.object({
  name: Yup.string()
    .min(2, VALIDATION_MESSAGES.name.minLength)
    .max(50, VALIDATION_MESSAGES.name.maxLength)
    .required(VALIDATION_MESSAGES.name.required),
  email: Yup.string()
    .email(VALIDATION_MESSAGES.email.invalid)
    .required(VALIDATION_MESSAGES.email.required),
  subject: Yup.string()
    .min(3, VALIDATION_MESSAGES.subject.minLength)
    .max(100, VALIDATION_MESSAGES.subject.maxLength)
    .required(VALIDATION_MESSAGES.subject.required),
  message: Yup.string()
    .min(10, VALIDATION_MESSAGES.message.minLength)
    .max(1000, VALIDATION_MESSAGES.message.maxLength)
    .required(VALIDATION_MESSAGES.message.required),
});

// Validate contact form data
export const validateContactForm = async (
  data: unknown
): Promise<ContactFormData> => {
  return await contactFormSchema.validate(data, {
    abortEarly: false,
  });
};
