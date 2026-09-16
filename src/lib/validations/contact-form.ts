import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name is too long."),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),

  whatsappNumber: z
    .string()
    .min(7, "Please enter a valid WhatsApp number.")
    .max(20, "WhatsApp number is too long.")
    .regex(
    /^\d+$/,
    "WhatsApp number can contain numbers only."
    ),

  country: z
    .string()
    .min(2, "Country is required.")
    .max(50, "Country name is too long."),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(100, "Subject is too long."),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;