import React from 'react';
import { Link } from 'react-router-dom';
import vehicle from '../img/vehicle.svg';
const Carlabel = (props) => {
        let fuelStatus = props?.fuel/100;
        let fuelStyle = 'h-[120px] w-full absolute z-0 bg-green-600';

        if (fuelStatus <= 0.3) {
                console.log('asd')
                fuelStyle = `h-[120px] w-[${fuelStatus*100 + '%'}] absolute z-0 bg-red-600`;
        } else if (fuelStatus < 0.7 & fuelStatus > 0.3) {
                fuelStyle = `h-[120px] w-[${fuelStatus*100 + '%'}] absolute z-0 bg-yellow-300`;
                console.log(fuelStyle);
        }
        // console.log(fuelStyle);
        return (
                <div className="h-[120px] w-full flex justify-start items-end mt-4 relative">
                        <div className={fuelStyle+''}></div>
                        <div className="h-full w-[100px] text-white flex flex-col justify-around z-10 bg-transparent px-4">
                                <div className="">
                                        <p className="text-[18px] font-bold"> {props.carName} </p>
                                        <p className="">123-123-123</p>
                                </div>
                                <div>
                                        <p className="text-[14px]">  {props.carType} </p>
                                </div>
                        </div>
                        <div className="ml-8 z-10 bg-transparent">
                                <img src={ vehicle } className="h-[120px] w-auto" />
                        </div>
                </div> 
        );
};

export { Carlabel };

const CarScreen = () => {
        const logo = 'black_logo.png';
        return (
                <div className="h-screen bg-[#000000] flex flex-col border-1">
                        <div className="flex justify-between items-center mt-8 px-4">
                                <div className="w-fit p-1 transition-[background] bg-white active:bg-[#0082f5]/20 rounded-full"
                                >
                                        <Link to="/"><img src={ logo } className='w-[16px] h-[16px] rounded-full ' /></Link>
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
                        <Carlabel carName='KIA' carType='TRUCK' fuel={30}/>
                        <Carlabel carName='KIA' carType='TRUCK' fuel={50}/>
                        <Carlabel carName='KIA' carType='VAN' fuel={100}/>
                        <div className="bg-yellow-300"></div>
                                
                </div>
        );
};

export default CarScreen; 