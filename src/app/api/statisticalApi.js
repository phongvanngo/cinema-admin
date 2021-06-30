import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { revenueByMovie, revenueByTheaterSystem } from "./fakeData";
// import { listStatisticals } from "./fakeData";

const statisticalApi = {
  getRevenueByTheaterSystem: async () => {
    // const url = "/ve/doanh-thu-theo-he-thong-rap";
    // let res = await axiosClient.get(url).then((res) => res);
    // console.log("getRevenueByTheaterSystem, ", res);
    // return {
    //   status: res.status,
    //   data: {
    //     revenues: res.data,
    //   },
    // };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          revenues: revenueByTheaterSystem(),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  getRevenueByMovie: async () => {
    // const url = "/ve/doanh-thu-theo-phim/10";
    // let res = await axiosClient.get(url).then((res) => res);
    // console.log("getRevenueByMovie, ", res);
    // return {
    //   status: res.status,
    //   data: {
    //     revenues: res.data,
    //   },
    // };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          revenues: revenueByMovie(),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  getRevenueByDateTime: async () => {
    const url = "/ve/doanh-thu-theo-thang";
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getRevenueByDateTime, ", res);
    return {
      status: res.status,
      data: {
        revenues: res.data,
      },
    };
  },
};

export default statisticalApi;
