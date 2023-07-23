import { YAxis } from "recharts";
import { XAxis } from "recharts";
import { BarChart, Bar } from "recharts";

const data = [
   {
      money: "20",
      employer: 20,
      employee: 20,
      interest: 20,
   },
   {
      money: "25",
      employer: 23,
      employee: 23,
      interest: 23,
   },
   {
      money: "30",
      employer: 29,
      employee: 29,
      interest: 29,
   },
   {
      money: "35",
      employer: 36,
      employee: 36,
      interest: 36,
   },
   {
      money: "40",
      employer: 44,
      employee: 44,
      interest: 44,
   },
   {
      money: "45",
      employer: 53,
      employee: 53,
      interest: 53,
   },
   {
      money: "50",
      employer: 62,
      employee: 62,
      interest: 62,
   },
   {
      money: "55",
      employer: 74,
      employee: 74,
      interest: 74,
   },
   {
      money: "58",
      employer: 80,
      employee: 80,
      interest: 80,
   },
   {
      money: "60",
      employer: 89,
      employee: 89,
      interest: 89,
   },
   {
      money: "63",
      employer: 92,
      employee: 92,
      interest: 92,
   },
   {
      money: "65",
      employer: 100,
      employee: 100,
      interest: 100,
   },
];

const ContributionsChart = () => {
   return (
      <>
         <BarChart
            width={600}
            height={200}
            data={data}
            margin={{
               top: 20,
               right: 10,
               left: 0,
               bottom: 5,
            }}
            className="font-semibold text-gray-500 hidden lg:block text-sm overscroll-x-auto"
         >
            <XAxis dataKey="money" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(tick) => `$ ${tick}`} />
            <Bar dataKey="employee" fill="transparent" />
            <Bar dataKey="employer" stackId="a" fill="#0133FF" />
            <Bar dataKey="employee" stackId="a" fill="#5174FF" />
            <Bar dataKey="interest" stackId="a" fill="#8CA3FF" />
         </BarChart>
         <BarChart
            width={320}
            height={200}
            data={data}
            margin={{
               top: 20,
               right: 10,
               left: 0,
               bottom: 5,
            }}
            className="font-semibold text-gray-500 lg:hidden text-sm overscroll-x-auto"
         >
            <XAxis dataKey="money" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(tick) => `$ ${tick}`} />

            <Bar dataKey="employer" stackId="a" fill="#0133FF" />
            <Bar dataKey="employee" stackId="a" fill="#5174FF" />
            <Bar dataKey="interest" stackId="a" fill="#8CA3FF" />
         </BarChart>
      </>
   );
};

export default ContributionsChart;
