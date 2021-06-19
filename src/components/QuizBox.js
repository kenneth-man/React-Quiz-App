import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context.js';

const QuizBox = ({ ques, cho1, cho2, cho3, cho4, ans, index }) => {
    const { incrementScore, decrementScore } = useContext(Context);
    const [choiceChosen, setChoiceChosen] = useState(null);

    const choiceClicked = (event) => {
        //getting all buttons for a particular question
        const allBtns = [...document.getElementsByClassName(`btn-${index}`)];

        //removing all active styling
        allBtns.forEach(curr => curr.classList.remove('quizBox__btn--active'));

        //add active styling on button that was clicked
        event.target.classList.add('quizBox__btn--active');

        //update state 'choiceChosen' 
        setChoiceChosen(event.target.textContent);
    }

    //using 'useEffect' to listen for state changes; runs on state changed in 2nd argument [] 
    //e.g. therefore waiting for 'setChoiceChosen' to finish updating 'choiceChosen', then comparing 'choiceChosen' with 'ans'. ('useState' update function is async; not immediate)
    useEffect(() => {
        ans === choiceChosen ? incrementScore() : decrementScore();
    }, [choiceChosen])

    return (
        <div className='quizBox column round shadow-light transition'>
            <h3>{ques}</h3>

            <div className='quizBox-row row'>
                <button className={`btn btn-${index}`} onClick={(e) => choiceClicked(e)}>{cho1}</button>
                <button className={`btn btn-${index}`} onClick={(e) => choiceClicked(e)}>{cho2}</button>
                <button className={`btn btn-${index}`} onClick={(e) => choiceClicked(e)}>{cho3}</button>
                <button className={`btn btn-${index}`} onClick={(e) => choiceClicked(e)}>{cho4}</button>
            </div>
            

            <h4 className='hidden'>{ans}</h4>
        </div>
    )
}

export default QuizBox;