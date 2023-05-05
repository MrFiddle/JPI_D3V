import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCode,
  faJedi,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center pt-[20px]">
      <div className="w-[50%] md:w-[20%] h-[15%] flex flex-row justify-start items-center pl-[25px]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[70px] h-[auto]" />
        </Link>
      </div>
      <div className="w-[50%] md:w-[80%] flex flex-row justify-end items-center pr-[25px]">
        <Link
          to="/aboutme"
          className="hidden md:flex items-center text-justWhite"
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
          />
          <p className="hidden md:flex md:flex-row md:justify-end md:items-center font-bold md:text-[1.8rem] pr-[30px] navbar-item">
            About Me
          </p>
        </Link>

        <Link
          to="/aboutme"
          className="hidden md:flex items-center text-justWhite"
        >
          <FontAwesomeIcon
            icon={faCode}
            style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
          />
          <p className="hidden md:flex md:flex-row md:justify-end md:items-center font-bold md:text-[1.8rem] pr-[30px] navbar-item">
            Tech Stack ~ Projects
          </p>
        </Link>

        <Link
          to="/aboutme"
          className="hidden md:flex items-center text-justWhite"
        >
          <FontAwesomeIcon
            icon={faJedi}
            style={{ color: "#fff", fontSize: "25px", marginRight: "10px" }}
          />
          <p className="hidden md:flex md:flex-row md:justify-end md:items-center font-bold md:text-[1.8rem] pr-[30px] navbar-item">
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
  );
};

export default NavBar;
