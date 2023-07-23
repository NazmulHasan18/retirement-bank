import { useState } from "react";
import "./RightBar.css";

const RightBar = () => {
   const [contribution, setContribution] = useState(12);
   const [age, setAge] = useState(65);

   const getContribution = (e) => {
      setContribution(e.target.value);
   };
   const getAge = (e) => {
      setAge(e.target.value);
   };

   return (
      <>
         <div className="lg:mx-10">
            <div className=" p-5 bg-gray-100 lg:rounded-md rounded-3xl">
               <h5 className="font-semibold text-gray-700">Retirement Strategy</h5>
               <p className="font-medium text-gray-800 mt-6 mb-4">Employee Contribution</p>
               <div className="flex gap-4 items-center">
                  <input
                     type="range"
                     name="contribution"
                     id="contribution"
                     min={0}
                     max={30}
                     defaultValue={contribution}
                     onChange={getContribution}
                     style={{ backgroundSize: `${contribution * 3.33}%` }}
                  />
                  <p>{contribution}%</p>
               </div>
               <p className="font-medium text-gray-800 mt-6 mb-4">Retirement Age</p>
               <div className="flex gap-4 items-center">
                  <input
                     type="range"
                     name="contribution"
                     id="contribution"
                     min={20}
                     max={100}
                     defaultValue={age}
                     onChange={getAge}
                     style={{ backgroundSize: `${(age - 20) * 1.25}%` }}
                  />
                  <p>{age}</p>
               </div>
               <div className="divider"></div>
               <div className="font-medium text-gray-800 mt-6 mb-4 flex justify-between items-center">
                  <p>Employer Contribution</p> <p>8.4%</p>
               </div>
               <div className="font-medium text-gray-800 mt-6 mb-4 flex justify-between items-center">
                  <p>Interest Rate</p> <p>5%</p>
               </div>
               <button className="bg-blue-700 btn btn-block text-white normal-case hover:bg-blue-600">
                  Update
               </button>
               <button className="btn btn-block btn-ghost text-blue-700 normal-case hover:text-blue-500 my-3 hover:bg-gray-200">
                  View Help Docs {">"}
               </button>
            </div>
            <div className="px-4 my-8 border-l-4 border-blue-700">
               <p className="font-semibold text-gray-500">Are you considering a</p>
               <p className="font-bold text-gray-800">Housing Advance?</p>
               <p className="text-gray-400">Limited time reduced interest.</p>
               <button className="btn pl-0 btn-ghost text-blue-700 normal-case hover:text-blue-500 my-3 hover:bg-gray-200">
                  Learn more {">"}
               </button>
            </div>
         </div>
      </>
   );
};

export default RightBar;
