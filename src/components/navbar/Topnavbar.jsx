import { NavLink } from "react-router-dom";
import ThemeButton from "../customButtons/Themebutton";
import ResumeButton from "../customButtons/ResumeButton";

function Topnavbar() {
  return (
    <nav className="dark:text-white">
      <div className="navbar font-semibold fixed z-50 bg-sky-100 bg-opacity-50 dark:bg-slate-900 dark:bg-opacity-50">
        <div className="navbar-start">
          {/* dropdown button and menu options */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-300 dark:text-black"
            >
              <li>
                <NavLink to={"/"} className={""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={""}>
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Nav bar brand name */}
          <a className="normal-case font-semibold ms-2 text-sm cursor-default flex flex-row gap-3  items-center">
            <span className="hidden lg:flex text-sm">{"< "}</span>
            <span className="text-2xl">Developer</span>
            <span className="hidden lg:flex text-sm">{" />"}</span>
          </a>
        </div>
        {/* Big screen nav bar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                to={"/"}
                className={"dark:bg-white dark:text-black accent-btn"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={"dark:bg-white dark:text-black accent-btn"}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <ResumeButton></ResumeButton>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}

export default Topnavbar;
