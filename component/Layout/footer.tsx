 export default function Footer () {


    return(    
        <div id="mainDivFooter" 
        className="
        mt-20 shadow-[0_0px_20px] shadow-gray-300
        w-full
         sm:h-fit min-w-fit bg-white justify-between 
         sm:items-center items-start flex flex-col sm:flex-row cm:gap-0 gap-3
         sm:p-5 p-3">
        <div id="part1Footer" className=" w-fit h-full flex items-center ">
         <div className=" flex flex-col ">
             <div id="part1/1Footer">
               <p className="text-[10px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] ">Quik Links</p>
             </div>
             

             <div id="part2/1Footer" className=" flex flex-row gap-2.5 w-full">
               <p className="  text-[10px] whitespace-nowrap"> About Team</p>
               <p className=" text-[10px]  whitespace-nowrap "> Countact us</p>
               <p className=" text-[10px]  whitespace-nowrap"> Anakyis Exam</p>
             </div>
          </div>
        </div>  

         <div id="part2Footer" className="  w-fit flex items-center justify-center">
         <div id="Business-partner" className=" w-full rounded flex flex-row justify-between gap-[4vw]">
         <img src="/img/homePage/tizHoshan.png" alt="tizhoshan"  className=" size-10 sm:size-[5vw] filter grayscale mr-1 ml-2 my-1"/>
         <img src="/img/homePage/qalamChi.png" alt="farhangian"  className=" size-10 w-7.5 sm:size-[5vw] sm:w-[4vw] filter grayscale my-1 ml-2"/>
         <img src="/img/homePage/Farhangian_Uni.png" alt="farhangian"  className=" size-10 sm:size-[5vw] filter grayscale my-1"/>
         </div>
           
          </div>
         
          <div id="part3Footer" className=" w-fit h-full flex items-center justify-center">
          <div className=" flex flex-col ml-2.5 ">
            <div id="part1/3Footer">
               <p className="text-[15px] ">Adress</p>
             </div>

             <div id="part2/3Footer" className=" flex flex-row">
               <p className=" text-[10px]">Iran,Hamedan,Toopchi Street,Hamedan Farhangian Univercity</p>

             </div>
          </div>
          </div>
        </div>
    )
 }