import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import ClassPage from "./pages/classes/ClassPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const classes = [
  { slug: "play-school", name: "Play School" },
  { slug: "nursery", name: "Nursery" },
  { slug: "lkg", name: "LKG" },
  { slug: "ukg", name: "UKG" },
  { slug: "1st-class", name: "1st Class" },
  { slug: "2nd-class", name: "2nd Class" },
  { slug: "3rd-class", name: "3rd Class" },
  { slug: "4th-class", name: "4th Class" },
  { slug: "5th-class", name: "5th Class" },
  { slug: "6th-class", name: "6th Class" },
  { slug: "7th-class", name: "7th Class" }
];

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar classes={classes} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {classes.map((item) => (
            <Route
              key={item.slug}
              path={`/classes/${item.slug}`}
              element={<ClassPage className={item.name} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
