import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";

const adminAuthApi = {
  sendLoginInfo: async (loginInfo) => {
    let data = null;
    let status = null;
    const url = "/login";
    const { name, password } = loginInfo;
    let payload = { email: name, password: password };
    console.log(payload);
    let send = await axiosClient.post(url, payload).then((response) => {
      console.log(response);
      data = response.data;
      status = response.status;
      if (status === 200 && data?.maLoaiNguoiDung !== 2) {
        status = 1000;
      }
    });
    console.log(data, status);
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data:
          status === 200
            ? {
                token: data.token,
              }
            : null,
      });
    });
  },
};

export default adminAuthApi;
