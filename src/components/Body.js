import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import Footer from "./Footer";
import Certification from "./Certification";
import Intership1 from "./Internship";
const Body = () => {
  return (
    <div className="font-Poppins">
      <Header />
      <Home />
      <About />
      <Intership1/>
      <ProjectsContainer />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
