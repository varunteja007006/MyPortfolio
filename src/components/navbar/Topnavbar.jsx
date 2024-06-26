import { NavLink } from "react-router-dom";
import ThemeButton from "../customButtons/Themebutton";
import ResumeButton from "../customButtons/ResumeButton";

function Topnavbar() {
  return (
    <nav className="dark:text-white">
      <div className="fixed z-50 font-semibold bg-opacity-50 navbar bg-sky-100 dark:bg-slate-900 dark:bg-opacity-50">
        <div className="navbar-start">
          {/* dropdown button and menu options */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52 dark:bg-gray-300 dark:text-black font-bold"
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
          <a
            href="/"
            aria-label="Developer"
            className="flex flex-row items-center gap-3 text-sm font-semibold normal-case cursor-default ms-2"
          >
            <span className="hidden text-sm lg:flex">{"< "}</span>
            <span className="text-2xl">Developer</span>
            <span className="hidden text-sm lg:flex">{" />"}</span>
          </a>
        </div>
        {/* Big screen nav bar */}
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-3 px-1 menu menu-horizontal">
            <li>
              <NavLink to={"/"} className={"accent-btn"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={"accent-btn"}>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="gap-2 navbar-end">
          <ResumeButton />
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}

export default Topnavbar;
