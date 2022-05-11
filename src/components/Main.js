import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Articles from "./Articles.js";
import Article from "./Article.js";
import Books from "./Books.js";
import Help from "./Help.js";
import People from "./People.js";
function Main() {
  return (
    <>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:slug" element={<Article />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/people" element={<People />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Main;
