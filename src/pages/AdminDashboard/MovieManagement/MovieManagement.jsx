import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListMovie } from "app/redux/movieSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieTable from "./Movie.table";
import MovieFormModal from "./Movie.formDialog";
import { fetchListMovieType } from "app/redux/movieTypeSlice";

export default function MovieManagement() {
  const dispatch = useDispatch();
  const listMovie = useSelector((state) => state.movie.listMovie);

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý phim"));
    dispatch(fetchListMovieType({}));
    dispatch(fetchListMovie({}));
  }, [dispatch]);

  return (
    <div>
      <MovieFormModal />
      <div className="pt-20">
        <MovieTable listMovie={listMovie} />
      </div>
    </div>
  );
}
