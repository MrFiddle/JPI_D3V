import logo from "../../assets/logo.svg";
import { onClickURL } from "../../functions/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCode,
  faJedi,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="flex flex-col w-screen h-[100svh] bg-surface">
      <nav className="flex flex-row justify-between items-center pt-[20px]">
        <div className="w-[50%] md:w-[20%] h-[15%] flex flex-row justify-start items-center pl-[25px]">
          <img src={logo} alt="logo" className="w-[70px] h-[auto]" />
        </div>
        <div className="w-[50%] md:w-[80%] flex flex-row justify-end items-center pr-[25px]">
          <Link to="/aboutme" className="flex items-center text-justWhite">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
            />
            <p className="hidden md:flex md:flex-row md:justify-end md:items-center  font-bold md:text-[1.8rem] pr-[30px]">
              About Me
            </p>
          </Link>

          <Link to="/aboutme" className="flex items-center text-justWhite">
            <FontAwesomeIcon
              icon={faCode}
              style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
            />
            <p className="hidden md:flex md:flex-row md:justify-end md:items-center font-bold md:text-[1.8rem] pr-[30px]">
              Tech Stack ~ Projects
            </p>
          </Link>

          <Link to="/aboutme" className="flex items-center text-justWhite">
            <FontAwesomeIcon
              icon={faJedi}
              style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
            />
            <p className="hidden md:flex md:flex-row md:justify-end md:items-center font-bold md:text-[1.8rem] pr-[30px]">
              Status
            </p>
          </Link>

          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", fontSize: "35px" }}
            className="md:hidden lg:hidden"
          />
        </div>
      </nav>
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
          className="md:w-[250px] lg:w-[300px] w-[300px] h-[auto]"
        />
        <div className=" flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-primary text-[4rem] font-black md:text-[5rem] lg:text-[6.4rem]">
            Hello Friend.
          </h1>

          <p className="text-justWhite text-[1.6rem] font-light md:text-[2rem] lg:text-[2.4rem]">
            Software Engineer 2024 | UI / UX Designer
          </p>

          <div className="relative w-[100px] h-[0] border-t-[2px] border-justWhite m-[20px] md:mx-0 md:w-[60%]"></div>
          <div className="flex flex-row justify-center items-center">
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
