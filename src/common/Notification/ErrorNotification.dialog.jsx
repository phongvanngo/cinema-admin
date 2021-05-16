import { Dialog, Transition } from "@headlessui/react";
import { closeErrorNotificationDialog } from "app/redux/dialogSlice";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function MyModal() {
  const dispatch = useDispatch();
  const { isOpen, defaultData } = useSelector(
    (state) => state.dialog.errorNotificationDialog
  );

  function closeModal() {
    dispatch(closeErrorNotificationDialog());
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-red-500 shadow-xl rounded-2xl">
                <button
                  onClick={closeModal}
                  className="absolute right-3 top-2 text-xl text-white focus:outline-none hover:opacity-50"
                >
                  <i className="bx bx-x text-xl"></i>
                </button>
                <Dialog.Title
                  as="h3"
                  className="p-5  text-4xl font-medium leading-6 text-white text-center"
                >
                  Lỗi !
                </Dialog.Title>
                <div className="mt-2 text-center">
                  <p className="text-sm text-white">{defaultData?.title}</p>
                  <div className="flex justify-center text-white mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="85"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-14 py-3 text-sm font-medium text-white bg-red-700 border border-transparent rounded-2xl hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Thử lại
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
