// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { listMovieTypes } from "./fakeData";

const movieTypeApi = {
  getListMovieType: async (loginInfo) => {
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
  deleteMovieType: async (movieType) => {
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
