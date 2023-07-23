import ContributionsChart from "../ContributionsChart/ContributionsChart";
import "./MainContent.css";

const MainContent = () => {
   return (
      <div className="col-span-2">
         <h5 className="font-semibold text-sm text-blue-600">Retirement Income</h5>
         <h3 className="text-2xl font-bold">Starting Year 2056</h3>
         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center my-8">
            <div className="border-b-2 pb-6 border-blue-400 col-span-2 lg:col-span-1">
               <p className="text-3xl font-bold">${(300000).toLocaleString("en", { useGrouping: true })}</p>
               <p className="text-xs font-semibold text-gray-400">My Goal</p>
            </div>

            <div className="border-b-2 pb-6 border-blue-400">
               <p className="text-3xl font-bold">59%</p>
               <p className="text-xs font-semibold text-gray-400">Goal Achieved</p>
            </div>
            <div className="border-b-2 pb-6 border-blue-400">
               <p className="text-3xl font-bold">${(300).toLocaleString("en", { useGrouping: true })}</p>
               <p className="text-xs font-semibold text-gray-400">Est. Monthly Income</p>
            </div>
         </div>
         <div className="pt-10">
            <h5 className="font-semibold text-gray-700">Contributions Overtime</h5>

            <div className="grid grid-cols-3 my-6">
               <div className="lg:flex gap-2 items-center">
                  <div className="w-3 h-2 rounded-full bg-[#0133FF]"></div>{" "}
                  <p className="text-xs text-gray-400 font-semibold">Employer:</p>
                  <p className="text-gray-600 text-sm font-bold">
                     $ {(73500).toLocaleString("en", { useGrouping: true })}
                  </p>
               </div>
               <div className="lg:flex gap-2 items-center">
                  <div className="w-3 h-2 rounded-full bg-[#5174FF]"></div>{" "}
                  <p className="text-xs text-gray-400 font-semibold">Employee:</p>
                  <p className="text-gray-600 text-sm font-bold">
                     $ {(52500).toLocaleString("en", { useGrouping: true })}
                  </p>
               </div>
               <div className="lg:flex gap-2 items-center">
                  <div className="w-3 h-2 rounded-full bg-[#8CA3FF]"></div>{" "}
                  <p className="text-xs text-gray-400 font-semibold">Total Interest:</p>
                  <p className="text-gray-600 text-sm font-bold">
                     $ {(244310).toLocaleString("en", { useGrouping: true })}
                  </p>
               </div>
            </div>
            <ContributionsChart></ContributionsChart>
         </div>
         <div className="mt-16">
            <h5 className="font-semibold text-gray-700">How do I compare to my peers?</h5>
            <p className="text-xs text-gray-400 font-medium mt-3 mb-8">
               These numbers represents current goal achievement
            </p>
            <div className="lg:flex gap-8 items-center justify-center">
               <div>
                  <div className="flex gap-1 items-center">
                     <p className="font-semibold text-xs">Age: </p>
                     <select className="select select-ghost text-gray-500 text-sm focus:outline-none w-fit max-w-xs">
                        <option>Under 25</option>
                        <option>Under 30</option>
                        <option>Under 35</option>
                        <option>Under 45</option>
                        <option>Under 50</option>
                        <option>Under 55</option>
                        <option>Under 65</option>
                     </select>
                  </div>
                  <div className="divider my-0"></div>
                  <div className="flex gap-1 items-center">
                     <p className="font-semibold text-xs">Salary: </p>
                     <select className="select select-ghost text-gray-500 text-sm focus:outline-none w-fit max-w-xs">
                        <option>K 20 - K 30</option>
                        <option>K 31 - K 40</option>
                        <option>K 41 - K 50</option>
                        <option>K 51 - K 60</option>
                        <option>K 61 - K 70</option>
                        <option>K 71 - K 80</option>
                        <option>K 81 - K 90</option>
                        <option>K 91 - K 100</option>
                        <option>Above</option>
                     </select>
                  </div>
                  <div className="divider my-0"></div>
                  <div className="flex gap-1 items-center">
                     <p className="font-semibold text-xs">Gander: </p>
                     <select className="select select-ghost text-gray-500 text-sm focus:outline-none w-fit max-w-xs">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                     </select>
                  </div>
                  <div className="divider lg:hidden mt-0"></div>
               </div>
               <div className="flex gap-8">
                  <div className="progress-container">
                     <div
                        className="outer duration-300"
                        style={{ background: `conic-gradient(#00ffc8 ${78 * 3.6}deg, #d1fff5 0deg)` }}
                     >
                        <div className="value">
                           78<sup>%</sup>
                        </div>
                     </div>
                     <p className="text-xs text-gray-400 font-medium mt-3 mb-8">Average</p>
                  </div>
                  <div className="progress-container">
                     <div
                        className="outer duration-300"
                        style={{ background: `conic-gradient(#00ffc8 ${95 * 3.6}deg, #d1fff5 0deg)` }}
                     >
                        <div className="value">
                           95<sup>%</sup>
                        </div>
                     </div>
                     <p className="text-xs text-gray-400 font-medium mt-3 mb-8">Top</p>
                  </div>
                  <div className="progress-container">
                     <div
                        className="outer duration-300"
                        style={{ background: `conic-gradient(#00ffc8 ${59 * 3.6}deg, #d1fff5 0deg)` }}
                     >
                        <div className="value">
                           59<sup>%</sup>
                        </div>
                     </div>
                     <p className="text-xs text-gray-400 font-medium mt-3 mb-8">Me</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainContent;
