import React from 'react';
import { Link } from 'react-router-dom';

const DisplayText = (props) => {
    return (
        <>
        <p className="text-white text-base">
            {props.text}
        </p>
        <p className="text-white text-base mt-[-4px]">
            {props.subtext}
        </p>
        <p className="text-white font-bold text-[40px] mt-[-4px]">
        {props.amount}
        </p></>
    )
};

export {DisplayText};

export const StockScreen = () => {
    // useEffect(() => {
    //     getDocs(collection(db, "vehicle"))
    //         .then(async (res) => {
    //             res.forEach((e) => {
    //                 console.log(e);
    //             })
    //         });
    // }, [])

    const logo = 'black_logo.png';
    return (
        <div className="h-screen bg-[#000000] flex flex-col">
            <div className="flex justify-between items-center mt-8 px-4">
                <div className="w-fit p-1 transition-[background] bg-white active:bg-[#0082f5]/20 rounded-full" 
                    >
                    <Link to="/"><img src={logo} className='w-[16px] h-[16px] rounded-full '/></Link>
                </div>
                <p className="font-bold text-white">Stock</p>
                <div
                    className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
                    onClick={() => {
                    console.log("asd")
                    }}>
                    <Link to="/stocks/add"><p className="text-[#0082f5]">Add</p></Link>
                </div>
            </div>
            <div className="mt-[32px] bg-[#1C1C1E] w-[350px] h-[170px] border-style mx-auto py-[32px] flex flex-col items-center justify-center">
                <DisplayText text="ALUMINUM" subtext="CAN" amount="12"/>
            </div>
            <div className="bg-[#1C1C1E] w-[350px] h-[170px] border-none mx-auto rounded-[12px] border-[2px] flex mt-[12px]">
                <div className=" stock-card-l">
                    <DisplayText  text="CARDBOARD" subtext="CAN" amount="12"/> 
                </div>
                <div className=" stock-card-r">
                    <DisplayText  text="CARDBOARD" subtext="RETURN" amount="48"/>
                </div>
            </div>
            <div className="bg-[#1C1C1E] w-[350px] h-[170px] border-none mx-auto rounded-[12px] border-[2px] flex mt-[12px]">
                <div className=" stock-card-l">
                    <DisplayText  text="PAPER" subtext="BOOK" amount="5"/> 
                </div>
                <div className=" stock-card-r">
                    <DisplayText  text="PAPER" subtext="OFFICE" amount="7"/>
                </div>
            </div>
        </div>
    )
}
