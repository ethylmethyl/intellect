"use client";


import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import PieChart from "../../components/PieChart";
import Image from "next/image";
import FullInsight from "../../components/FullInsight";
import PersonalOp from "../../components/PersonalOp";
import BudgetTree from "../../components/BudgetTree";
import Timeline from "../../components/Timeline";
import Slider from "../../components/Slider";
import IncomeCard from "../../components/IncomeCard";
import MoneyCard from "../../components/MoneyCard";
import BudgetingCard from "../../components/BudgetingCard";
import SSCard from "../../components/SSCard";


export default function Homepage2() {
 const dataPie = [
   { id: 0, value: 25, label: 'Food', color: '#8CB497'},
   { id: 1, value: 10, label: 'Entertainment', color: '#7FBB7A' },
   { id: 2, value: 5, label: 'Savings', color: '#386F38' },
   { id: 3, value: 5, label: 'Clubs', color: '#75AE86' },
   { id: 4, value: 20, label: 'Transportation', color: '#90E482' },
   { id: 5, value: 35, label: 'Housing', color: '#96F996' },
 ];


 return (
   <div className="relative">
     <Sidebar/>
     <Profile/>
     <div className="h-full min-h-[100vh] w-[100vw] pl-36 flex flex-col items-center justify-center py-[116px]">
       <div className="flex flex-row flex-wrap justify-center items-stretch h-[80%]">
          <p className="text-center font-inter text-8xl font-semibold leading-[150%] text-[#3A4F38]">Welcome Back,<span className="text-[rgba(1,135,33,0.70)] text-center font-inter text-8xl font-semibold leading-[150%]"> Jackson!</span></p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-[#3A4F38] text-center font-inter text-[40px] font-semibold leading-[150%]">See what progress you&apos;ve made.&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Image src="/images/wallet.png" alt="Wallet" width={90} height={90}></Image>
          </div>
          <div className="flex flex-row gap-10 pl-10 pr-10 pt-[60px]">
            <div className="flex flex-col gap-20">
           <div className="w-[25vw] [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[16px] py-[40px] flex flex-col items-center justify-center gap-[36px]">
             <p className="text-[#3A4F38] text-center font-inter text-[35px] font-semibold leading-[150%] w-full">Just one day away the weekend is in reach!</p>
             <Image src="/images/wallet.png" alt="Wallet" width={180} height={180} ></Image>
           </div>
           <div className="w-[25vw] [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[20px] py-[16px] flex flex-col items-start justify-center">
             <p className="text-black font-inter text-[40px] font-semibold leading-[150%]">Daily Savings:</p>
             <p className="text-[rgba(1,135,33,0.70)] font-inter text-[80px] font-semibold leading-[150%]">$92.65</p> 
             
               <p className="justify-center text-black font-inter text-xl font-semibold leading-[150%]">(up&nbsp;
               <span className="w-[284.175px] h-[52px] justify-center text-[rgba(1,135,33,0.70)] font-inter text-xl font-semibold leading-[150%]">23.9%&nbsp;</span>from yesterday)</p>
             
           </div>
           <div className="w-[25vw] [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[20px] py-[16px] flex flex-col items-start justify-center">
             <p className="text-black font-inter text-[40px] font-semibold leading-[150%]">Weekly Savings:</p>
             <p className="text-[rgba(1,135,33,0.70)] font-inter text-[80px] font-semibold leading-[150%]">$351.07</p> 
             
               <p className="justify-center text-black font-inter text-xl font-semibold leading-[150%]">(up&nbsp;
               <span className="w-[284.175px] h-[52px] justify-center text-[rgba(1,135,33,0.70)] font-inter text-xl font-semibold leading-[150%]">11.0%&nbsp;</span>from last week)</p>
             
           </div>
          </div>
         <BudgetTree/>
         <Timeline/>
       </div>
       <div className="relative w-[70%] my-[80px]">
         <Slider components={[
           <MoneyCard key="moneyCard" />,
           <IncomeCard key="incomeCard" />,
           <BudgetingCard key="budgetingCard" />,
           <SSCard key = "ssCard" />
         ]} />
       </div>
       
       <div className="flex flex-row flex-wrap w-full items-center justify-center gap-[50px]">
       <div className="w-[40%] h-[884px] shrink-0 [background:#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid gap-5 flex flex-col justify-start items-center pt-[40px]">
         <p className=" text-black text-center font-raleway text-[40px] font-bold leading-[150%]">Your Personalized Wallet</p>    
         <div className="relative">
           <PieChart data={dataPie}></PieChart>
           <Image src="/images/wallet.png" alt="Wallet" width={180} height={180} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></Image>
         </div>
       </div>
        <div className="bg-[#FBFBFF] shadow-[5px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-b-[#516958] border-b border-solid px-[50px] pt-[12px] pb-[46px] flex flex-col items-center justify-center h-[884px]">
           <p className=" text-black font-raleway text-[40px] font-bold leading-[150%] text-start w-full">Your Spending: Optimized</p>
           <PersonalOp></PersonalOp>
           <div className="border-1 border-[#D3D7EF] w-full self-center mt-8">
           </div>
           <div className="self-end mt-10 ">
             <FullInsight link={"/homepage2"}></FullInsight>
           </div>
         </div>
       </div>
       
       </div>
     </div>
   </div>
 );
}