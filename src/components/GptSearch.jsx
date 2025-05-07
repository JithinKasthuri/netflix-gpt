import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import loginBg from "../assets/images/login-page-bg.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img src={loginBg} alt="login-page-background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
