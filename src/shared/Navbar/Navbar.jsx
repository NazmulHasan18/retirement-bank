import "./Navbar.css";
import img from "../../assets/butterfly.png";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBell, FaRegListAlt, FaRegNewspaper, FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
   const [isOpen, SetIsOpen] = useState(false);
   const location = useLocation();
   const pathname = location.pathname;

   return (
      <>
         <nav
            className={`${
               isOpen ? "w-64" : "w-20"
            } duration-300 rounded-l-2xl bg-white hidden lg:flex flex-col justify-between text-gray-500 min-h-screen fixed top-0 p-5 z-50`}
            onMouseEnter={() => SetIsOpen(true)}
            onMouseLeave={() => SetIsOpen(false)}
         >
            <div>
               <img src={img} alt="" className={`h-10 mx-auto w-fit mb-8`} />
               <div>
                  {isOpen ? (
                     <>
                        <input
                           type="text"
                           placeholder="Search"
                           className="input input-bordered border-blue-800 focus:outline-blue-800 w-full max-w-xs"
                        />
                     </>
                  ) : (
                     <div className="pb-8">
                        <BsSearch></BsSearch>
                     </div>
                  )}
               </div>
               <div className="mt-16">
                  <Link
                     to="/"
                     className={`${
                        pathname === "/" ? "bg-blue-800 text-white hover:bg-blue-700" : "hover:bg-gray-100"
                     }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center justify-center rounded-md `}
                  >
                     <AiOutlineHome className="text-lg"></AiOutlineHome>
                     <h2 className={`${isOpen ? "block" : "hidden"}`}>Home</h2>
                  </Link>
                  <Link
                     to="/news"
                     className={`${
                        pathname === "/news"
                           ? "bg-blue-800 text-white hover:bg-blue-700"
                           : "hover:bg-gray-100"
                     }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center mt-2 justify-center rounded-md`}
                  >
                     <FaRegNewspaper className="text-lg"></FaRegNewspaper>
                     <h2 className={`${isOpen ? "block" : "hidden"}`}>News</h2>
                  </Link>
                  <Link
                     to="/payments"
                     className={`${
                        pathname === "/payments"
                           ? "bg-blue-800 text-white hover:bg-blue-700"
                           : "hover:bg-gray-100"
                     }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center justify-center rounded-md`}
                  >
                     <FaRegListAlt className="text-lg"></FaRegListAlt>
                     <h2 className={`${isOpen ? "block" : "hidden"}`}>Payments</h2>
                  </Link>
                  <Link
                     to="/profile"
                     className={`${
                        pathname === "/profile"
                           ? "bg-blue-800 text-white hover:bg-blue-700"
                           : "hover:bg-gray-100"
                     }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center justify-center rounded-md`}
                  >
                     <FaRegUser className="text-lg"></FaRegUser>
                     <h2 className={`${isOpen ? "block" : "hidden"}`}>Profile</h2>
                  </Link>
               </div>
            </div>
            <div>
               <Link
                  to="/notifications"
                  className={`${
                     pathname === "/notifications"
                        ? "bg-blue-800 text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center justify-center rounded-md`}
               >
                  <div className="relative">
                     <FaRegBell className="text-lg"></FaRegBell>
                     <div className="w-2 absolute -top-2 right-0 h-2 bg-sky-400 rounded-full"></div>
                  </div>
                  <h2 className={`${isOpen ? "block" : "hidden"}`}>Notification</h2>
               </Link>
               <Link
                  to="/logout"
                  className={`${
                     pathname === "/logout" ? "bg-blue-800 text-white hover:bg-blue-700" : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} flex gap-4 items-center justify-center rounded-md`}
               >
                  <TbLogout className="text-lg"></TbLogout>
                  <h2 className={`${isOpen ? "block" : "hidden"}`}>Log Out</h2>
               </Link>
            </div>
         </nav>
         <nav className="fixed mx-0 z-50 lg:hidden p-3 bg-white w-full bottom-0">
            <div className="flex justify-between">
               <Link
                  to="/"
                  className={`${
                     pathname === "/"
                        ? "bg-blue-800 shadow-md text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} text-gray-500 rounded-md `}
               >
                  <AiOutlineHome className="text-xl lg:text-lg"></AiOutlineHome>
               </Link>
               <Link
                  to="/news"
                  className={`${
                     pathname === "/news"
                        ? "bg-blue-800 shadow-md text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} text-gray-500 rounded-md `}
               >
                  <FaRegNewspaper className="text-xl lg:text-lg"></FaRegNewspaper>
               </Link>
               <Link
                  to="/payments"
                  className={`${
                     pathname === "/payments"
                        ? "bg-blue-800 shadow-md text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} text-gray-500 rounded-md `}
               >
                  <FaRegListAlt className="text-xl lg:text-lg"></FaRegListAlt>
               </Link>
               <Link
                  to="/profile"
                  className={`${
                     pathname === "/profile"
                        ? "bg-blue-800 shadow-md text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} text-gray-500 rounded-md `}
               >
                  <FaRegUser className="text-xl lg:text-lg"></FaRegUser>
               </Link>
               <Link
                  to="/search"
                  className={`${
                     pathname === "/search"
                        ? "bg-blue-800 shadow-md text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                  }  ${isOpen ? "p-4" : "p-2"} text-gray-500 rounded-md `}
               >
                  <BsSearch className="text-xl lg:text-lg"></BsSearch>
               </Link>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
