"use client";
import React, {useState,} from "react";
import Modal from "@/src/components/model/Modal";



const RequiredDocumentSampleModel = ({isOpen, onClose , documentName}:any) => {

  console.log(documentName,'documentName_documentName')
  return (
    <div>
   <Modal
  isOpen={isOpen}
  onClose={onClose}
>
  <h2>Academic Transcript</h2>

  <p>
    This is the transcript sample.
  </p>


</Modal>
    </div>
  )
}

export default RequiredDocumentSampleModel
