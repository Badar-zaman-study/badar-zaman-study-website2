import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  universities: string;
  highlight: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  destination: string;
  quote: string;
  program: string;
};

export type Scholarship = {
  slug: string;
  title: string;
  university: string;
  logo: string;
  country: string;
  intake: string;
  degreeLevel: string;
  scholarshipType: string;
  funding: string;
  deadline: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  requiredDocuments: string[];
  applicationProcess: string[];
  courses: string[];
  faqs: { question: string; answer: string }[];
};

export type GuideStep = {
  step: string;
  title: string;
  description: string;
};

export type DocumentItem = {
  title: string;
  icon: LucideIcon;
  explanation: string;
  tips: string;
};
