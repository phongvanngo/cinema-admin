import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import "./style.scss";

export default function Example({ listMovieTypes, handleAddType }) {
  const myStyle = {};

  return (
    <div className="w-full">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Chọn thể loại phim</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                <div className="max-h-52 overflow-y-scroll w-full">
                  {listMovieTypes.map((type, index) => {
                    return (
                      <div
                        key={index}
                        className="rounded-md movie-type-item my-2 px-2 py-1 hover:bg-indigo-100 flex items-center justify-between"
                      >
                        <span className="my-2">{type.name}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddType(type);
                          }}
                          className="btn-add-type inline-flex justify-center px-4 py-1 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          Thêm
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
