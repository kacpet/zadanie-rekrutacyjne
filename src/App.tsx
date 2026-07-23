import { useEffect, useState } from "react";

import { getScreenType } from "./utils/getScreenType";
import { getComponents } from "./components/getComponents";

function App() {
  const [screenType, setScreenType] = useState(getScreenType);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { Navbar, Home, Offer, About, Projects, Contact, Footer } =
    getComponents(screenType);

  return (
    <>
      <Navbar />
      <Home />
      <Offer />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;