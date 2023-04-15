import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Aunty</h2>
            <Cousin>Rohim</Cousin>
            <Cousin>Korim</Cousin>
        </div>
    );
};

export default Aunty;