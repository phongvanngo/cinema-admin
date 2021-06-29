import axiosClient from "./AxiosClient";
import { fakeApi } from "./fakeApi";
import { listMovies, listMovieTypes } from "./fakeData";

const movieApi = {
  getListMovie: async (data_request) => {
    // /*
    let data_response = null;
    let status = null;
    const url = "/phim";
    let send = await axiosClient.get(url).then((response) => {
      status = response.status;
      if (response.status === 200) {
        let listMovie = [];
        response.data.forEach((element) => {
          //       "maPhim": 0,
          // "tenPhim": "string",
          // "trailer": "string",
          // "hinhAnh": "string",
          // "moTa": "string",
          // "ngayKhoiChieu": "2021-05-21T15:37:20.090Z",
          // "danhGia": 0,
          // "biDanh": "string",
          // "daXoa": true,
          const {
            maPhim,
            tenPhim,
            trailer,
            hinhAnh,
            moTa,
            ngayKhoiChieu,
            danhGia,
          } = element;
          let movie = {
            name: tenPhim,
            id: maPhim,
            image: hinhAnh,
            trailer: trailer,
            description: moTa,
            premiereDay: ngayKhoiChieu,
            rate: danhGia,
          };
          listMovie.push(movie);
        });

        data_response = {
          listMovie,
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
    // */
    /*
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
    */
  },
  getListMovieInTheaterSytem: async (theaterSystemId) => {
    if (theaterSystemId === null) return movieApi.getListMovie();
    let data_response = null;
    let status = null;
    const url = `/phim/${theaterSystemId}/he-thong-rap`;
    let send = await axiosClient.get(url).then((response) => {
      status = response.status;
      if (response.status === 200) {
        let listMovie = [];
        response.data.forEach((element) => {
          // "maMovie": "cgv-3/2",
          // "tenMovie": "CGV 3 thang 2",
          // "thongTin": "blabla",
          // "maHeThongRap": "CGV"
          const { maMovie, tenMovie, thongTin, maHeThongRap } = element;
          let movie = {
            id: maMovie,
            name: tenMovie,
            information: thongTin,
            theaterSystemId: maHeThongRap,
            theaterSystemName: null,
          };
          listMovie.push(movie);
        });

        data_response = {
          listMovie,
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
  },
  postMovie: async (movie) => {
    let data_response = null;
    let status = null;
    const url = "/phim";
    const { id, name, image, trailer, description, premiereDay } = movie;
    const data_request = {
      maPhim: id,
      tenPhim: name,
      trailer: trailer,
      hinhAnh: image,
      moTa: description,
      ngayKhoiChieu: new Date(premiereDay).toISOString(),
      biDanh: `${Math.floor(Math.random() * 100)}`,
      danhGia: 0,
    };
    let send = await axiosClient.post(url, data_request).then((response) => {
      console.log("postMovie, respónse", response);
      status = response.status;
      if (response.status === 200) {
        data_response = { id: response?.data?.maPhim };
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
    //       id: Math.floor(Math.random() * 1000),
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  patchMovie: async (movie) => {
    let data_response = null;
    let status = null;
    const { id, name, image, trailer, description, premiereDay, rate } = movie;
    const url = `/phim/${id}`;
    const data_request = {
      tenPhim: name,
      trailer: trailer,
      hinhAnh: image,
      moTa: description,
      ngayKhoiChieu: new Date(premiereDay).toISOString(),
      biDanh: `${Math.floor(Math.random() * 100)}`,
      danhGia: 0,
    };
    let send = await axiosClient.patch(url, data_request).then((response) => {
      status = response.status;
      if (status === 204) status = 200;
      if (status === 200) {
        data_response = { id: name };
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
  deleteMovie: async (movie) => {
    let data_response = null;
    let status = null;
    const id = movie;
    const url = `/phim/${id}`;
    let send = await axiosClient.delete(url).then((response) => {
      status = response.status;
      console.log("deleteMovieApi, response", response);
      if (status === 204) status = 200;
      if (status === 200) {
        data_response = {};
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
  },

  getTypeOfMovie: async (movieId) => {
    const url = `/phims/${movieId}/the-loais`;
    console.log("getTypeOfMovieApi, movieId", movieId);
    let res = await axiosClient.get(url).then((res) => res);
    console.log("getTypeOfMovie, ", res);
    let status = res?.status === 200 || res?.status === 204 ? 200 : res?.status;
    return {
      status: status,
      data: {
        listTypes: res?.data.map((e) => {
          return { id: e.maTheLoai, name: e.tenTheLoai };
        }),
      },
    };
    // let response = await fakeApi({
    //   request: "",
    //   response: {
    //     status: 200,
    //     data: {
    //       listTypes: listMovieTypes.slice(0, 5),
    //     },
    //   },
    //   timeOut: 1000,
    // });
    // return response;
  },
  patchTypeOfMovie: async ({ listTypes, movieId }) => {
    const url = `/phims/${movieId}/the-loais`;
    let theLoai = listTypes.map((type) => {
      return { maTheLoai: type.id };
    });
    let res = await axiosClient.patch(url, { theLoai }).then((res) => res);
    console.log("pacthTypeOfMovie: res", res);
    let status = res?.status === 200 || res?.status === 204 ? 200 : res?.status;
    return { status: status, data: {} };
    // let response = await fakeApi({
    //   request: "",
    //   response: {
    //     status: 200,
    //   },
    //   timeOut: 500,
    // });
  },
};

export default movieApi;
