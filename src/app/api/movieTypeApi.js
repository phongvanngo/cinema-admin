import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listMovieTypes } from "./fakeData";

const movieTypeApi = {
  getListMovieType: async (loginInfo) => {
    // const url = "/the-loai";
    // let res = await axiosClient.get(url).then((res) => res);
    // console.log("getListMovieType, ", res);
    // return {
    //   status: res.status,
    //   data: {
    //     listMovieType: res?.data.map((type) => {
    //       return { id: type.maTheLoai, name: type.tenTheLoai };
    //     }),
    //   },
    // };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listMovieType: listMovieTypes,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  postMovieType: async (movieType) => {
    // const url = "/the-loai";
    // const payload = { tenTheLoai: movieType.name };
    // let res = await axiosClient.post(url, payload).then((res) => res);
    // console.log("postMovieType, payload, response", payload, res);
    // return { status: res?.status, data: { id: res?.data?.maTheLoai } };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          id: Math.floor(Math.random() * 1000),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  patchMovieType: async (movieType) => {
    // const url = "/the-loai/" + movieType.id;
    // const payload = { tenTheLoai: movieType.name };
    // let res = await axiosClient.patch(url, payload).then((res) => res);
    // console.log("patchMovieType, payload, response", payload, res);
    // let status = res?.status === 200 || res?.status === 204 ? 200 : res?.status;
    // return { status: status, data: {} };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {},
      },
      timeOut: 1000,
    });
    return response;
  },
  deleteMovieType: async (movieTypeId) => {
    // const url = "/the-loai/" + movieTypeId;
    // let res = await axiosClient.delete(url).then((res) => res);
    // console.log("deleteMovieType, payload, response", res);
    // let status = res?.status === 200 || res?.status === 204 ? 200 : res?.status;
    // return { status: status, data: {} };
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {},
      },
      timeOut: 1000,
    });
    return response;
  },
};

export default movieTypeApi;
