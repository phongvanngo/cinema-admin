// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { listCumRap } from "./fakeData";

const cumRapApi = {
  getListCumRap: async (loginInfo) => {
    console.log(listCumRap);
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listCumRap: listCumRap(),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  getListCumRapInTheaterSytem: async (theaterSytemId) => {
    console.log(listCumRap);
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listCumRap: theaterSytemId ? listCumRap(theaterSytemId) : [],
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  postCumRap: async (cumRap) => {
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
  patchCumRap: async (cumRap) => {
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
  deleteCumRap: async (cumRap) => {
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

export default cumRapApi;
