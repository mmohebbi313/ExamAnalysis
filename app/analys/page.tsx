'use client'

import Footer from "@/component/Layout/footer"
import Header from "@/component/Layout/header"
import { useWindowSize } from "@/component/Tools/UseWindowSize/useWindowSize"
import { useEffect, useRef, useState } from "react"
// import TestMode from "@/component/Modes/TestMode"
import TestMode from "@/component/Modes/TestModes/TestMode"
import ManualDropDownList from "@/component/ManualComonent/ManualDropDownList/ManualDropDownList"
import Description from "@/component/Sections/Description/Description"
import AnalysisResultModal from "@/component/Sections/AnalysisResultModal/AnalysisResultModal"



export default function Analys() {
  
  const proprRefParticipants = useRef('')
  const { width , height} = useWindowSize()
  const [ mode , setMode] = useState(null)
  const [showResult , setShowResult] = useState(false)
  const [ analysisData , setAnalysisData] = useState({})


  const setProp = () => {
    console.log(proprRefParticipants.current.search);
  }

    const handleSelect = ( value : any ) => {
       setMode(value)
    }  
    const options = [
      { value: 'Four-Choice' , label: 'Four-Choice'},
      { value: 'Descriptive' , label: 'Descriptive'},
    ]

    useEffect( () => {
      console.log("analysisData" , analysisData);
    } , [analysisData])
  
  
    return(
      
        <div id="totalContact-analysPage" >
        {showResult &&
         <AnalysisResultModal analysisData={analysisData} setShowResult={setShowResult}/>
        } 
        <Header/>
        
        <div id="totalContactWithOutHeader&Footer" className="mt-21">
        <div id="importData" className="  flex items-center flex-col gap-6 md:gap-0">

        <div className=" w-[70vw]">
          <ManualDropDownList
         options={options}
         placeholder="Mode Exame"
         onSelect={handleSelect}
         title="Test type"
         />
        </div>
        
        {  mode == 'Four-Choice' &&
        <div>
          <TestMode setShowResult={setShowResult} setAnalysisData={setAnalysisData}/>
        </div>
        }
       
       <div className=" mt-4">
        <Description/>
       </div>
        
        </div>
        </div>

        <Footer/>
        </div>

    )
}
