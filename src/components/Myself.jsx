import React from 'react';
import Special from './Special';

const Myself = ({ring}) => {
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;