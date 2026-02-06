

const Description = () => {
     
    return (
        <div id="totalContactDescription" className=" w-full flex items-center flex-col">

            <div className=" w-[98vw] h-[1.5px] bg-gray-400"></div>
            
        <div id="textDescription" className="w-full ">
            
        <div id="title" className=" w-full flex justify-center text-2xl">
            Description
        </div>
        
        <div id="totalTextDescription" className=" flex flex-col gap-8 px-1 md:px-3">


<div id="part1Description" className=" flex flex-col gap-4">   
           
<h1 className=" text-xl"> Basic Exam Information </h1> 

<p className=" text-lg">These are the fundamental details needed to analyze the overall performance of the test.</p>


<p>
  <p> 1. Total Participants (Number of Examinees):</p>
  <p className=" text-gray-600" >· What it is: The total number of people who took the exam.</p>
  <p className=" text-gray-600">· How to get it: This is the simple count of all answer sheets or logged-in test-takers. It's the foundation for all other calculations.</p>
</p>

<p>
 <p> 2. Question Number:</p>
 <p className=" text-gray-600">· What it is: The sequential identifier for each question (e.g., Q1, Q2, Q3...).</p>
 <p className=" text-gray-600">· How to get it: This comes directly from the exam paper. The software will analyze each question separately.</p>
</p>  

<p>
 <p> 3. Correct Option (Key Answer):</p>
 <p className=" text-gray-600">· What it is: The letter or choice (e.g., A, B, C, D) that is the officially correct answer for that question.</p>
 <p className=" text-gray-600">· How to get it: This is provided by the exam creator or teacher. It's the answer key.</p>  
</p>

<p>
 <p> 4. Number of Correct Responses:</p>
 <p className=" text-gray-600">· What it is: For each question, this is how many test-takers chose the correct option.</p>
 <p className=" text-gray-600">· How to get it: After grading, you count how many answer sheets have the correct answer marked for that specific question.</p>
</p>

</div> 


<div id="part2Description" className=" flex flex-col gap-4" >

<h1 className=" text-xl"> Advanced Analysis (Item Analysis) </h1>

<p className=" text-lg">
This section requires separating test-takers into two groups: High Scorers and Low Scorers, typically based on their total score on the entire exam (e.g., top 27% and bottom 27%). This analysis helps determine if a question is good at distinguishing between knowledgeable and less knowledgeable students.
</p>


<p>
 <p>1. Number of Test-takers in the STRONG Group:</p> 
 <p className=" text-gray-600"> 
  <p>· What it is: The count of students who scored in the highest percentile (e.g., top 27%) on the entire exam.</p>
  <p className=" text-black"> How to get it:</p>
  <p>1. Calculate the total score for each student.</p>
  <p>2. Rank all students from highest to lowest score.</p>
  <p>3. Select the top 27% (a common standard) of the ranked list.</p>
  <p>4. Count the number of students in this selected group.</p>
 </p>
</p>

<p>
 <p>2. Number of Test-takers in the WEAK Group:</p>
 <p className=" text-gray-600">
  <p>· What it is: The count of students who scored in the lowest percentile (e.g., bottom 27%) on the entire exam.</p>
  <p className=" text-black"> How to get it:</p>
  <p>1. Follow the same steps as above.</p>
  <p>2. Select the bottom 27% of the ranked list.</p>
  <p>3. Count the number of students in this group.</p> 
 </p>
</p>

<p>
 <p>3. Number of Correct Responses in the STRONG Group (H):</p>
 <p className=" text-gray-600">
 <p>· What it is: For a specific question, how many students in the Strong Group answered it correctly.</p> 
 <p className=" text-black"> How to get it:</p> 
 <p>1. Identify your Strong Group members (from the step above).</p>
 <p>2. Look only at their answer sheets.</p>
 <p>3. Count how many of them got this particular question right.</p>    
 </p>
</p>


<p>
 <p> 4. Number of Correct Responses in the WEAK Group (L):</p>
 <p className=" text-gray-600">
 <p>· What it is: For a specific question, how many students in the Weak Group answered it correctly.</p>
 <p className=" text-black"> How to get it:</p>
 <p>1. Identify your Weak Group members.</p>
 <p>2. Look only at their answer sheets.</p>
 <p>3. Count how many of them got this particular question right.</p>
 </p>  
</p> 

    </div>
    </div>
        </div>



        </div>
    )
}

export default Description