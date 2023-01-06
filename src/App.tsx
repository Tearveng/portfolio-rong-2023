import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Navbar/Footer";
import LoadingBarJsx from "./components/Navbar/LodingBar";

function App() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("Has render");
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
      if (localStorage.theme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <div>
      {navigation.state === "loading" && <LoadingBarJsx />}

      <Header />

      <div className="px-[1.5rem] ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
