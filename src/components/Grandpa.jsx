import React, { createContext } from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Aunty from './Aunty';

export const MyContext = createContext('Diamond')

const Grandpa = () => {
    const ring = "Gold ring";
    return (
        <div className='text-center border border-yellow-300 rounded-lg p-10 m-10'>
            <h2 className='text-center pb-5'>Grandpa</h2>
                <div className='grid grid-cols-3 gap-5'>
                    <MyContext.Provider value='Diamond Ring'>
                        <Father ring={ring}></Father>
                        <Uncle />
                        <Aunty />
                    </MyContext.Provider>
                </div>
        </div>
    );
};

export default Grandpa;