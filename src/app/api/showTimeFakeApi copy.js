// import axiosClient from './AxiosClient';
import { isDateEqual } from "app/myLibrary/utilities";
import { fakeApi } from "./fakeApi";
import { listShowTime } from "./fakeData";

const showTimeApi = {
  getListShowTime: async (params) => {
    const { cumRapId, time } = params;

    let showTimes = listShowTime.filter((e) => e.cumRapId === cumRapId);
    showTimes = showTimes.filter((e) => isDateEqual(e.time, time.toString()));
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listShowTime: showTimes,
        },
      },
      timeOut: 1000,
    });

    return response;
  },
  postShowTime: async (showTime) => {
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
  patchShowTime: async (showTime) => {
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
  deleteShowTime: async (showTime) => {
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

export default showTimeApi;
