import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [theme, switchTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    document.body.setAttribute("data-theme", `${theme}`);
  }, [theme]);

  const themeHandler = () => {
    switchTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-base-100 border-b-[1px] border-gray-300 sticky top-0 z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href="/home">
          Unsplash
        </a>
      </div>

      <div className="navbar-end gap-3">
        <button
          type="button"
          className="hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 text-gray-600 dark:text-gray-400 font-bold p-2 rounded text-2xl"
          onClick={themeHandler}
        >
          {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="text-red-500" onClick={handleLogOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
