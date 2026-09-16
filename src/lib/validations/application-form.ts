import { z } from "zod";

export const applicationFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name is too long."),

  // email: z
  //   .string()
  //   .min(1, "Email is required.")
  //   .email("Please enter a valid email address."),

  // whatsappNumber: z
  //   .string()
  //   .min(7, "Please enter a valid WhatsApp number.")
  //   .max(20, "WhatsApp number is too long.")
  //   .regex(
  //     /^\d+$/,
  //     "WhatsApp number can contain numbers only."
  //   ),

  PreviousEducation: z
    .string()
    .min(2, "Previous education is required.")
    .max(100, "Previous education is too long."),


  interestingSubject: z
    .string()
    .min(2, "Interestig is Subject required.")
    .max(100, "Interestig Subject is too long."),

 previousGPA_marks: z
  .string()
  .min(2, "Previous GPA / Marks is required."),

  interestedDegree: z
    .string()
    .min(1, "Please select your preferred degree."),

  typeYourQuestions: z
    .string()
    .max(5000, "Type Your Questions are too long.")
    .optional(),
});

export type ApplicationFormValues = z.infer<
  typeof applicationFormSchema
>;