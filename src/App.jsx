import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Catagori from "./pages/catagori";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:postId" element={<Details />} />
      <Route path="/catagori/:catagotiId" element={<Catagori />} />
    </Routes>
  );
};
export default App;
