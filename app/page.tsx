'use client'

import Image from "next/image";
import Header from "@/component/Layout/header";
import Feature from "@/component/Sections/Feature"
import Footer from "@/component/Layout/footer";
import { useWindowSize } from "@/component/Tools/UseWindowSize/useWindowSize"
import { DashboardOutlined , SearchOutlined , FileTextOutlined } from "@ant-design/icons";
import SidebarSlider from "@/component/Layout/Sidebar/sidebar";

export default function Home() {

  const { width , height} = useWindowSize()
 
  return (
     width >= 1200
      ?
      (
<div id='totalContact-homePage '>
  <Header/>


<div id="firstPartthatIsShow" className="w-full flex flex-col mt-10 min-h-screen">

<div className="w-full h-full flex-col flex-1 ">
  <div className="w-full h-screen flex flex-row  items-center ">
   
    <img src="/img/homePage/peaper.png" alt="peaper" className=" size-[40vw] w-auto ml-11 hover:w-auto duration-all animate-float" />
   
    <div className="flex flex-col gap-[7vh]">
      <div id="text-home" className="flex gap-[3vh] flex-col">
      <h1 className="text-[#03255B] font-bold text-[4.3vw]">
        Elevate Your Exams to a Global Standard
      </h1>
      <h4 className="pr-[5vw]">
        Upload your Word or PDF file, and our AL will 
        analyze the dificulty, validty, and weighting 
        of your questions in under 30 seconds.
      </h4>
      </div>


      <button className=" bg-[#1986B7] rounded-3xl w-fit h-fit px-4 py-1 text-[#E4EDF7]  shadow-[0_0px_10px] shadow-black cursor-pointer hover:scale-[1.05] duration-300">
        Start Free Analysis
      </button>

      <div id="Business-partner" className=" w-fit bg-[#F0F5F9] rounded flex flex-row gap-2 mt-[2vw]">
         <img src="/img/homePage/tizHoshan.png" alt="tizhoshan"  className=" size-[5vw] filter grayscale opacity-40 mr-1 ml-2 my-1"/>
         <img src="/img/homePage/qalamChi.png" alt="farhangian"  className=" size-[5vw] w-[4vw] filter grayscale opacity-40 my-1 ml-2"/>
         <img src="/img/homePage/Farhangian_Uni.png" alt="farhangian"  className=" size-[5vw] filter grayscale opacity-40 my-1"/>
      </div>

    </div>
  </div>
</div>
</div>

<hr id="spaceBeatwenFirstPart&SecoundPart" className="bg-[#c8c8c8] w-[90vw] h-1 border-none mx-auto rounded"/>

<div id='scoundPart' className=" flex flex-row justify-between px-[3vw] mt-[7vw]">

{/* <SidebarSlider
autoPlay={true}
autoPlayInterval={5000}
showIndicators={true}
// slideDuration={800}
// easing="cubinc-bezier(0.68, -0.55, 0.27, 1/55)"
// blurAmount="sm"
// opacityAmount={0.3}
// scaleAmount={0.85}
className="mb-16"
> */}
<Feature 
icone={<DashboardOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Difficulty Level Analysis'} 
context={'Determining the level of difficulty of the test according to the test takers'}
/>
<Feature 
icone={<FileTextOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Curriculum Alignment'} 
context={'Analysis tailored to the curriculum and learning objectives is our most important ability.'}
/>
<Feature 
icone={<SearchOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Ambilguity Detaction'} 
context={'Determining the level of difficulty of the test according to the test takers'}
/>
{/* </SidebarSlider> */}

</div>

   <Footer/>


</div>
      )







      :








      (
<div id='totalContact '>
  <Header/>


<div id="firstPartthatIsShow" className="w-full flex flex-col mt-10  py-21">

<div className="w-full h-full flex-col flex-1 ">
  <div className="w-full  flex flex-row  items-center justify-center">
   
   
    <div id="dataFirstPartthatIsShow" className="flex flex-col gap-[5vh] pl-5 justify-between">
      <div id="h1-home" className="flex gap-[3vh] flex-col">
      <h1 className="text-[#03255B] font-bold text-[50px] sm:text-[60px]">
        Elevate Your Exams to a Global Standard
      </h1>
      <h4 className="pr-[5vw]">
        Upload your Word or PDF file, and our AL will 
        analyze the dificulty, validty, and weighting 
        of your questions in under 30 seconds.
      </h4>
      </div>

      <button className=" bg-[#1986B7] rounded-3xl w-fit h-fit px-4 py-1 text-[#E4EDF7]  shadow-[0_0px_10px] shadow-black cursor-pointer hover:scale-[1.05] duration-300">
        Start Free Analysis
      </button>

      <div id="Business-partner" className=" w-fit bg-[#F0F5F9] rounded flex flex-row gap-2 ">
         <img src="/img/homePage/tizHoshan.png" alt="tizhoshan"  className={` ${width <= 280 ? 'size-14.5' : 'size-17.5' }  filter grayscale opacity-40 mr-1 ml-2 my-1`}/>
         <img src="/img/homePage/qalamChi.png" alt="farhangian"  className={` ${width <= 280 ? 'size-14.5 w-13' : 'size-17.5 w-15' }    filter grayscale opacity-40 my-1 ml-2`}/>
         <img src="/img/homePage/Farhangian_Uni.png" alt="farhangian"  className={` ${width <= 280 ? 'size-14.5' : 'size-17.5' } filter grayscale opacity-40 my-1`}/>
      </div>

      

    </div>
  </div>
</div>
</div>

<hr id="spaceBeatwenFirstPart&SecoundPart" className="bg-[#c8c8c8] w-[90vw] h-1 border-none mx-auto rounded"/>

<div id='scoundPart' className=" flex flex-row justify-between px-[3vw] mt-[7vw]">

<SidebarSlider
autoPlay={true}
autoPlayInterval={5000}
showIndicators={true}
// slideDuration={800}
// easing="cubinc-bezier(0.68, -0.55, 0.27, 1/55)"
// blurAmount="sm"
// opacityAmount={0.3}
// scaleAmount={0.85}
className="mb-16"
>
<Feature 
icone={<DashboardOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Difficulty Level Analysis'} 
context={'Determining the level of difficulty of the test according to the test takers'}
/>
<Feature 
icone={<FileTextOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Curriculum Alignment'} 
context={'Analysis tailored to the curriculum and learning objectives is our most important ability.'}
/>
<Feature 
icone={<SearchOutlined className="text-[45px] xl:text-[65px] 2xl:text-[65px] lg:text-[55px] sm:text-[45px]"/>} 
title={'Ambilguity Detaction'} 
context={'Determining the level of difficulty of the test according to the test takers'}
/>
</SidebarSlider>
</div>

{/* <div id="Footer" className="mt-20 shadow-[0_0px_20px] shadow-gray-300"> */}
   <Footer/>
{/* </div> */}

</div>        
      )
    

  );
}
