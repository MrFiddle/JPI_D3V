import logo from "../../assets/logo.svg";
import { icon } from "@fortawesome/fontawesome-svg-core";

const HomePage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-surface">
      <nav className="flex flex-row justify-evenly">
        <img src={logo} className="w-20 h-20" alt="logo" />
      </nav>
    </div>
  );
};

export default HomePage;
