import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { isDateEqual } from "app/myLibrary/utilities";

import { listShowTime } from "./fakeData";

const theaterApi = {
  getListShowTime: async (data_request) => {
    console.log(data_request);
    const { cumRapId, time } = data_request;

    let data_response = null;
    let status = null;
    const url = "/lich-chieu";

    // {
    //   "where": {
    //     "maCumRap":"bhd-hvt"
    //   },
    //   "fields": {
    //     "maLichChieu": true,
    //     "ngayChieuGioChieu": true,
    //     "giaVe": true,
    //     "thoiLuong": true,
    //     "maRap": true,
    //     "maHeThongRap": true,
    //     "maCumRap": true,
    //     "maPhim": true
    //   }
    // }

    let dataRequest = {
      where: {
        maCumRap: cumRapId,
      },
      field: {
        maLichChieu: true,
        ngayChieuGioChieu: true,
        giaVe: true,
        thoiLuong: true,
        maRap: true,
        maHeThongRap: true,
        maCumRap: true,
        maPhim: true,
      },
    };

    console.log("fsekjfsejflselk fjlksjflj sej");

    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      console.log(response.data);
      status = response.status;
      if (response.status === 200) {
        let listShowTime = [];
        response.data.forEach((element) => {
          // "maLichChieu": true,
          // "ngayChieuGioChieu": true,
          // "giaVe": true,
          // "thoiLuong": true,
          // "maRap": true,
          // "maHeThongRap": true,
          // "maCumRap": true,
          // "maPhim": true
          const {
            maPhim,
            thoiLuong,
            maLichChieu,
            ngayChieuGioChieu,
            giaVe,
            maRap,
            maCumRap,
          } = element;
          let showTime = {
            id: maLichChieu,
            time: ngayChieuGioChieu,
            giaVe: giaVe,
            phongChieuId: maRap,
            movieId: maPhim,
            thoiLuong: thoiLuong,
            cumRapId: maCumRap,
          };
          listShowTime.push(showTime);
        });

        let showTimes = listShowTime.filter((e) => e.cumRapId === cumRapId);
        showTimes = showTimes.filter((e) =>
          isDateEqual(e.time, time.toString())
        );

        data_response = {
          listShowTime: showTimes,
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
    //       listShowTime: listShowTime,
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  getListShowTimeInTheaterSytem: async (theaterSystemId) => {
    if (theaterSystemId === null) return theaterApi.getListShowTime();
    let data_response = null;
    let status = null;
    const url = `/he-thong-raps/${theaterSystemId}/cum-raps`;
    let send = await axiosClient.get(url).then((response) => {
      console.log(response);
      status = response.status;
      if (response.status === 200) {
        let listShowTime = [];
        response.data.forEach((element) => {
          // "maShowTime": "cgv-3/2",
          // "tenShowTime": "CGV 3 thang 2",
          // "thongTin": "blabla",
          // "maHeThongRap": "CGV"
          const { maShowTime, tenShowTime, thongTin, maHeThongRap } = element;
          let showTime = {
            id: maShowTime,
            name: tenShowTime,
            information: thongTin,
            theaterSystemId: maHeThongRap,
            theaterSystemName: null,
          };
          listShowTime.push(showTime);
        });

        data_response = {
          listShowTime,
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
  postShowTime: async (showTime) => {
    console.log("showTime: ", showTime);
    let data_response = null;
    let status = null;
    const url = "/lich-chieu";
    const { time, phongChieuId, movieId, giaVe, thoiLuong, maCumRap } =
      showTime;
    const data_request = {
      ngayChieuGioChieu: time,
      giaVe: giaVe,
      maPhim: movieId,
      maRap: phongChieuId,
      thoiLuong: thoiLuong,
      maCumRap: maCumRap,
    };
    console.log(data_request);
    let send = await axiosClient.post(url, data_request).then((response) => {
      console.log("suat chieu response: ", response);
      status = response.status;
      if (response.status === 200) {
        data_response = { id: null };
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
  patchShowTime: async (showTime) => {
    let data_response = null;
    let status = null;
    const { name, information, theaterSystemId, id } = showTime;
    const url = `/cum-raps/${id}`;
    const data_request = {
      tenShowTime: name,
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
  deleteShowTime: async (showTime) => {
    let data_response = null;
    let status = null;
    const id = showTime;
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
