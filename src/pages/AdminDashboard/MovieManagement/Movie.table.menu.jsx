import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MenuTheaterSytemTable({
  handleEdit,
  handleDelete,
  handleAddType,
}) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="focus:outline-none">
            <div className="flex justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 pt-1 transition duration-500 hover:text-white hover:bg-green-500 cursor-pointer">
              <span className=" tracking-wider font-normal text-center text-xl">
                ...
              </span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <div className="rounded-md hover:bg-purple-800">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        handleEdit();
                      }}
                      className={`${
                        active
                          ? "bg-violet-500 text-white focus:outline-none"
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Chỉnh sửa
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>
            <div className="px-1 py-1">
              <div className="rounded-md hover:bg-purple-800">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        handleDelete();
                      }}
                      className={`${
                        active
                          ? "bg-violet-500 text-white focus-within:outline-none"
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <DeleteInactiveIcon
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Xóa
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>

            <div className="px-1 py-1">
              <div className="rounded-md hover:bg-purple-800">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        handleAddType();
                      }}
                      className={`${
                        active
                          ? "bg-violet-500 text-white focus-within:outline-none"
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <AddMovieTypeIconActive
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <AddMovieTypeIconInActive
                          className="w-5 h-5 mr-2 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Thêm thể loại
                    </button>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function AddMovieTypeIconInActive(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="66"
      viewBox="0 0 24 24"
      fill="#EDE9FE"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
function AddMovieTypeIconActive(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="66"
      viewBox="0 0 24 24"
      fill="#8B5CF6"
      stroke="#C4B5FD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
