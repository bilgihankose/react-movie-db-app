import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="react-movie-db-app/" element={<Home />} />
      <Route path="react-movie-db-app/movies/:id" element={<SingleMovie />} />
    </Routes>
  );
}

export default App;
