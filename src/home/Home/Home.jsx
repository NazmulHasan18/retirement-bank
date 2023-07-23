import MainContent from "../MainContent/MainContent";
import RightBar from "../RightBar/RightBar";
import UserInfo from "../UserInfo/UserInfo";

const Home = () => {
   return (
      <main className="lg:flex gap-4 w-full lg:pl-20">
         <>
            <UserInfo></UserInfo>
         </>
         <div className="flex-grow lg:grid grid-cols-3 p-5 lg:p-16 bg-white lg:rounded-r-2xl">
            <>
               <MainContent></MainContent>
            </>
            <>
               <RightBar></RightBar>
            </>
         </div>
      </main>
   );
};

export default Home;
