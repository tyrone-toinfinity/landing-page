import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Learn from "./Learn";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
