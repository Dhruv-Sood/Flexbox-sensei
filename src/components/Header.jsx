import { useState, useEffect } from 'react'
import './Header.css'
function Header({score , seconds}) {

    
   



    return (
        <header className="h-[90px] bg-white flex justify-between px-4 items-center">

            {/* SCORE DIV */}
            <div className="flex flex-col justify-center items-center">
                <div className="bg-white p-4 rounded-full shadow-xl">{score}</div>
                <h1 className="font-bold">Score</h1>
            </div>

            {/* LOGO */}
            <div className="title text-4xl font-mono hover:cursor-default">Flexbox<span className="text-red-500"> Sensei</span></div>

            {/* TIME DIV */}
            <div className="flex flex-col justify-center items-center">
                <div className="bg-white py-4 rounded-full w-[70px] shadow-xl text-center">{seconds}</div>
                <h1 className="font-bold">Time</h1>
            </div>

        </header>
    )
}
export default Header