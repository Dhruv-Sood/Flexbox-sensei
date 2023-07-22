import { useState } from 'react'
function HomePage({ startGame }) {

    const [showRules, setShowRules] = useState(false)
    const toggleRules = () => {
        setShowRules((prev) => !prev)
    }


    return (



        <div className='bg'>
    
            {showRules ? 
            
            <div className='h-remaining grid place-content-center'>
                <div className="h-[600px] w-[800px] bg-black bg-opacity-80 text-white font-mono tracking-[1px] p-4" >
                <div className='flex justify-between font-bold text-3xl h-[40px]'>
                    <span>RULES</span>
                    <span onClick={toggleRules} className='hover:cursor-pointer'>X</span>
                </div>
                <div className='grid place-content-center h-[500px] text-2xl leading-[40px]'>
                    -> This is a Flexbox Mastery Game
                    <br />
                    -> Preform the tasks and get the points <br />
                    -> For Every Correct Answer you get 4 points <br />
                    -> For Every Incorrect Answer you lose 1 point <br />
                    All the best!!!
                </div>
                </div>
            </div>
            
            
            :


                <div className="h-remaining  flex flex-col w-screen justify-center items-center gap-4">
                    <div className="flex gap-4">
                        <div className="homeBtn" onClick={() => startGame()}>START GAME</div>
                        <a className="text" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank"><div className="homeBtn">LEARN FLEXBOX</div></a>
                    </div>
                    <div className="flex">
                        <div className="homeBtn" onClick={toggleRules} >RULES</div>
                    </div>
                </div>
            }
        </div>
    )
}
export default HomePage