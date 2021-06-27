import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createMovie, updateMovie } from "app/redux/movieSlice";
import { closeAddMovieTypeFormDialog } from "app/redux/dialogSlice";
import { startLoading, stopLoading } from "app/redux/loadingSlice";
import movieApi from "app/api/movieApi";
import { toast } from "react-toastify";
import { useState } from "react";
import MenuChooseMovieType from "./Movie.AddMovieTypeForm.Menu";

const schema = yup.object().shape({});

export default function AddMovieTypeForm() {
  const dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isOpen, defaultData } = useSelector(
    (state) => state.dialog.addMovieTypeFormDialog
  );

  const listMovieType = useSelector((state) => state.movieType.listMovieType);

  const [typesOfMovie, setTypesOfMovie] = useState([]);

  function handleAddMovieType(type) {
    let newTypesOfMovie = [...typesOfMovie];
    newTypesOfMovie.push(type);
    setTypesOfMovie(newTypesOfMovie);
  }

  const currentMovie = defaultData;

  function onSaveData(data) {}
  function handleCloseModal() {
    dispatch(closeAddMovieTypeFormDialog());
  }

  useEffect(() => {
    console.log("fectchListTypeOfMovie", currentMovie);
    if (currentMovie?.id) {
      (async () => {
        try {
          dispatch(startLoading());
          const res = await movieApi.getTypeOfMovie(currentMovie.id);
          switch (res.status) {
            case 200:
              setTypesOfMovie(res.data?.listTypes);
              break;

            default:
              break;
          }
          // console.log("fechListTypeOfMovie response ", res);
        } catch (err) {
          toast.error("Có lỗi xảy ra");
        } finally {
          dispatch(stopLoading());
        }
      })();
    }
  }, [isOpen]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60"
          onClose={() => {}}
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
              <div className="p-0 inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 border-b"
                >
                  <div className="pr-5 pl-5 pt-4 pb-3 w-full flex justify-between">
                    <h1 className="font-normal">Thêm thể loại phim</h1>
                    <button
                      onClick={handleCloseModal}
                      className="focus:outline-none hover:text-gray-400"
                    >
                      <i className="bx bx-x text-xl"></i>
                    </button>
                  </div>
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSaveData)}>
                  <div className="mt-2 p-6">
                    <div className="mb-8">
                      <span className="mb-2 font-extrabold">Tên phim:</span>
                      <span>{" " + currentMovie?.name}</span>
                    </div>
                    <div className="mb-8">
                      <span className="mb-2 flex flex-col font-extrabold">
                        Thể loại phim
                      </span>
                      <div className="w-full flex flex-wrap border rounded-xl border-gray-300">
                        {typesOfMovie.map((type) => {
                          return (
                            <div className="flex justify-between rounded-xl bg-gray-200 py-1 pl-3 pr-1 text-black m-1 items-center">
                              <span>{type.name}</span>
                              <i className="bx bx-x text-xl hover:text-white"></i>
                            </div>
                          );
                        })}
                        {typesOfMovie.length === 0 ? (
                          <span className="p-3">
                            {" "}
                            Chưa có thể loại phim nào
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <MenuChooseMovieType
                        listMovieTypes={listMovieType}
                        handleAddType={handleAddMovieType}
                      />
                    </div>
                  </div>

                  <div className="mb-4 p-6 overflow-hidden">
                    <input
                      type="submit"
                      value="Lưu"
                      className="inline-flex float-right px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        handleSubmit(onSaveData);
                      }}
                    />
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
