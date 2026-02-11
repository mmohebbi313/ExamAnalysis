'use client'

import Footer from "@/component/Layout/footer"
import Header from "@/component/Layout/header"
import { useEffect, useState } from "react"
import TestMode from "@/component/Modes/TestModes/TestMode"
import Description from "@/component/Sections/Description/Description"
import AnalysisResultModal from "@/component/Sections/AnalysisResultModal/AnalysisResultModal"



export default function Analys() {
  
  const [showResult , setShowResult] = useState(false)
  const [ analysisData , setAnalysisData] = useState({ difficultyIndex: 0 , discriminationIndex: 0})




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

        
        <div>
          <TestMode setShowResult={setShowResult} setAnalysisData={setAnalysisData}/>
        </div>
       
       <div className=" mt-4">
        <Description/>
       </div>
        
        </div>
        </div>

        <Footer/>
        </div>

    )
}
