import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCumRapInTheaterSystem } from "app/redux/cumRapSlice";

export default function FilterTheaterSystem() {
  const dispatch = useDispatch();
  let listTheaterSystem = useSelector(
    (state) => state.theater.listTheaterSystem
  );
  const [selected, setSelected] = useState(listTheaterSystem[0] || []);

  return (
    <div className="mt-5 mr-10 flex items-center">
      <div className="mr-5">
        <span>Chọn hệ thống rạp</span>
      </div>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          dispatch(fetchListCumRapInTheaterSystem({ theaterSystemId: e?.id }));
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="h-10 relative w-60 py-2 pl-3 pr-10 text-left bg-white rounded-2xl shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-20 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {listTheaterSystem.map((theaterSystem, theaterSystemIdx) => (
                <Listbox.Option
                  key={theaterSystemIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-amber-900 bg-amber-100 hover:bg-indigo-800 hover:text-white"
                        : "text-gray-900"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={theaterSystem}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {theaterSystem.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
