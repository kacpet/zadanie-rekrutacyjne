import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

import Offer from "./components/offer/offer";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

import Footer from "./components/footer/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Offer />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
