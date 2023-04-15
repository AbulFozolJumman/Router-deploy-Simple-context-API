import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Uncle</h2>
            <Cousin>Abir</Cousin>
            <Cousin>Sakib</Cousin>
        </div>
    );
};

export default Uncle;