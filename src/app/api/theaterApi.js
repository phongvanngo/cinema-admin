import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listTheaterSystem } from "./fakeData";

const theaterApi = {
  getListTheaterSystem: async (data_request) => {
    let data_response = null;
    let status = null;
    const url = "/he-thong-raps";
    let ka = await axiosClient
      .get("/cum-raps/bhd-hvt/raps")
      .then((response) => {
        console.log(response);
      });
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      status = response.status;
      if (response.status === 200) {
        let listTheaterSystem = [];
        response.data.forEach((element) => {
          const { maHeThongRap, tenHeThongRap, biDanh, logo } = element;
          let theaterSystem = {
            id: maHeThongRap,
            name: tenHeThongRap,
            alias: biDanh,
            logo: logo,
          };
          listTheaterSystem.push(theaterSystem);
        });

        data_response = {
          listTheaterSystem,
        };
      } else {
        data_response = null;
      }
    });
    console.log(data_response, status);
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data: data_response,
      });
    });

    // let response = await fakeApi({
    //   // request: loginInfo,
    //   response: {
    //     status: 200,
    //     data: {
    //       listTheaterSystem: listTheaterSystem,
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  postTheaterSystem: async (theaterSystem) => {
    console.log(theaterSystem);
    let data_response = null;
    let status = null;
    const url = "/he-thong-raps";
    const { name, logo, alias } = theaterSystem;
    const data_request = {
      maHeThongRap: name,
      tenHeThongRap: name,
      biDanh: alias,
      logo: logo,
    };
    let send = await axiosClient.post(url, data_request).then((response) => {
      console.log(response);
      status = response.status;
      if (response.status === 200) {
        data_response = { id: name };
      } else {
        data_response = null;
      }
    });
    console.log(data_response, status);
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data: data_response,
      });
    });

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
  patchTheaterSystem: async (theaterSystem) => {
    let data_response = null;
    let status = null;
    const { name, logo, alias, id } = theaterSystem;
    const url = `/he-thong-raps/${id}`;
    const data_request = {
      tenHeThongRap: name,
      biDanh: alias,
      logo: logo,
    };
    let send = await axiosClient.patch(url, data_request).then((response) => {
      console.log(response);
      status = response.status;
      if (status === 204) status = 200;
      if (status === 200) {
        data_response = { id: name };
      } else {
        data_response = null;
      }
    });
    console.log(data_response, status);
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data: data_response,
      });
    });

    //   let response = await fakeApi({
    //     // request: loginInfo,
    //     response: {
    //       status: 200,
    //       data: {},
    //     },
    //     timeOut: 1000,
    //   });
    //   return response;
  },
  deleteTheaterSystem: async (theaterSystem) => {
    let data_response = null;
    let status = null;
    const id = theaterSystem;
    const url = `/he-thong-raps/${id}`;
    let send = await axiosClient.delete(url).then((response) => {
      console.log(response);
      status = response.status;
      if (status === 204) status = 200;
      if (status === 200) {
        data_response = {};
      } else {
        data_response = null;
      }
    });
    console.log(data_response, status);
    return new Promise((resolve, reject) => {
      resolve({
        status: status,
        data: data_response,
      });
    });
  },
};

export default theaterApi;
