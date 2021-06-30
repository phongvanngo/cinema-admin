import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";

const adminAuthApi = {
  sendLoginInfo: async (loginInfo) => {
    const url = "/login";
    const { name, password } = loginInfo;
    let payload = { email: name, password: password };

    // let response = await axiosClient.post(url, payload).then((res) => {
    //   switch (res?.status) {
    //     case 200:
    //       if (res.data?.maLoaiNguoiDung === 1) {
    //         return { status: 200, data: { token: res.data.token } };
    //       } else {
    //         return { status: 1001, data: null };
    //       }
    //       break;
    //     default:
    //       return { status: res?.status };
    //       break;
    //   }
    // if (res.status === 200 && res.data?.maLoaiNguoiDung == 1) {
    //   //admin
    //   return { status: 200, data: { token: res.data.token } };
    // } else return { status: 1000, data: null };
    // });

    // return response;

    // let send = await axiosClient.post(url, payload).then((response) => {
    //   data = response.data;
    //   status = response.status;
    //   if (status === 200 && data?.maLoaiNguoiDung !== 2) {
    //     status = 1000;
    //   }
    // });

    // return new Promise((resolve, reject) => {
    //   resolve({
    //     status: status,
    //     data:
    //       status === 200
    //         ? {
    //             token: data.token,
    //           }
    //         : null,
    //   });
    // });

    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          token: "token",
        },
      },
      timeOut: 1000,
    });
    return response;
  },
};

export default adminAuthApi;
