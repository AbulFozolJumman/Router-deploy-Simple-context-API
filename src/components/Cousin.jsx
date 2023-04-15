import React from 'react';

const Cousin = ({children}) => {
    return (
        <div className='text-center border border-yellow-300 rounded-lg'>
            <h2>Cousin</h2>
            <p>{children}</p>
        </div>
    );
};

export default Cousin;