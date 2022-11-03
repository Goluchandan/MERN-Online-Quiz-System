import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogOutAction } from "../../Redux/Action/LogOutAction";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [show, setShow] = useState(false);

  const currentUserState = useSelector((state) => state.userLoginReducer);
  const { currentUserData } = currentUserState;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(userLogOutAction());
    alert("Log Out Successfully");
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-1 bg-violet-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img
                src="https://digiaccel.in/digiaccel.svg"
                style={{ height: "45px" }}
                alt=""
              />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div>
            <ul>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span
                    className="ml-2c text-lg"
                  >
                    Home
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
           >
            {currentUserData ? (
              <>
                {/* <!-- Profile dropdown --> */}
                <div
                  className="relative ml-3 lg:flex-row list-none lg:ml-auto"
                  onClick={() => setShow(!show)}
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-12 w-12 rounded-full"
                        src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
                        alt=""
                      />
                    </button>

                    <div className="ml-3 text-white">
                      <p>
                        <strong>{currentUserData.user.name}</strong>
                      </p>
                      <p>
                        <span>{currentUserData.user.userType}</span>
                      </p>
                    </div>
                  </div>
                  {show && (
                    <div
                      className="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                      {/* <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a> */}
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        onClick={handleLogOut}
                      >
                        Log out
                      </a>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/signup"
                    >
                      <span
                        className="ml-2 text-lg"
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        Sign Up
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/login"
                    >
                      <span
                        className="ml-2c text-lg"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Login
                      </span>
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
