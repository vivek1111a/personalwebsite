import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import Subscribe from "./pages/subscribe";
import ReactGA from "react-ga4";

function App() {
  const google_analytics = import.meta.env.VITE_TEST_GOOGLE;
  ReactGA.initialize(google_analytics);
  const location = useLocation();
  ReactGA.send({
    hitType: "pageview",
    page: location.pathname,
  });
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
              <Route path="/subscribe" element={<Subscribe />} />
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
