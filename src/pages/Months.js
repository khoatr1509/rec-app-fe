import React, { useState } from "react";
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import { ref, listAll, getDownloadURL} from "firebase/storage";
import { storage } from "../firebase";
import notes from '../data/data';

let [...arr] = notes;

const listRef = ref(storage, 'rec/');

export const Months = () => {
    let match = useRouteMatch();
    const [listPdf, setPdf] = useState([]);

    useEffect(() => {
        listAll(listRef)
            .then(async (res) => {
                Promise.all(
                    res.items.map((itemRef) => {
                        return getDownloadURL(ref(storage, itemRef.fullPath))
                    })
                ).then((urls) => {
                    console.log(urls)
                    setPdf(urls)
                })
            })
    }, [])
    // console.log('https://firebasestorage.googleapis.com/v0/b/rec-app-803db.appspot.com/o/rec%2'.length)
    // console.log(listPdf[0])
    let a = Array(3 - listPdf.length % 3 + 3).fill(0);
    // console.log(a)
    console.log(listPdf[0]);
    return (
        <Router>
            <Switch>
                <Route path={`${match.path}`}>
                    <h2 className="text-3xl my-4 md:my-8 md:text-5xl font-extrabold text-red-600 m-auto mt-4 w-[300px] md:w-[460px] text-center">MAYCHA <br></br> BUSINESS RESULT</h2>

                    <div className=" mx-auto flex row flex-wrap items-center justify-center mobile:w-[381px] medium-mobile:w-[393px] mobile:mx-auto h-fit sm:w-[80%] sm:items-start md:justify-start">
                        {listPdf.map(i => {
                            let url = i;
                            const [a, b, month, year] = i.slice(78, 101).split('-');
                            if (parseInt(month) <= 12) {
                                    return (
                                        <a className=" mobile:w-[126px] mobile:h-[126px] medium-mobile:w-[130px] medium-mobile:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center flex-col sm:py-2 px-2 sm:px-4 text-center bg-transparent mr-0 mt-0 font-bold border-black border-[1px] rounded-lg bg-red-600 text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                            href={url}
                                        >
                                            <p className=" w-full">Tháng {month}</p>
                                            <p>2022</p>
                                        </a>
                                    )
                                } else {
                                    return (
                                        <a className=" mobile:w-[126px] mobile:h-[126px] medium-mobile:w-[130px] medium-mobile:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center flex-col sm:py-2 px-2 sm:px-4 text-center bg-transparent mr-0 mt-0 font-bold border-black border-[1px] rounded-lg bg-red-600 text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                            href={url}
                                        >
                                            <p className=" w-full">Tháng {month % 12}</p>
                                            <p>2023</p>
                                        </a>
                                    )
                                }
                        })}
                        {
                            a.map((i) => {
                                return (
                                    <a className=" mobile:w-[126px] mobile:h-[126px] medium-mobile:w-[130px] medium-mobile:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center flex-col sm:py-2 px-2 sm:px-4 text-center bg-transparent mr-0 mt-0 font-bold border-black border-[1px] rounded-lg bg-slate-50 text-gray-300 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                    href={`/months`}
                                    target="_blank" rel="noreferrer"
                                >
                                        <p className=" w-full">Tháng</p>
                                        <p>2023</p>
                                </a>)
                            })
                        }
                    </div>
                </Route>
            </Switch>
        </Router >

    )
}
