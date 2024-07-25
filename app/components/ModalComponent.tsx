import React, { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface modelComponentProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
  body: string;
}

const ModalComponent: React.FC<modelComponentProps> = ({
  isOpen,
  closeModal,
  title,
  description,
  body,
}) => {
  const handleDeactivate = () => {
    //some logic
  };

  return (
    // <Dialog open={isOpen} onClose={() => closeModal} className="relative z-50">
    //   {/* The backdrop, rendered as a fixed sibling to the panel container */}
    //   <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    //   <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
    //     <Dialog.Panel className="w-full max-w-sm rounded bg-white">
    //       <Dialog.Title>{title}</Dialog.Title>
    //       <Dialog.Description>{description}</Dialog.Description>

    //       <p>{body}</p>

    //       {/*
    //       You can render additional buttons to dismiss your dialog by setting
    //       `isOpen` to `false`.
    //     */}
    //       <button onClick={closeModal}>Cancel</button>
    //       <button onClick={handleDeactivate}>Deactivate</button>
    //     </Dialog.Panel>
    //   </div>
    // </Dialog>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{body}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    {description}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    // </>
  );
};

export default ModalComponent;
