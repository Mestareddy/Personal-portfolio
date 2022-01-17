import React from "react";
import {
  Contact,
  Intro,
  Portfolio,
  Works,
  Navbar,
  Testimonials,
  Menu
} from "./components";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
