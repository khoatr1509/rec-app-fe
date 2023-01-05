import React from 'react';
import { Link } from 'react-router-dom';

// const CostLabel = (props) => {
//         return (
//                 <>
//                         <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
//                                 <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">{props.costName} COST</div>
//                                 <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder={props.costPlaceholder} />
//                                 <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
//                         </div></>
//         );
// };

// export { CostLabel };

const CarScreen = () => {
        const logo = 'black_logo.png';
        return (
                <div className="h-FULL bg-[#000000] flex flex-col">
                                <div className="flex justify-between items-center mt-8 px-4">
                                        <div className="w-fit p-1 transition-[background] bg-white active:bg-[#0082f5]/20 rounded-full" 
                                >
                                        <Link to="/"><img src={logo} className='w-[16px] h-[16px] rounded-full '/></Link>
                                </div>
                                <p className="font-bold text-white">Vehicle</p>
                                <div
                                        className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
                                        onClick={ () => {
                                                console.log("asd");
                                        } }>
                                        <Link to="/stocks/add"><p className="text-[#0082f5]">Add</p></Link>
                                </div>
                        </div>
                        <div className="h-[185px] w-full">
                                <div className="">
                                        
                                </div>
                        </div>
                        
                </div>
        );
};

export default CarScreen; 