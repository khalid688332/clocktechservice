import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Client } from "./components/sections/client";
import { Logo } from "./components/sections/logo";
import { Journey } from "./components/sections/Journey"; 
import { Open } from "./components/sections/open";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <div id="about"><About /></div>
                <div id="journey"><Journey /></div>
                <div id="projects"><Projects /></div>
                <div id="client"><Client /></div>
                <div id="logo"><Logo /></div>
                <div id="contact"><Contact /></div>
              </>
            }
          />
          <Route path="/open/:id" element={<Open />} />
          <Route path="/open" element={<Open />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;