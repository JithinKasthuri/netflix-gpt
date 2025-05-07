import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      TMDB_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
