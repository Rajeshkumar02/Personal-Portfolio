import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/features/Home";
import Navbar_ from "./components/features/Navbar";
import About from "./components/features/About";
import Blog from "./components/features/Blog";
import View_Blog from "./components/features/Blog/View_blog";
import Contact from "./components/features/Contact";
import Loader from "./components/features/Loader";
import Footer from "./components/features/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar_ />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<View_Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
