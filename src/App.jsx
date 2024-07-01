import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import BgImage from "./assets/sunrise.jpg";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const bgImage = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <main style={bgImage}>
        <Navbar handleLoginPopup={handleLoginPopup} />
        <Hero />
      </main>

      {/* Login Popup */}
      <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />
    </>
  );
};

export default App;
