import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listPhongChieu } from "./fakeData";

const theaterApi = {
  getListPhongChieu: async (data_request) => {
    let data_response = null;
    let status = null;
    const url = "/cum-raps";
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      console.log(response.data);
      status = response.status;
      if (response.status === 200) {
        let listPhongChieu = [];
        response.data.forEach((element) => {
          // "maRap": 0,
          // "tenRap": "string",
          // "soGhe": 0,
          // "maCumRap": "string",
          const { maRap, tenRap, soGhe, maCumRap } = element;
          let phongChieu = {
            id: maRap,
            name: tenRap,
            amountSeats: soGhe,
            theaterSystemId: maCumRap,
            theaterSystemName: maCumRap,
          };
          listPhongChieu.push(phongChieu);
        });

        data_response = {
          listPhongChieu,
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
    //       listPhongChieu: listPhongChieu,
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  getListPhongChieuInCumRap: async (cumRapId) => {
    console.log("phong chieu in cum rap ", cumRapId);
    if (cumRapId === null) return theaterApi.getListPhongChieu();
    let data_response = null;
    let status = null;
    const url = `/cum-raps/${cumRapId}/raps`;
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      status = response.status;
      if (response.status === 200) {
        let listPhongChieu = [];
        response.data.forEach((element) => {
          // "maPhongChieu": "cgv-3/2",
          // "tenPhongChieu": "CGV 3 thang 2",
          // "thongTin": "blabla",
          // "maHeThongRap": "CGV"
          const { maRap, tenRap, soGhe, maCumRap } = element;
          let phongChieu = {
            id: maRap,
            name: tenRap,
            amountSeats: soGhe,
            maRap: maRap,
            theaterSystemId: maCumRap,
            theaterSystemName: maCumRap,
          };
          listPhongChieu.push(phongChieu);
        });

        data_response = {
          listPhongChieu,
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
  postPhongChieu: async (phongChieu) => {
    console.log(phongChieu);
    let data_response = null;
    let status = null;
    const url = "/raps";
    const { name, cumRapId } = phongChieu;
    const data_request = {
      tenRap: name,
      maCumRap: cumRapId,
      soGhe: 120,
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
  patchPhongChieu: async (phongChieu) => {
    let data_response = null;
    let status = null;
    const { id, name, cumRapId } = phongChieu;
    const url = `/raps/${id}`;
    const data_request = {
      tenRap: name,
      maCumRap: cumRapId,
      soGhe: 120,
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
  deletePhongChieu: async (phongChieu) => {
    let data_response = null;
    let status = null;
    const id = phongChieu;
    const url = `/raps/${id}`;
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
