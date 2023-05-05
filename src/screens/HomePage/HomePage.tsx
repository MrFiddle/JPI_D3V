import "animate.css";
import { onClickURL } from "../../functions/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/NavBar/NavBar";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="flex flex-col w-screen h-[100svh] bg-surface">
      <NavBar />
      <div
        className="
      flex flex-col justify-center items-center w-full h-[85%]
      md:flex-row
      "
      >
        <img
          src={
            "https://preview.redd.it/6zlacmn9vtn71.gif?width=250&auto=webp&s=cf265bb3986b51dbccfdbb834f8651d02b2198f4"
          }
          alt="logo"
          className="md:w-[250px] lg:w-[300px] w-[300px] h-[auto] cursor-pointer"
          onClick={() =>
            onClickURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          }
        />
        <div className=" flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-primary text-[4rem] font-black md:text-[5rem] lg:text-[6.4rem] animate__animated animate__fadeInUp">
            Hello Friend.
          </h1>

          <p className="text-justWhite text-[1.6rem] font-light md:text-[2rem] lg:text-[2.4rem] animate__animated animate__fadeInUp animate__delay-1s">
            Software Engineer 2024 | UI / UX Designer
          </p>

          <div className="relative w-[100px] h-[0] border-t-[2px] border-justWhite m-[20px] md:mx-0 md:w-[60%] animate__animated animate__fadeInUp animate__delay-2s"></div>
          <div className="flex flex-row justify-center items-center animate__animated animate__fadeInUp animate__delay-2s">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-justWhite text-[3rem] px-[10px] cursor-pointer md:text-[3.5rem] lg:text-[4rem]"
              onClick={() => onClickURL("https://twitter.com/JPi_d3v")}
            />

            <FontAwesomeIcon
              icon={faGithub}
              className="text-justWhite text-[3rem] px-[10px] cursor-pointer  md:text-[3.5rem] lg:text-[4rem]"
              onClick={() => onClickURL("https://github.com/MrFiddle")}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-justWhite text-[3rem] px-[10px] cursor-pointer  md:text-[3.5rem] lg:text-[4rem]"
              onClick={() => onClickURL("https://www.linkedin.com/in/jppd/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
