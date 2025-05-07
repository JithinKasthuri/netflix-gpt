import { NETFLIX_PLAY_BUTTON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className="rounded-lg bg-white p-4 px-16 text-xl text-black hover:opacity-80">
          <span className="flex items-center gap-2">
            <img
              className="h-4 w-auto"
              alt="netflix-play-button"
              src={NETFLIX_PLAY_BUTTON}
            />
            Play
          </span>
        </button>
        <button className="mx-2 rounded-lg bg-gray-500 p-4 px-16 text-xl text-white hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
