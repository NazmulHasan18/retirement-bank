import { useEffect, useState } from "react";
import { FaCaretDown, FaRegBell } from "react-icons/fa";

const UserInfo = () => {
   const user = null;

   const [transactions, setTransactions] = useState([]);
   useEffect(() => {
      fetch("./transactions.json")
         .then((res) => res.json())
         .then((data) => setTransactions(data));
   }, []);

   return (
      <div className="p-8 lg:p-10 bg-white lg:bg-transparent lg:w-1/4">
         <div className="absolute lg:hidden right-6 top-6">
            <FaRegBell className="text-lg"></FaRegBell>
            <div className="w-2 absolute -top-2 right-0 h-2 bg-sky-400 rounded-full"></div>
         </div>
         <div className="flex gap-4 items-center mb-5">
            <div className="avatar">
               <div className="w-20 z-0 rounded-full bg-white">
                  <img
                     src={user ? user.image : "https://i.ibb.co/bvJDb7H/nazmul2.png"}
                     className="object-top"
                  />
               </div>
            </div>
            <div>
               <h2 className="text-2xl font-bold">Hi, {user ? user.displayName.split(" ")[0] : "User"}</h2>
               <p className="text-gray-600 font-semibold text-sm">Welcome Back</p>
            </div>
         </div>
         <div className="space-y-5 mb-20 bg-gray-100 px-8 py-10 rounded-2xl lg:bg-transparent lg:px-0 lg:py-0 ">
            <h5 className="font-semibold text-gray-700">Today</h5>
            <div className="space-y-2">
               <p className="text-4xl font-bold">${(19892).toLocaleString("en", { useGrouping: true })}</p>
               <p className="text-xs font-semibold text-gray-400">Account Balance</p>
            </div>
            <div className="flex gap-4 lg:flex-col">
               <div className="space-y-2">
                  <p className="text-xl font-bold">${(4000).toLocaleString("en", { useGrouping: true })}</p>
                  <p className="text-xs font-semibold text-gray-400">
                     Year-to-Date <span className="hidden lg:block">Contributions</span>
                  </p>
               </div>
               <div className="space-y-2">
                  <p className="text-xl font-bold">${(1892).toLocaleString("en", { useGrouping: true })}</p>
                  <p className="text-xs font-semibold text-gray-400">Total Interest</p>
               </div>
            </div>
            <button className="bg-blue-700 btn w-full lg:w-auto text-white normal-case hover:bg-blue-600">
               I want to<span className="lg:hidden">...</span>{" "}
               <FaCaretDown className="lg:inline-block hidden" />
            </button>
         </div>
         <div className=" bg-gray-100 px-8 py-10 rounded-2xl lg:bg-transparent lg:px-0 lg:py-0">
            <h5 className="font-semibold text-gray-700 text-lg mb-6">Recent Transactions</h5>
            {transactions.slice(0, 3).map((transaction) => (
               <div key={transaction.id}>
                  <p className="text-gray-400 font-semibold text-sm">{transaction.date}</p>
                  <p className="font-semibold">
                     {transaction.description} {transaction.bank && `to ${transaction.bank}`}
                  </p>
                  <div className="divider"></div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default UserInfo;
