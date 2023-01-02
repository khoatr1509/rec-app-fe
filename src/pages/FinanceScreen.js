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

const FinanceScreen = () => {
        // const logo = 'black_logo.png';
        return (
                <div className="h-FULL bg-[#000000] flex flex-col">
                        <div className="flex justify-between items-center mt-8 px-4">
                                <p className="font-bold text-[#0082f5]">Cancel</p>
                                <p className="font-bold text-white">Finance - Add</p>
                                <div
                                        className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
                                        onClick={ () => {
                                                console.log("asd");
                                        } }>
                                        <Link to="/stocks/add"><p className="text-[#0082f5]">Done</p></Link>
                                </div>
                        </div>
                        <div className="bg-[#1C1C1E] w-[350px] h-[60px] border-none mx-auto rounded-[12px] border-[2px] flex mt-[12px]">
                                <div className=" flex flex-col items-center justify-center w-[175px] h-[60px] border-[2px] border-r-[1px] rounded-[12px] rounded-tr-none rounded-br-none border-[#3E3E3E] text-white">
                                        November
                                </div>
                                <div className=" flex flex-col items-center justify-center w-[175px] h-[60px] border-[2px] border-l-[1px] rounded-[12px] rounded-tl-none rounded-bl-none border-[#3E3E3E] text-white">
                                        2022
                                </div>
                        </div>
                        <form className="mt-4">
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='EMPLOYEES' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='400.000.000' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='FUEL' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='PHONE BILLING' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='VEHICLES' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">OPERATION COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='WAREHOUSE' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">INCURESS COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='DEVICE' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">INCURESS COST</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='MAINTENANCE' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">VND</div>
                                </div>
                                <div className=" flex flex-row justify-between px-4 items-center mt-4 mx-auto w-[350px] h-[64px] border-[2px] rounded-[12px] border-[#3E3E3E]">
                                        <div className="h-fit w-[68px] text-[#D9D9D9] text-[14px] flex">TAXES</div>
                                        <input className="h-fit w-[136px] text-center text-[#D9D9D9] bg-[#000000] text-[18px] flex" placeholder='10' />
                                        <div className="h-fit w-fit text-[#D9D9D9] text-[16px] flex">%</div>
                                </div>
                        </form>
                </div>
        );
};

export default FinanceScreen; 