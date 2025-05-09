import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TMDB_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
