import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesAvailable from "./RoutesAvailable";

function App() {
  return (
    <BrowserRouter>
      <RoutesAvailable />
    </BrowserRouter>
  );
}

export default App;
