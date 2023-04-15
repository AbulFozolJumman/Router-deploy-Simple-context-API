import React from 'react';
import Myself from './Myself';

const Father = ({ring}) => {
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Father</h2>
            <Myself ring={ring}></Myself>
        </div>
    );
};

export default Father;