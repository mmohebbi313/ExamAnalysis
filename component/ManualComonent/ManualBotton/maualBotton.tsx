import { FC } from "react"

interface ManualButtonProps {
 title: string;
 onClick: Function;
 disabled: boolean;
}

const ManualButton :FC<ManualButtonProps>  =  ({
    title,
    onClick,
    disabled
}) => {
 
    return (
   <button 
   className=" bg-[#1986B7] rounded-3xl w-fit h-fit px-4 py-1 
   text-[#E4EDF7]  shadow-[0_0px_10px] shadow-black 
   cursor-pointer hover:scale-[1.05] duration-300"
   onClick={() => onClick()}
   disabled={disabled}
   >
    {title}
    </button>
    )
}

export default ManualButton