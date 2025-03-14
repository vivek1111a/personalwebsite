import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Pagenotfound from "./pages/Pagenotfound";
import Navbar from "./boilerplate/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./boilerplate/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";
import Blogfullinfo from "./components/blog/blogfullinfo";
import ProjectFullInfo from "./components/project/ProjectFullInfo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectFullInfo />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Blogfullinfo />} />
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
          </div>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
