import React, { useEffect } from "react";
import { useClickAway } from "react-use";
import { useRef , useState } from "react";
import { XCircle } from "lucide-react";
import ManualLoader from "@/component/ManualComonent/ManualLoaders/ManualLoders";

interface analysisData {
  difficultyIndex: number;
  discriminationIndex: number;
}

interface AnalysisResultModal {
  setShowResult: React.Dispatch<React.SetStateAction<boolean>> ;
  analysisData: analysisData
}

const AnalysisResultModal : React.FC<AnalysisResultModal> = ({setShowResult , analysisData}) => {

    const [ showLoader , setShowLoader ] = useState(true)

    const refModal = useRef(null)

    useClickAway( refModal , () => {
        setShowResult(false)
    })

    const closeModal = () => [
        setShowResult(false)
    ]

    useEffect ( () => {
     const timeout = setTimeout( () => {
        setShowLoader(false)
     } , 3000)

     return () => clearTimeout(timeout)
    }, [])


    return (
        <div id="totalAnalysisResultModalContact" 
        className=" flex justify-center items-center fixed w-full h-full bg-black/40 z-20  "
        >
        { showLoader ?
        <div className="mt-[-150px]">
          <ManualLoader/>
        </div>
          
          :
              <div id="modal" 
              className=" px-4 py-3 gap-3 rounded flex justify-center items-center flex-col shadow-lg bg-white mt-[-150px]"
              ref={refModal}
              >

               <div className=" w-full flex justify-start">
                 <XCircle className=" size-5 cursor-pointer" onClick={closeModal} />
               </div>

               <div id="titleModal" className=" flex justify-center items-center font-bold">
                 Analysis Result
               </div>

               <div id="scoresAnalysis" className=" flex lg:flex-row flex-col w-full justify-center gap-2 px-2">

                   <div id="scoreDifficulty" className=" flex flex-col items-center border border-gray-400 shadow-md py-3 px-5 gap-2 rounded">
                      <p className=" text-[12px] font-bold "> Difficulty Percentage</p>
                      <p className=" font-bold text-xl"> {analysisData.difficultyIndex}% </p>
                   </div>

                   {analysisData.discriminationIndex != 0 || analysisData.discriminationIndex ?
                   <div id="scoreDiscination" className=" flex flex-col items-center border border-gray-400 shadow-md py-3 px-5 gap-2 rounded">
                      <p className=" text-[12px] font-bold"> Discrimination Index </p>
                      <p className=" font-bold text-xl"> {analysisData.discriminationIndex} </p>
                   </div> 
                   :
                   ""                                      
                   }
                  
               </div>
              </div>  
        }
 
        </div>
    )

}

export default AnalysisResultModal