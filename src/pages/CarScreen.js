import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vehicle from '../img/vehicle.svg';
import {getFirestore, collection, getDocs} from "firebase/firestore"; 
import app from '../firebase';

const db = getFirestore(app);

const Carlabel = (props) => {
        let fuelStatus = props?.fuel;
        let fuelStyle = 'h-[120px] w-full absolute z-0 bg-green-600';

        if (fuelStatus <= 30) {
                fuelStyle = `bg-red-600 absolute z-0 h-[120px]`;
        } else if (fuelStatus < 70 & fuelStatus > 31) {
                fuelStyle = `bg-yellow-400  absolute z-0 h-[120px]`;
        }
        return (
                <div className="h-[120px] w-full flex justify-start items-end mt-4 relative">
                        <div style={{ width: `${fuelStatus}%`}} className={fuelStyle}> </div>
                        <div className="h-full w-[120px] text-white flex flex-col justify-around z-10 bg-transparent px-4">
                                <div className="">
                                        <p className="text-[18px] font-bold"> {props.carName} </p>
                                        <p className=" w-max">{props.carNum}</p>
                                </div>
                                <div>
                                        <p className="text-[14px] w-max">  {props.carType} </p>
                                </div>
                        </div>
                        <div className="ml-2 z-10 bg-transparent">
                                <img src={ vehicle } className="h-[120px] w-auto" />
                        </div>
                </div> 
        );
};

const CarScreen = () => {
        const [vehicleList, setVehicleList] = useState([]);
        const fetchVehicle = async () => {
                await getDocs(collection(db, "vehicle"))
                .then((e)=>{       
                        console.log(e);        
                        const newData = e.docs
                                .map((doc) => ({...doc.data(), id:doc.id }));
                                setVehicleList(newData);                
                        console.log(vehicleList);
                })
        }
        useEffect(()=>{
                fetchVehicle();
        }, [])

        const logo = 'black_logo.png';
        return (
                <div className="h-screen bg-[#000000] flex flex-col border-1">
                        <div className="flex justify-between items-center mt-8 px-2">
                                <div className="w-fit py-1 transition-[background] bg-white active:bg-[#0082f5]/20 rounded-full"
                                >
                                        <Link to="/"><img src={ logo } className='w-[16px] h-[16px] rounded-full ' /></Link>
                                </div>
                                <p className="font-bold text-white">Vehicle</p>
                                <div
                                        className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
                                        onClick={ () => {
                                                // console.log("asd");
                                        } }>
                                        <Link to="/stocks/add"><p className="text-[#0082f5]">Add</p></Link>
                                </div>
                        </div>
                        {
                                vehicleList.map((e,i) => {
                                        return (
                                                <Carlabel key={i} carNum={e.carNum} carName={e.carName} carType={e.carType} fuel={e.fuel}/>
                                        )
                                })
                        }
                </div>
        );
};

export default CarScreen; 