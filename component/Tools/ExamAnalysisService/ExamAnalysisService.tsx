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

interface ExamAnalysisServiceProp {
    form?: Form;
    setAnalysisData?: (updater: (prev: Record<string, any>) => Record<string, any>) => void;
}

const ExamAnalysisService: React.FC<ExamAnalysisServiceProp> = ({ form, setAnalysisData }) => {

    const [ difficultyIndex , setDifficultyIndex ] = useState(0)
    const [ discriminationIndex , setDiscriminationIndex ] = useState(0)
    
    useEffect(() => {
        if (!form) return;
        
        if (form.numberCorrect , form.participants) {

        setDifficultyIndex( (form.numberCorrect / form.participants) * 100 )
            
        }

        if (form.numberStrong , form.numberWeak , form.numberCorrectStrong , form.numberCorrectWeak) {

        setDiscriminationIndex( ( form.numberCorrectStrong / form.numberStrong ) - ( form.numberCorrectWeak / form.numberWeak) )
                    
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