import React from 'react';

const TShirt = ({shirt, cartHandler}) => {
    return (
        <div className='p-4 rounded-lg border border-blue-300'>
            <img src={shirt.picture} alt="" />
            <h2>{shirt.name}</h2>
            <h3>Price: ${shirt.price}</h3>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => cartHandler(shirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;