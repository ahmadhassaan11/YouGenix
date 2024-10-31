import video3 from "../assets/video3.mp4";
import video2 from "../assets/video2.mp4";
import { getButtonClass } from "./Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Unleash Viral Potential
        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text"> for YouTubers</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your YouTube journey with AI-driven insights and trend analysis. Generate impactful video ideas tailored to your audience, boost
        creativity, and transform your content strategy today!
      </p>
      <div className="flex justify-center my-10 space-x-6">
        <a href="#" className={getButtonClass("default")}>
          Start for free
        </a>
        <a href="#" className={getButtonClass("gradient")}>
          Learn More
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-red-400 mx-2 my-4">
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-red-400 mx-2 my-4">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
