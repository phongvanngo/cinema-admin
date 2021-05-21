// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { listTheaterSystem } from "./fakeData";

function schemaMapping(a, b, direction) {
  //direction:1 <-> a to b
  //direction:2 <-> b to a
}

const theaterApi = {
  getListTheaterSystem: async (loginInfo) => {
    const url = `/he-thong-raps`;

    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listTheaterSystem: listTheaterSystem,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  postTheaterSystem: async (theaterSystem) => {
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
  patchTheaterSystem: async (theaterSystem) => {
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
  deleteTheaterSystem: async (theaterSystem) => {
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

export default theaterApi;
