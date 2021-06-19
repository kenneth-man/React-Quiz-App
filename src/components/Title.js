import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <div className='content column title transition'>
            <h1>Quiz App</h1>

            <h2>10 Randomly Chosen General Knowledge Questions...</h2>

            <Link to='/quiz' className='btn'>Start</Link>
        </div>
    )
}

export default Title;