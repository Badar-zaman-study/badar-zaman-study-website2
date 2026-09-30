"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-4xl",
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`glass-panel relative max-h-[92vh] w-full ${maxWidth} overflow-y-auto rounded-[32px] p-6 md:p-8`}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 transition hover:text-slate-900"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;