import React, { useState, useEffect, createContext } from 'react';
import { questions } from './Questions.js';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    //should only define state that you want to listen to for changes
    //'initial state' is run every time component renders;if a 'callback function', run only first time component renders
    const [questionsArr, setQuestionsArr] = useState([]);
    const [removedQuestions, setRemovedQuestions] = useState([]);
    let [score, setScore] = useState(0);
    
    const addQuestionToArr = () => {
        const index = Math.round(Math.random() * questions.length);
        
        if(!questions[index]){
            newQuestion();
        } else {
            const questionChosen = questions[index];
            questions.splice(index,1);

            //updating 'questionsArr', spreading previous state; this triggers useEffect hook to run
            setQuestionsArr(() => [...questionsArr, questionChosen]);
            setRemovedQuestions(() => [...removedQuestions, questionChosen]);
        } 
    }

    const newQuestion = () => {
        //max 10 questions per quiz
        if(questionsArr.length < 10){
            addQuestionToArr();
        }
    }

    const newGame = () => {
        setQuestionsArr([]);
        removedQuestions.forEach(curr => questions.push(curr));
    }

    const incrementScore = () => {
        score === 10 ? setScore(10) : setScore(score+=1);
    }

    const decrementScore = () => {
        score === 0 ? setScore(0) : setScore(score-=1);
    }

    //this useEffect hook runs when component is initially rendered and whenever 'questionsArr' changes
    useEffect(() => {
        newQuestion();
    },[questionsArr])

    // useEffect(() => {
    //     console.log(score);
    // },[score])

    return (
        <Context.Provider value={{ score, incrementScore, decrementScore, newQuestion, newGame, questionsArr }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;