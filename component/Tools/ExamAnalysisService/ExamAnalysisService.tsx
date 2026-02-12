'use client'
import React, { useEffect , useState } from "react";

interface Form {
    numberCorrect: number,
    participants: number,
    numberStrong: number,
    numberWeak: number,
    numberCorrectStrong: number,
    numberCorrectWeak: number
}

type AnalysisDataType = {
  difficultyIndex: number;
  discriminationIndex: number;
}

interface ExamAnalysisServiceProp {
    form?: Form;
    setAnalysisData?: React.Dispatch<React.SetStateAction<AnalysisDataType>>;
}

const ExamAnalysisService: React.FC<ExamAnalysisServiceProp> = ({ form, setAnalysisData }) => {

    const [ difficultyIndex , setDifficultyIndex ] = useState(0)
    const [ discriminationIndex , setDiscriminationIndex ] = useState(0)
    
    useEffect(() => {
        if (!form) return;
        
        if (form.numberCorrect , form.participants) {
        
        const resultData = (form.numberCorrect / form.participants) * 100


        setDifficultyIndex(Number(resultData.toFixed(2)))
            
        }

        if (form.numberStrong , form.numberWeak , form.numberCorrectStrong , form.numberCorrectWeak) {

        const resultData = ( form.numberCorrectStrong / form.numberStrong ) - ( form.numberCorrectWeak / form.numberWeak)

        setDiscriminationIndex(Number(resultData.toFixed(2)))
                    
        }
        
        

        
        setAnalysisData?.((prev) => ({
            ...prev,
            difficultyIndex: difficultyIndex,
            discriminationIndex: discriminationIndex,
        }));
    }, [form, difficultyIndex , discriminationIndex]);

    return null;  
}

export default ExamAnalysisService;