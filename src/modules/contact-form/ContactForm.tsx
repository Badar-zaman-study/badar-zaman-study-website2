"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaWhatsapp } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Selector } from "@/src/components/Selector";

import {
  applicationFormSchema,
  type ApplicationFormValues,
} from "@/src/lib/validations/application-form";
import Loader from "@/src/components/Loader";
const ContactForm = () => {

   const [submitted, setSubmitted] = useState(false);
  
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      watch,
      formState: { errors , isSubmitting },
    } = useForm<ApplicationFormValues>({
      resolver: zodResolver(applicationFormSchema),
  
      defaultValues: {
        fullName: "",
        // email: "",
        // whatsappNumber: "",
        PreviousEducation: "",
        interestingSubject: "",
        previousGPA_marks: "",
        interestedDegree: "", 
        typeYourQuestions: "",
      },
    });
  
    const interestedDegree = watch("interestedDegree");
    const bachelors_mobile_number=process.env.NEXT_PUBLIC_BS_WHATSAPP_NUMBER;
    const masters_mobile_number=process.env.NEXT_PUBLIC_MS_WHATSAPP_NUMBER;
    const phd_mobile_number=process.env.NEXT_PUBLIC_PHD_WHATSAPP_NUMBER;
  
    // useEffect(() => {
    //   if (isOpen) {
    //     setSubmitted(false);
    //     reset();
    //   }
    // }, [isOpen, reset]);
  
    const onSubmit = async (data: ApplicationFormValues) => {
      console.log(data,'data_submit_scholarship')
    const message = `
    New Scholarship Application
  
  Full Name: ${data.fullName}
  Previous Education: ${data.PreviousEducation}
  Interesting Subject: ${data.interestingSubject}
  Previous GPA/Marks: ${data.previousGPA_marks}
  Interested Degree: ${data.interestedDegree}
  Questions:${data.typeYourQuestions || "N/A"}`.trim();
  
  
    // Degree ke according WhatsApp number
    const whatsappNumbers:any = {
      bachelors: bachelors_mobile_number,
      masters: masters_mobile_number,
      phd: phd_mobile_number,
    };
  
    const degree = data.interestedDegree.toLowerCase();
  
      const yourWhatsAppNumber =
      whatsappNumbers[degree];
  
       if (!yourWhatsAppNumber) {
      alert("Please select a Interested degree.");
      return;
    }
  
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    window.location.href = whatsappUrl;
  
    setSubmitted(true);
    reset();
    };
  return (
    <div>
                {/* Header */}
                <div className="mb-8 max-w-2xl">

                  <h2 className="heading-md mt-4 text-slate-950">
                    Start your Scholarship Application
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Share your profile and our advisors will
                    review the best fit route for scholarship.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit,
                      (errors) => {
                       console.log("FORM VALIDATION ERRORS:", errors);
                     }
                     )}
                  noValidate
                  className="grid gap-4 md:grid-cols-2"
                >
                  {/* Full Name */}
                  <div>
                    <p className="mb-2 pl-2">
                      Full Name
                      <span className="text-red-500">*</span>
                    </p>

                    <input
                      {...register("fullName")}
                      maxLength={50}
                      className={`input-field ${
                        errors.fullName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Full Name"
                    />

                    {errors.fullName && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Previous Education */}
                  <div>
                    <p className="mb-2 pl-2">
                      Previous Education
                      <span className="text-red-500">*</span>
                    </p>

                    <input
                      {...register("PreviousEducation")}
                      maxLength={100}
                      className={`input-field ${
                        errors.PreviousEducation
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Current Education"
                    />

                    {errors.PreviousEducation && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.PreviousEducation.message}
                      </p>
                    )}
                  </div>

                   {/* Interesting Subject */}
                  <div>
                    <p className="mb-2 pl-2">
                      Interested Subject
                      <span className="text-red-500">*</span>
                    </p>

                    <input
                      {...register("interestingSubject")}
                      maxLength={100}
                      className={`input-field ${
                        errors.interestingSubject
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Interesting Subject"
                    />

                    {errors.interestingSubject && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.interestingSubject.message}
                      </p>
                    )}
                  </div>

                  {/* Previous CGPA / Marks */}
                  <div>
                    <p className="mb-2 pl-2">
                      Previous CGPA / Marks
                      <span className="text-red-500">*</span>
                    </p>

                    <input
  {...register("previousGPA_marks")}
  type="text"
  // inputMode="decimal"
  className={`input-field ${
    errors.previousGPA_marks ? "border-red-500" : ""
  }`}
  placeholder="Previous GPA / Marks (e.g. 3.5 or 85%)"
/>

                    {errors.previousGPA_marks && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.previousGPA_marks.message}
                      </p>
                    )}
                  </div>

                  {/* Interested Degree */}
                  <div>
                    <p className="mb-2 pl-2">
                      Interested Degree
                      <span className="text-red-500">*</span>
                    </p>

                    <Selector
                      value={interestedDegree}
                      onChange={(value) =>
                        setValue(
                          "interestedDegree",
                          value,
                          {
                            shouldValidate: true,
                            shouldDirty: true,
                          }
                        )
                      }
                      placeholder="Interested Degree"
                      options={[
                        "Bachelors",
                        "Masters",
                        "Phd",
                      ]}
                    />

                    {errors.interestedDegree && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.interestedDegree.message}
                      </p>
                    )}
                  </div>

                  {/* Type Your Questions */}
                  <div className="md:col-span-2">
                    <p className="mb-2 pl-2">
                      Type Your Questions
                    </p>

                    <textarea
                      {...register("typeYourQuestions")}
                      maxLength={1000}
                      rows={5}
                      className={`textarea-field ${
                        errors.typeYourQuestions
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Type Your Questions"
                    />

                    {errors.typeYourQuestions && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.typeYourQuestions.message}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-green disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-1"
                    >
                      Message on WhatsApp 
                      <span className="-ml-1"><FaWhatsapp size={20}/></span>
                      {isSubmitting &&
                          <Loader size='small' color='white'/>
                      }
                    </button>

                  </div>
                </form>
    </div>
  )
}

export default ContactForm
