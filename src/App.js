import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import WriteBlog from "./components/WriteBlog";
import BlogPage from "./components/BlogPage";

function App() {
  const [mobileHeader, setmobileHeader] = useState(false);
  const [solidHeader, setsolidHeader] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setmobileHeader(false);
      if (window.scrollY < 10) setsolidHeader(false);
      else setsolidHeader(true);
    });

    return () => {
      document.removeEventListener("scroll");
    };
  }, []);
  return (
    <Router>
      <Loader />

      <Switch>
        <Route path="/addblog">
          <WriteBlog />
        </Route>
        <Route path="/blogs/:blogTitle">
          <BlogPage />
        </Route>
        <Route path="/projects">
          <Header
            path="projects"
            backgroundSolid={solidHeader}
            mobileHeader={mobileHeader}
            setmobileHeader={setmobileHeader}
          />
          <Projects />
          <Footer />
        </Route>

        <Route path="/" exact>
          <Header
            path="home"
            backgroundSolid={solidHeader}
            mobileHeader={mobileHeader}
            setmobileHeader={setmobileHeader}
          />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
