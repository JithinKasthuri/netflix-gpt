import { MOVIE_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={`${MOVIE_IMAGE_CDN}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
