import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      TMDB_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
