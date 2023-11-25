import { useEffect } from "react";
import { postCatagory } from "../api/apiResuest";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await postCatagory
      ();
      setCatagory(res);
      console.log(res);
    })();
  }, []);

  return (
    <div>
      <div className="navbar top-0 fixed z-50 mb-10 bg-base-100 shadow-md">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              {catagory.map((item) => (
                <li className=" pl-2 cursor-pointer font-[25px]">
                  <NavLink to={`/catagori/${item.id}`} key={item.id}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {catagory.map((item) => (
              <li className=" pl-2 cursor-pointer font-[25px]">
                <NavLink to={`/catagori/${item.id}`} key={item.id}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default Layout;
