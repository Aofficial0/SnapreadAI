import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  w-full mb-10 pt-3">
        <img src={logo} alt="snapread-logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/Aofficial0")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Introducing <strong>Snapread</strong>: the ultimate app for article
        summarization. Say goodbye to information overload and lengthy reading
        sessions. With <strong>Snapread</strong>, you can effortlessly extract
        key insights from articles in seconds. Our intelligent algorithms
        analyze the content and deliver concise summaries, allowing you to stay
        informed on the go.
      </h2>
    </header>
  );
};

export default Hero;
