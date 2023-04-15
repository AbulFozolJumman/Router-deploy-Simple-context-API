import React, { useContext } from 'react';
import { MyContext } from './Grandpa';

const Special = ({ring}) => {
    const angty = useContext(MyContext)
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Special</h2>
            <p>{ring}</p>
            <p>{angty}</p>
        </div>
    );
};

export default Special;