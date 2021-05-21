import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
});

export default function AdminSignInUI({ handleLogin }) {
  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSaveData(data) {
    // if (defaultData?.id === null) {
    //   console.log(data);
    //   dispatch(createTheaterSystem(data));
    //   dispatch(closeTheaterSystemFormDialog());
    // } else {
    //   dispatch(updateTheaterSystem({ ...data, id: defaultData.id }));
    //   dispatch(closeTheaterSystemFormDialog());
    // }
    handleLogin(data);
  }

  return (
    <div className="bg-gray-200 h-screen w-screen pt-20">
      <div className="bg-white m-auto w-4/12  shadow-md">
        <div className="p-10">
          <h1 className="text-xl text-center">Đăng nhập</h1>
          <form onSubmit={handleSubmit(onSaveData)}>
            <div className="mt-2 p-6">
              <div className="mb-8">
                <span className="mb-2 flex flex-col font-extrabold">
                  Tên đăng nhập
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
                  Mật khẩu
                </span>
                <input
                  type="password"
                  {...register("password", {})}
                  className={
                    "h-full w-full appearance-none rounded-full  w-30 py-4 px-6 leading-tight focus:outline-none border  text-gray-500" +
                    (errors.password
                      ? " border-red-500"
                      : " focus:border-indigo-500")
                  }
                />
                {errors.password ? (
                  <span className="ml-2 mt-2 text-red-500">
                    *Không được để trống
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-4  flex justify-center">
                <input
                  type="submit"
                  value="Lưu"
                  className="px-20  w-full  py-2 text-lg  font-medium text-blue-900 bg-blue-100 border border-transparent rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => {
                    handleSubmit(onSaveData);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
