'use client' 

import { useWindowSize } from "@/component/Tools/UseWindowSize/useWindowSize"

 
 export default function Header() {

   const { width , height} = useWindowSize()

    return(
   <header className="bg-[#01122D] w-auto h-20 justify-between flex fixed top-0 left-0 right-0 z-100">

   <div className=" flex items-center ml-1.25 sm:ml-10">
   <img src="/img/header/BackgroundEraser_۲۰۲۵۱۲۱۶_۲۲۰۸۲۶۷۲۰.png" alt="logo" className="w-20 h-20"/>
   {width >= 370 && <p className="text-[#E4EDF7] text-2xl font-bold"> FORNA</p>}
   </div>

   <div className="my-auto gap-6 flex mr-1.25 sm:mr-10">
   <button className="text-[#E4EDF7] text-[10px] sm:text-xl cursor-pointer">Contact Team</button>
   <button className="text-[#01122D] bg-[#E4EDF7] text-[10px] sm:text-xl px-2 py-2 rounded-[7px] cursor-pointer"> Login/Sign Up</button>
   </div>

   </header>
    )
 }