"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

type CustomSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
};

export const Selector =({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative w-full ${className}`}
    >
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`input-field flex w-full items-center justify-between text-left transition ${
          value ? "text-slate-900" : "text-slate-400"
        } ${
          isOpen
            ? "border-blue-500 ring-2 ring-blue-500/10"
            : ""
        }`}
      >
        <span>{value || placeholder}</span>

        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen
              ? "rotate-180 text-blue-600"
              : "text-slate-500"
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.15,
            }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((option) => {
                const isSelected = value === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      isSelected
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                  >
                    <span>{option}</span>

                    {isSelected && (
                      <Check
                        size={18}
                        className="ml-auto text-blue-600"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}