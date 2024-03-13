import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';

interface ModalProps {
  showModal: boolean; // Type is boolean for the modal's visibility state
  setShowModal: (showModal: boolean) => void; // Function to update showModal state
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return (
    <div
      className={`${
        props.showModal ? '' : 'hidden'
      } fixed top-0 left-0 w-full h-full bg-slate-700/65 z-50 overflow-hidden`}
    >
      {' '}
      {/* Added overflow-hidden */}
      {/* Centering content */}
      <div className="flex items-center justify-center h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={() => props.setShowModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center flex flex-col items-center gap-6">
              <CiCircleCheck className="h-16 w-16 text-green-600" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Your response has been submitted!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
