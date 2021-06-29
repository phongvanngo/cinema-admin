import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
// import { listStatisticals } from "./fakeData";

const statisticalApi = {
  getRevenueByTheaterSystem: async () => {
    const url = "/ve/doanh-thu-theo-he-thong-rap";
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getRevenueByTheaterSystem, ", res);
    return {
      status: res.status,
      data: {
        revenues: res.data,
      },
    };
  },
  getRevenueByMovie: async () => {
    const url = "/ve/doanh-thu-theo-phim/2";
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getRevenueByMovie, ", res);
    return {
      status: res.status,
      data: {
        revenues: res.data,
      },
    };
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
