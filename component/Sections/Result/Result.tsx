import React from "react";

interface AnalysisData {
    difficultyIndex: Number,
    discriminationIndex: Number,
}

interface Result {
    analysisData?: AnalysisData
}

const Result: React.FC<Result> = ({analysisData}) => {

 return (
    <div className=" bg-amber-900 w-[100px] h-[70px]">

    </div>
 )
}

export default Result