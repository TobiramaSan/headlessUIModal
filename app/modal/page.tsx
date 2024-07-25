"use client";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { title } from "process";

const ModalUI = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <>
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Open dialog
          </button>
        </div>
        <ModalComponent
          closeModal={closeModal}
          isOpen={isOpen}
          title="Payment successful"
          description="Got it, thanks!"
          body="Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order."
        />
      </>
    </div>
  );
};

export default ModalUI;
