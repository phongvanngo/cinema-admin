import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";

const adminAuthApi = {
  sendLoginInfo: async (loginInfo) => {
    const url = "/login";
    const { name, password } = loginInfo;
    let payload = { email: name, password: password };

    let response = await axiosClient.post(url, payload).then((res) => {
      console.log("sendLoginInfo response", res);
      if (res.status === 200 && res.data?.maLoaiNguoiDung == 1) {
        //admin
        return { status: 200, data: { token: res.data.token } };
      } else return { status: 1000, data: null };
    });

    return response;

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
  },
};

export default adminAuthApi;
