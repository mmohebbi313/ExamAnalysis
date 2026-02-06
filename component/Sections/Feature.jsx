import { DashboardOutlined } from "@ant-design/icons"
// import { FC } from "react"

// interface FeatureProps {
//  title: string;
//  onClick: Function;
//  icone: any;
// }



const Feature = ({
title,
context,
icone
}) => {
    return (
        <div id="mainDivSection" className=" 
        w-[50vw] 
        xl:w-[29vw] 2xl:w-[29vw]  lg:w-[29vw]  md:w-[28vw] sm:w-[250px] 
        bg-white rounded-xl flex flex-col justify-between py-4 gap-6 items-center  px-2
        ">    
            {icone} 
             <h2 className="font-bold
              sm:text-[16px] text-[14px]
              ">
                {title ? title : ('Difficulty Level Analysis')}   
             </h2>

             <p className=" text-center md:text-[15px] text-[11px] sm:text-[10px] ">
               {context ? context : 'Determining the level of difficulty of the test according to the test takers'}
             </p>

        </div>
    )
}

export default Feature