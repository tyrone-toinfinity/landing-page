import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
