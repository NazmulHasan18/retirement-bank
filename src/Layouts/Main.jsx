import Home from "../home/Home/Home";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
   return (
      <div className="rounded-2xl bg-gray-100 lg:mx-3 relative">
         <header>
            <Navbar></Navbar>
         </header>
         <>
            <Home></Home>
         </>
      </div>
   );
};

export default Main;
