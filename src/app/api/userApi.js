// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { listUsers } from "./fakeData";

const userApi = {
  getListUser: async () => {
    console.log("getListUser");
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listUser: listUsers,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  postUser: async (user) => {
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
  patchUser: async (user) => {
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
  deleteUser: async (user) => {
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

export default userApi;
