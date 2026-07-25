import { Suspense, useEffect, useState } from "react";

import { getScreenType } from "./utils/getScreenType";
import { getComponents } from "./components/getComponents";

function App() {
  const [screenType, setScreenType] = useState(() => getScreenType());

  useEffect(() => {
    const handleResize = () => {
      setScreenType((prev) => {
        const next = getScreenType();

        return prev === next ? prev : next;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    Navbar,
    Home,
    Offer,
    About,
    Projects,
    Contact,
  } = getComponents(screenType);

  return (
    <Suspense fallback={null}>
      <Navbar />

      <main>
        <section className="snap-section">
          <Home />
        </section>

        <section className="snap-section">
          <Offer />
        </section>

        <section className="snap-section">
          <About />
        </section>

        <section className="snap-section">
          <Projects />
        </section>

        <section className="snap-section">
          <Contact />
        </section>
      </main>
    </Suspense>
  );
}

export default App;