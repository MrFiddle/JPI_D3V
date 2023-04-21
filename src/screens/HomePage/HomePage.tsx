import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="flex flex-col w-screen h-[100svh] bg-surface">
      <nav className="flex flex-row justify-between items-center pt-[20px]">
        <div className="w-[50%] h-[15%] flex flex-row justify-start items-center pl-[25px]">
          <img src={logo} alt="logo" className="w-[70px] h-[auto]" />
        </div>
        <div className="w-[50%] flex flex-row justify-end items-center pr-[25px]">
          {/* <p className="flex flex-row justify-end items-center text-justWhite text-[2rem] pr-[30px]">
            About Me
          </p> */}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", fontSize: "35px" }}
            className="lg:hidden"
          />
        </div>
      </nav>
      <div
        className="
      flex flex-col justify-center items-center w-full h-[85%]

      "
      >
        <img
          src={
            "https://preview.redd.it/6zlacmn9vtn71.gif?width=250&auto=webp&s=cf265bb3986b51dbccfdbb834f8651d02b2198f4"
          }
          alt="logo"
          className="w-[300px] h-[auto]"
        />
        <h1 className="text-primary text-[4rem] font-black">Hello Friend.</h1>
        <p
          className="text-justWhite text-[1.6rem] font-light
        "
        >
          Software Engineer 2024 | UI / UX Designer
        </p>
        <div className="relative w-[100px] h-[0] border-t-[2px] border-justWhite m-[20px]"></div>
        <div className="flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-justWhite text-[3rem] px-[10px] cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-justWhite text-[3rem] px-[10px] cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-justWhite text-[3rem] px-[10px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
