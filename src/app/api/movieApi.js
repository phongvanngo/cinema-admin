// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { listMovies } from "./fakeData";

const movieApi = {
  getListMovie: async (loginInfo) => {
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listMovie: listMovies,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  postMovie: async (movie) => {
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
  patchMovie: async (movie) => {
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
  deleteMovie: async (movie) => {
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

export default movieApi;
