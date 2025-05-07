import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, gptMovieNames } = gpt;

  if (!gptMovies) return null;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
