import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/NavBar/NavBar";
import { faAnglesDown, faUser } from "@fortawesome/free-solid-svg-icons";
import "./AboutMe.css";

const AboutMe = () => {
  function onClickTravelToID(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <div className="flex flex-col bg-surface overflow-x-hidden aboutme-container">
      <div className="flex flex-col h-[100svh] bg-surface snap-proximity scrollable">
        <NavBar />
        <div className="aboutme-title flex flex-col justify-center items-center md:flex-row pt-[30px]">
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary text-[5rem] px-[10px] md:pt-0 cursor-pointer  md:text-[3.5rem] lg:text-[6rem]"
          />
          <h1 className="text-justWhite font-black text-[4rem]">Who Am I?</h1>
        </div>
        <div className="aboutme-content flex flex-col justify-center items-center my-[20px]">
          <img
            src={
              "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1"
            }
            alt="me"
            className="w-[180px] h-[180px] rounded-full object-cover shadow-xl mb-[20px]"
          />
          <p className="w-[80%] text-[1.6rem] text-justify text-justWhite font-light">
            My name is Juan Pablo, a cat and tech enthusiast currently cursing a
            computer science bachelor degree in Tecnológico de Monterrey. I'm a
            guy who has a big passion for UI / UX design and frontend
            development. I also sing, play videogames, watch tv shows and listen
            to Coldplay in my free time:)
          </p>
          <FontAwesomeIcon
            icon={faAnglesDown}
            beat
            style={{ animationDuration: "2s" }}
            className="text-primary text-[5rem] px-[10px] pt-[30px] cursor-pointer  md:text-[3.5rem] lg:text-[4rem]"
            onClick={() => onClickTravelToID("photodump")}
          />
        </div>
      </div>
      <div
        id="photodump"
        className="flex flex-col h-[100svh] bg-surface snap-proximity scrollable"
      ></div>
    </div>
  );
};

export default AboutMe;
