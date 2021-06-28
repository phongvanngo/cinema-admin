import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listPhongChieu } from "./fakeData";

const theaterApi = {
  getListPhongChieu: async (data_request) => {
    let data_response = null;
    let status = null;
    const url = "/cum-raps";
    let send = await axiosClient.get(url).then((response) => {
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
    if (cumRapId === null) return theaterApi.getListPhongChieu();
    let data_response = null;
    let status = null;
    const url = `/cum-raps/${cumRapId}/raps`;
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getListPhongChieu, response", res);
    return {
      status: res?.status,
      data: {
        listPhongChieu: res?.data.map((element) => {
          const { maRap, tenRap, soGhe, maCumRap } = element;
          return {
            id: maRap,
            name: tenRap,
            amountSeats: soGhe,
            maRap: maRap,
            theaterSystemId: maCumRap,
            theaterSystemName: maCumRap,
          };
        }),
      },
    };
    // let send = await axiosClient.get(url).then((response) => {
    //   status = response.status;
    //   if (response.status === 200) {
    //     let listPhongChieu = [];
    //     response.data.forEach((element) => {
    //       // "maPhongChieu": "cgv-3/2",
    //       // "tenPhongChieu": "CGV 3 thang 2",
    //       // "thongTin": "blabla",
    //       // "maHeThongRap": "CGV"
    //       const { maRap, tenRap, soGhe, maCumRap } = element;
    //       let phongChieu = {
    //         id: maRap,
    //         name: tenRap,
    //         amountSeats: soGhe,
    //         maRap: maRap,
    //         theaterSystemId: maCumRap,
    //         theaterSystemName: maCumRap,
    //       };
    //       listPhongChieu.push(phongChieu);
    //     });

    //     data_response = {
    //       listPhongChieu,
    //     };
    //   } else {
    //     data_response = null;
    //   }
    // });
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     status: status,
    //     data: data_response,
    //   });
    // });
  },
  postPhongChieu: async (phongChieu) => {
    const url = "/raps";
    const { name, cumRapId } = phongChieu;
    const data_request = {
      tenRap: name,
      maCumRap: cumRapId,
      soGhe: 120,
    };
    let response = await axiosClient.post(url, data_request).then((res) => {
      console.log("postPhongChieuApi, response", res);
      return res;
    });

    return { status: response?.status, data: { id: name } };

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
    const { id, name, cumRapId } = phongChieu;
    const url = `/raps/${id}`;
    const data_request = {
      tenRap: name,
      maCumRap: cumRapId,
      soGhe: 120,
    };
    let response = await axiosClient.patch(url, data_request).then((res) => {
      console.log("patchPhongChieu, response", res);
      return res;
    });
    let status =
      response.status === 200 || response.status === 204
        ? 200
        : response.status;
    return { status, data: response.data };

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
    const id = phongChieu;
    const url = `/raps/${id}`;
    let response = await axiosClient.delete(url).then((res) => {
      console.log("deletePhongChieu: ,response", res);
      return res;
    });

    let status =
      response.status === 200 || response.status === 204
        ? 200
        : response.status;
    return { status, data: response.data };
  },
};

export default theaterApi;
