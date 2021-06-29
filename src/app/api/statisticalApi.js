import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
// import { listStatisticals } from "./fakeData";

const statisticalApi = {
  getRevenueByTheaterSystem: async (loginInfo) => {
    const url = "/ve/doanh-thu-theo-he-thong-rap";
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getRevenueByTheaterSystem, ", res);
    return {
      status: res.status,
      data: {
        revenues: res.data,
      },
    };
    // let response = await fakeApi({
    //   // request: loginInfo,
    //   response: {
    //     status: 200,
    //     data: {
    //       listStatistical: listStatisticals,
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  postStatistical: async (statistical) => {
    const url = "/the-loai";
    const payload = { tenTheLoai: statistical.name };
    let res = await axiosClient.post(url, payload).then((res) => res);
    console.log("postStatistical, payload, response", payload, res);
    return { status: res?.status, data: { id: res?.data?.maTheLoai } };
    // let response = await fakeApi({
    //   // request: loginInfo,
    //   response: {
    //     status: 200,
    //     data: {
    //       id: Math.floor(Math.random() * 1000),
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
};

export default statisticalApi;
