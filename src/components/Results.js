import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { Link } from 'react-router-dom';

const Results = () => {
    const { score } = useContext(Context);

    return (
        <div className='content column results transition'>
             <h1>Results</h1>

             <h2>You scored: {score}/10 !</h2>

            {/* <Link to='/quiz' className='btn' onClick={newGame}>Play Again</Link> */}
            <Link to='/quiz' className='btn'>Play Again</Link>
        </div>
    )
}

export default Results;