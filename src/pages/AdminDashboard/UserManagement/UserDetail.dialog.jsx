import { Dialog, Transition } from "@headlessui/react";
import { closeUserDetailDialog } from "app/redux/dialogSlice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { forwardRef, useState } from "react";
import { createUser, updateUser } from "app/redux/userSlice";
const schema = yup.object().shape({});

export default function UserDetailModal() {
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
    (state) => state.dialog.userDetailDialog
  );

  function onSaveData() {}
  function handleCloseModal() {
    dispatch(closeUserDetailDialog());
  }

  useEffect(() => {}, [setValue, defaultData]);

  console.log("userDetailDialog, defaultData: ", defaultData);

  const {
    avatar,
    diaChi,
    diemTichLuy,
    email,
    hoTen,
    ngaySinh,
    password,
    soDT,
    tongDiemTichLuy,
    username,
  } = defaultData || {};

  if (!isOpen) return null;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10000 overflow-y-auto bg-black bg-opacity-60"
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
                    <h1 className="font-normal">Thông tin khách hàng</h1>
                    <button
                      onClick={handleCloseModal}
                      className="focus:outline-none hover:text-gray-400"
                    >
                      <i className="bx bx-x text-xl"></i>
                    </button>
                  </div>
                </Dialog.Title>
                <div>
                  <div className="mt-2 p-6">
                    <p>
                      Họ tên:&nbsp;
                      <span className="font-bold">{hoTen}</span>
                    </p>
                    <p>
                      Ngày sinh: &nbsp;
                      <span className="font-bold">{ngaySinh}</span>
                    </p>
                    <p>
                      Username: &nbsp;
                      <span className="font-bold">{username}</span>
                    </p>
                    <p>
                      Email: &nbsp;
                      <span className="font-bold">{email}</span>
                    </p>
                    <p>
                      Số điện thoại: &nbsp;
                      <span className="font-bold">{soDT}</span>
                    </p>
                    <p>
                      Điểm tích lũy: &nbsp;
                      <span className="font-bold">{diemTichLuy}</span>
                    </p>
                    <p>
                      Tổng điểm tích lũy: &nbsp;
                      <span className="font-bold">{tongDiemTichLuy}</span>
                    </p>
                  </div>

                  <div className="mb-4 justify-center p-6 flex items-center">
                    <button
                      className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => {
                        handleCloseModal();
                      }}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
