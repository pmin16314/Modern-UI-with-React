import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* ---------------logo--------------- */}
      <img
        src={logo}
        alt='hoobank'
        className='w-[124px] h-[32px]'
      />
      {/* ---------------normal NaveBar--------------- */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-16 text-white ${
              index === navLinks.length - 1
                ? `mr-0`
                : `mr-10`
            }`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* ---------------toggle icon--------------- */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[35px] h-[35px]  hover:bg-gray-700 p-2 rounded'
          onClick={() =>
            setToggle((prev) => !prev)
          }
        />
        {/* ---------------Mobile NavBar--------------- */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient p-6 absolute top-20 right-0  my-2 w-[80%] rounded-l-lg `}>
          <ul className='list-none flex-colum justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] text-white hover:text-dimWhite hover:bg-transparent ${
                  index === navLinks.length - 1
                    ? `mb-5`
                    : `mb-16`
                }`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
