import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { Link } from 'react-router-dom';
import QuizBox from './QuizBox.js';

const Quiz = () => {
    const { questionsArr, newGame } = useContext(Context);

    return (
        <div className='content column quiz transition'>
            {
                questionsArr.map((curr,index) => 
                    <QuizBox 
                        key={index}
                        ques={curr.question}
                        cho1={curr.choice1}
                        cho2={curr.choice2}
                        cho3={curr.choice3}
                        cho4={curr.choice4}
                        ans={curr.answer}
                        index={index}
                    />
                )
            }

            <Link to='/results' className='btn' onClick={newGame}>See Results</Link>
        </div>
    )
}

export default Quiz;