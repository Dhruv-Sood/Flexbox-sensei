
import Option from './Option'
import data from '../questions'
import { useState, useEffect } from 'react'

let index = 0
function Game({ setScore , startTimer}) {

    useEffect(() => {
        // To Increment the seconds every 1000ms (1 second)
        const timerInterval = setInterval(() => {
            startTimer((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Clean up the interval when the component unmounts or the game ends
        return () => {
            clearInterval(timerInterval);
        };
    }, []);



    // STATES


    const [task, setTask] = useState(data[index].task)
    const [choices, setChoices] = useState(data[index].choices)
    const [correct, setCorrect] = useState(data[index].correct)
    const [cssProperty, setCssProperty] = useState(data[index].cssProperties)

    const [isSelectedCorrect, setIsSelectedCorrect] = useState(false)


    const [isGameFinished, setIsGameFinished] = useState(false)


    //To reset the state of isSelectedCorrect
    useEffect(() => {
        setIsSelectedCorrect(false)
    }, [task])

    //Check Ans
    const checkAns = (selected) => {
        if (selected === correct) {
            setScore((prev) => prev + 4)
            setIsSelectedCorrect(true)
            alert("Correct ans selected");
            return true

        } else {
            setScore((prev) => prev - 1)
            alert("Incorrect ans selected");
            return false

        }
    }



    // Next button pressed
    const nextBtnPressed = () => {
        if (index < data.length - 1) {
            index++
            setTask(data[index].task)
            setChoices(data[index].choices)
            setCorrect(data[index].correct)
            setCssProperty(data[index].cssProperties)
        } else {
            setIsGameFinished(true);
        }

    }

    return (


        <>
            {!isGameFinished &&
                <div className="h-remaining bg-slate-400 flex flex-col bg">

                    {/* QUESTION DIV */}
                    <div className="w-full pt-6 text-white font-semibold text-4xl grid place-content-center">
                        <div className='bg-[#24242393] p-2  rounded-xl'>
                        <span className='text-[#fffff3] mx-4'>{`Task ${index+1}:`}</span><span>{task}</span>
                        </div>
                    </div>

                    {/* OUTPUT DIV */}
                    <div className="p-10 flex gap-[100px]">
                        <div className={`h-[500px] w-[600px] bg-white flex p-[8px] gap-2 transition-all duration-[1s] ${isSelectedCorrect && cssProperty} bg-gradient-to-br from-indigo-300 via-pink-300 to-red-300 rounded-lg shadow-2xl`  }>
                            <div className={"h-[100px] w-[100px] grid place-content-center bg-[#c7eaf0] rounded-lg shadow-lg"}>1</div>
                            <div className="h-[100px] w-[100px] grid place-content-center bg-[#c7eaf0] rounded-lg shadow-lg">2</div>
                            <div className="h-[100px] w-[100px] grid place-content-center bg-[#c7eaf0] rounded-lg shadow-lg">3</div>
                        </div>

                        {/* OPTIONS DIV */}
                        <div className='flex flex-col justify-center items-center gap-4 h-[500px] w-[600px]'>
                            {/* {data[0].correct} */}
                            {choices.map((choice , i) => {
                                return <Option key={i} value={choice} checkAns={checkAns} />
                            })}
                        </div>
                    </div>

                    {/* NEXT BUTTON */}
                    <div className='flex w-screen justify-center mt-[-6px]'>
                    <button className="w-[100px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:cursor-pointer transform transition-transform duration-200" onClick={() => {
                        nextBtnPressed()
                    }}>{index<data.length-1 ? `Next` : `Finish`}</button>
                    </div>
                </div>
            }
        </>
    )

}
export default Game
