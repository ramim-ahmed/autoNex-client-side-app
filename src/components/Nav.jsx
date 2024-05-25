import { NavLink } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
export default function Nav() {
  const pages = [
    {
      path: "/",
      level: "Home",
    },
    {
      path: "/shop",
      level: "Shop",
    },
    {
      path: "/blog",
      level: "Blog",
    },
    {
      path: "/contact",
      level: "Contact",
    },
  ];
  const natItems = pages.map(({ level, path }) => {
    return (
      <NavLink
        to={path}
        key={path}
        className={({ isActive }) =>
          isActive
            ? "text-themeColor font-bold border-b-2 border-themeColor"
            : ""
        }
      >
        {level}
      </NavLink>
    );
  });
  return (
    <nav className="">
      <div className="flex justify-between py-4 items-center max-w-6xl mx-auto px-3">
        <div className="hidden lg:block">
          <h1 className="font-bold text-3xl">AutoNex</h1>
        </div>
        <div className="block lg:hidden">
          <HiMenuAlt1 className="w-7 h-7" />
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center space-x-8">{natItems}</div>
        </div>
        <div className="lg:hidden block">
          <h1 className="font-bold">AutoNex</h1>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <RiShoppingBasket2Line className="w-7 h-7" />
            <FaRegUserCircle className="w-7 h-7" />
          </div>
        </div>
      </div>
    </nav>
  );
}
