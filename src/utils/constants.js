export const PHOTO_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};

export const MOVIE_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

export const NETFLIX_PLAY_BUTTON =
  "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];

export const GPT_PROMPT =
  "You are a Movie Recommendation Tool. Based on the user query, you have to provide 5 movies in a comma separated form. For example: Inception, Titanic, Triangle, Sholay, KGF-Chapter 1.";
