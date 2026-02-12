

import React, { useEffect, useRef , useState} from "react"
import ManualButton from "@/component/ManualComonent/ManualBotton/maualBotton"
import ManualeTextBox from "@/component/ManualComonent/ManualeTextBox/manualTextBox"
import { useWindowSize } from "@/component/Tools/UseWindowSize/useWindowSize"
import ManualDropDownList from "@/component/ManualComonent/ManualDropDownList/ManualDropDownList"
import ExamAnalysisService from "@/component/Tools/ExamAnalysisService/ExamAnalysisService"
import Result from "@/component/Sections/Result/Result"
import ManualLoader from "@/component/ManualComonent/ManualLoaders/ManualLoders"
import AnalysisResultModal from "@/component/Sections/AnalysisResultModal/AnalysisResultModal"
import { Interface } from "readline"

// تعریف تایپ دقیق
type AnalysisDataType = {
  difficultyIndex: number;
  discriminationIndex: number;
}

// استفاده در Handler
// interface TestModeAttributeHandlerProps {
//   setAnalysisData: React.Dispatch<React.SetStateAction<AnalysisDataType>>;
//   // یا
//   setAnalysisData: (value: AnalysisDataType | ((prev: AnalysisDataType) => AnalysisDataType)) => void;
// }

interface TestModeProps {
  setShowResult: React.Dispatch<React.SetStateAction<boolean>> ;
  setAnalysisData: React.Dispatch<React.SetStateAction<AnalysisDataType>>;
}


const TestMode : React.FC<TestModeProps> = ({setShowResult , setAnalysisData}) => {


    const { width , height } = useWindowSize()
    const [ form , setForm] = useState(
    {numberCorrect: 0,
    participants: 0,
    numberStrong: 0,
    numberWeak: 0,
    numberCorrectStrong: 0,
    numberCorrectWeak: 0}
    )
    const [ activeButton , setActiveButton ] = useState(true)
    

    const optionsCorrectOption = [
      { value: '1' , label: '1'},
      { value: '2' , label: '2'}, 
      { value: '3' , label: '3'},
      { value: '4' , label: '4'},
    ]
  
    const setProp = () => {
      setShowResult(true)
    }

    useEffect( () => {
      setShowResult(false)

      if (form.participants != 0 && form.numberCorrect != 0) {
        setActiveButton(false)
      }
    } , [form])


    return (
      
        <div id="importDataAnalysTestMode" className={` w-full`} >


         <ExamAnalysisService form={form} setAnalysisData={setAnalysisData}/>

         <div id="importData" className={` w-full flex md:flex-row flex-col h-full`}>
           
           <fieldset className=" h-full border border-blue-950 rounded-lg md:w-full w-[99vw] md:m-2">
            <legend className=" text-center sm:text-[15px] text-[12px]">
             analysis exam part     
            </legend>
 
           <div  id="importDataManual&Analys" className="w-full h-full flex flex-col py-10 px-4  justify-center ">
           
            <div id="importDataPart" className="w-full h-full flex  flex-col">

            <div id="fildBaseDataPart" className={` w-full  h-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4`}>


            <div className="">
             <ManualeTextBox
             title={'Number of participants'}
             type="number"
             name='participants'
             setForm={setForm}
             /> 
             </div>

             {/* <div className="">
             <ManualeTextBox
             title={'Number Question'}
             type="number"
             name='numberQuestion'
             setForm={setForm}
             />
             </div>

             <div className="">
             <ManualDropDownList
              options={optionsCorrectOption}
              placeholder="Please Select"
              // onSelect={handleSelect}
              title="Correct option"
              setForm={setForm}
              name="correctOption"
              />
             </div> */}

             <div className="">
             <ManualeTextBox
             title={'Number of correct '}
             type="number"
             setForm={setForm}
             name="numberCorrect"
             /> 
             </div>

            </div>

            <div id="AdvancedData" className="mt-6 md:mt-10">
              
            <h1 className=" text-red-800 text-[10px] md:text-[13px] mb-2">Enter the following information for discrimination Index.</h1>

            <div  id="fildAdvancedData" className=" w-full  h-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4">
             
             <div className="">
             <ManualeTextBox
             title={'Number of people in a strong group'}
             type="number"
             setForm={setForm}
             name="numberStrong"
             /> 
             </div>

             <div className="">
             <ManualeTextBox
             title={'Number of people in the weak group'}
             type="number"
             setForm={setForm}
             name="numberWeak"
             /> 
             </div>

             <div className="">
             <ManualeTextBox
             title={'Correct number in strong group'}
             type="number"
             setForm={setForm}
             name="numberCorrectStrong"
             /> 
             </div>

             <div className="">
             <ManualeTextBox
             title={'Correct number in weak group'}
             type="number"
             setForm={setForm}
             name="numberCorrectWeak"
             /> 
             </div>

            </div>

            </div>


            <div id="buttonPart" className=" mt-12">
            <ManualButton
             title="analys"
             onClick={setProp}
             disabled={activeButton}
             />
            </div> 
            </div>



            
           </div>
           </fieldset>
           

         </div>

        </div>        
    )
}

export default TestMode