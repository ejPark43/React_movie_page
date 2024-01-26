import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./routes/Home"; // import 중요!!!
import Detail from "./routes/Detail";
function App() {
  // router는 url에서 마지막에 붙는 /movies/123 같은 부분
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* path="/"라는 뜻은 홈 라우터로 간다는 의미*/}
    </Router>
  );
}

export default App;
