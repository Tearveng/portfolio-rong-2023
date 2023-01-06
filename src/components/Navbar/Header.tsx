import { motion, spring } from "framer-motion";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import ThemeSwitcher from "./Theme";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.theme);
  const [x, setX] = useState(0);
  const [x1, setX1] = useState(0);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setX(450);
        setX1(-450);
        setSticky(true);
      } else {
        setX(0);
        setX1(0);
        setSticky(false);
      }
    };

    const handleSize = () => {
      const { innerWidth } = window;

      console.log(innerWidth);

      if (innerWidth <= 640) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const handleSwitcher = () => {
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.theme = "light";
        setDarkMode("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setDarkMode("dark");
      }
    }
  };

  const links = [
    {
      id: 0,
      name: "Home",
      to: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      id: 1,
      name: "Newsletter",
      to: "newsletter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Project",
      to: "project",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center mb-[6rem] ">
      <div className="md:flex md:justify-center   ">
        {/* {sticky && (
        <div
          className={`w-full bg-gray-800 h-[4rem] -z-10 ${
            sticky && "fixed top-0 blur-sm"
          }`}
        ></div>
      )} */}

        <motion.div
          className={`flex items-center justify-between h-[4rem] px-[1rem] ${
            sticky && "fixed top-0 backdrop-blur-sm"
          } md:w-[700px] w-full fixed top-4 backdrop-blur-sm`}
        >
          <motion.div animate={{ x: x1 }} transition={{ duration: 0.4 }}>
            <button className="flex ">
              <img
                src={darkMode === "dark" ? logoDark : logo}
                width="70"
                height="50"
              />
            </button>
          </motion.div>

          <motion.div
            className="flex items-center"
            animate={{ x }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <ul className="px-2 gap-2 hidden sm:flex">
              {links.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.id}
                  className={({ isActive }) => {
                    return isActive
                      ? "bg-gray-300 dark:bg-gray-700 rounded-lg"
                      : undefined;
                  }}
                >
                  <li
                    className={`p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg
                  `}
                  >
                    <div className="flex ">
                      <span className="dark:text-gray-200">{link.icon}</span>
                      <span className="dark:text-gray-200 inline-block px-2">
                        {link.name}
                      </span>
                    </div>
                  </li>
                </NavLink>
              ))}
            </ul>

            <div className="flex items-center">
              <ThemeSwitcher
                handleSwitcher={handleSwitcher}
                darkMode={darkMode}
              />
              <button
                className="sm:hidden p-2 dark:text-gray-200 hover:bg-gray-300 dark:hoverbg-gray-700 rounded-lg"
                onClick={() => setBurger(!burger)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {burger && (
        <div className="sm:justify-center sm:hidden mt-[3rem] sm:mt-0">
          {/* {sticky && (
        <div
          className={`w-full bg-gray-800 h-[4rem] -z-10 ${
            sticky && "fixed top-0 blur-sm"
          }`}
        ></div>
      )} */}

          <div className={`items-center h-[8rem] text-center mt-[2rem]`}>
            <div className="">
              <ul className="flex flex-col p-0">
                {links.map((link) => (
                  <NavLink
                    to={link.to}
                    key={link.id}
                    className={({ isActive, isPending }) => {
                      return isActive
                        ? "bg-gray-300 dark:bg-gray-700 rounded-lg"
                        : undefined;
                    }}
                  >
                    <li
                      className={`p-2 hover:bg-gray-300 dark:hover:bg-gray-700  rounded-lg
                  `}
                    >
                      <div>
                        <span className="dark:text-gray-200 inline-block px-2">
                          {link.name}
                        </span>
                      </div>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
