import { Dialog, Transition } from "@headlessui/react";
import { closeMovieFormDialog } from "app/redux/dialogSlice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { forwardRef, useState } from "react";
import { createMovie, updateMovie } from "app/redux/movieSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FilterMovieType from "./Movie.formDialog.filterMovieType";

const CustomDatePickerInput = forwardRef(
  ({ value, onClick, onChange }, ref) => (
    <input
      className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
      onClick={onClick}
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
);

const schema = yup.object().shape({
  name: yup.string().required(),
});

export default function MovieFormModal() {
  const dispatch = useDispatch();
  let listMovieType = useSelector((state) => state.movieType.listMovieType);
  listMovieType = [{ id: null, name: "Không" }, ...listMovieType];
  const [selectedMovieType, setSelectedTheaterSytem] = useState(
    listMovieType[0]
  );

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
    (state) => state.dialog.movieFormDialog
  );

  const [startDate, setStartDate] = useState(new Date());

  function onSaveData(data) {
    let movieTypeInfo = {
      movieTypeId: selectedMovieType?.id,
      movieTypeName: selectedMovieType?.name,
    };
    if (defaultData?.id === null) {
      console.log(data);
      dispatch(
        createMovie({
          ...data,
          premiereDay: startDate.toDateString(),
          ...movieTypeInfo,
        })
      );
      dispatch(closeMovieFormDialog());
    } else {
      dispatch(
        updateMovie({
          ...data,
          premiereDay: startDate.toDateString(),
          id: defaultData.id,
          ...movieTypeInfo,
        })
      );
      dispatch(closeMovieFormDialog());
    }
  }
  function handleCloseModal() {
    dispatch(closeMovieFormDialog());
  }

  console.log("render");

  useEffect(() => {
    clearErrors("name");
    if (defaultData?.id) {
      const { name, image, trailer, description, premiereDay } = defaultData;
      setValue("name", name);
      setValue("image", image);
      setValue("trailer", trailer);
      setValue("description", description);
      setStartDate(new Date(premiereDay));
    } else {
      setValue("name", "");
      setValue("image", "");
      setValue("trailer", "");
      setValue("description", "");
      setStartDate(new Date());
    }
  }, [setValue, defaultData]);

  console.log(errors);

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
                    <h1 className="font-normal">
                      {defaultData?.id
                        ? "Chỉnh sửa hệ thống rạp chiếu phim"
                        : "Thêm hệ thống rạp chiếu"}
                    </h1>
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
                      <span className="mb-2 flex flex-col font-extrabold">
                        Tên hệ thống rạp chiếu
                      </span>
                      <input
                        type="text"
                        {...register("name", {})}
                        className={
                          "h-full w-full appearance-none rounded-full  w-30 py-4 px-6 leading-tight focus:outline-none border  text-gray-500" +
                          (errors.name
                            ? " border-red-500"
                            : " focus:border-indigo-500")
                        }
                      />
                      {errors.name ? (
                        <span className="ml-2 mt-2 text-red-500">
                          *Không được để trống
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Hình ảnh
                      </span>
                      <input
                        type="text"
                        {...register("image", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>
                    {/* 
                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Thể loại phim
                      </span>
                      <FilterMovieType
                        listMovieType={listMovieType}
                        selected={selectedMovieType}
                        setSelected={setSelectedTheaterSytem}
                      />
                    </div> */}

                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Trailer url
                      </span>
                      <input
                        type="text"
                        {...register("trailer", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>
                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Mô tả
                      </span>
                      <input
                        type="text"
                        {...register("description", {})}
                        className="h-full w-full appearance-none rounded-full border w-30 py-4 px-6 leading-tight focus:outline-none focus:border-indigo-500 text-gray-500"
                      />
                    </div>

                    <div className="mb-8">
                      <span className="font-extrabold mb-2 flex flex-col">
                        Ngày khởi chiếu
                      </span>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        customInput={<CustomDatePickerInput />}
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
