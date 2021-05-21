import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listCumRap } from "./fakeData";

const theaterApi = {
  getListCumRap: async (data_request) => {
    let data_response = null;
    let status = null;
    const url = "/cum-raps";
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      console.log(response.data);
      status = response.status;
      if (response.status === 200) {
        let listCumRap = [];
        response.data.forEach((element) => {
          // "maCumRap": "cgv-3/2",
          // "tenCumRap": "CGV 3 thang 2",
          // "thongTin": "blabla",
          // "maHeThongRap": "CGV"
          const { maCumRap, tenCumRap, thongTin, maHeThongRap } = element;
          let cumRap = {
            id: maCumRap,
            name: tenCumRap,
            information: thongTin,
            theaterSystemId: maHeThongRap,
            theaterSystemName: null,
          };
          listCumRap.push(cumRap);
        });

        data_response = {
          listCumRap,
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
    //       listCumRap: listCumRap,
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  getListCumRapInTheaterSytem: async (theaterSystemId) => {
    if (theaterSystemId === null) return theaterApi.getListCumRap();
    let data_response = null;
    let status = null;
    const url = `/cum-raps/${theaterSystemId}/he-thong-rap`;
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      status = response.status;
      if (response.status === 200) {
        let listCumRap = [];
        response.data.forEach((element) => {
          // "maCumRap": "cgv-3/2",
          // "tenCumRap": "CGV 3 thang 2",
          // "thongTin": "blabla",
          // "maHeThongRap": "CGV"
          const { maCumRap, tenCumRap, thongTin, maHeThongRap } = element;
          let cumRap = {
            id: maCumRap,
            name: tenCumRap,
            information: thongTin,
            theaterSystemId: maHeThongRap,
            theaterSystemName: null,
          };
          listCumRap.push(cumRap);
        });

        data_response = {
          listCumRap,
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
  },
  postCumRap: async (cumRap) => {
    console.log(cumRap);
    let data_response = null;
    let status = null;
    const url = "/cum-raps";
    const { name, information, theaterSystemId } = cumRap;
    const data_request = {
      maCumRap: name,
      tenCumRap: name,
      maHeThongRap: theaterSystemId,
      thongTin: information,
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
  patchCumRap: async (cumRap) => {
    let data_response = null;
    let status = null;
    const { name, information, theaterSystemId, id } = cumRap;
    const url = `/cum-raps/${id}`;
    const data_request = {
      tenCumRap: name,
      maHeThongRap: theaterSystemId,
      thongTin: information,
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
  deleteCumRap: async (cumRap) => {
    let data_response = null;
    let status = null;
    const id = cumRap;
    const url = `/cum-raps/${id}`;
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
