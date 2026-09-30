"use client";

import React from "react";
import Modal from "@/src/components/model/Modal";

const documentFiles: Record<string, string> = {
  bs_Transcript: "/documents/bs_Transcript.webp",
  Motivation_Letter: "/documents/Motivation_Letter.pdf",
  Letter_of_Recommendation:
    "/documents/Letter_of_Recommendation.avif",
  Europass_cv: "/documents/Europass_cv.png",
  passport: "/documents/passport.jpg",
  english_proficiency:
    "/documents/english_proficiency.webp",
  research_proposal:
    "/documents/research_proposal.png",
};

const RequiredDocumentSampleModel = ({
  isOpen,
  onClose,
  documentName='',
  title='',
}: any) => {
  const fileUrl = documentFiles[documentName];

  console.log(documentName,'documentName_documentName')
  console.log(fileUrl,'fileUrl_fileUrl')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-5">

        <h2 className="text-xl font-semibold text-slate-900">
          Document Sample - {title}
        </h2>

        {fileUrl ? (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">

            {fileUrl.endsWith(".pdf") ? (
              <iframe
                src={fileUrl}
                title={documentName}
                className="h-[75vh] w-full"
              />
            ) : (
              <img
                src={fileUrl}
                alt={documentName}
                className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
              />
            )}

          </div>
        ) : (
          <div className="rounded-xl bg-slate-50 p-8 text-center">
              <img
                src="/empty.png"
                alt="no file available"
                className="mx-auto max-h-[30vh] w-auto max-w-full object-contain"
              />
            <p className="text-sm text-slate-500 font-bold">
              Sample document is not available.
            </p>
          </div>
        )}

      </div>
    </Modal>
  );
};

export default RequiredDocumentSampleModel;