import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    const message = cart.length === 0 ? "Buy something" : "Thanks for Shopping"

    return (
        <div>
            <h2 className={cart.length > 0 ? 'text-red-500' : "text-blue-500"}>Cart Summary: {cart.length} </h2>
            <h3>{message}</h3>
            {
                cart.map((item, index) => <h3 className={`text-green-300 ${cart.length > 1 ? "text-amber-700" : "text-fuchsia-600"}`} key={index}>{item.name}
                <button onClick={() => removeFromCart(item._id)}  className="bg-white hover:bg-blue-200 font-bold py-2 ml-3 px-4 rounded">X</button>
                </h3>)
            }
            <p>{
                cart.length > 0 && "Happy shopping"    
            }</p>
            <p>{
                cart.length > 0 || "Fokinni"    
            }</p>
        </div>
    );
};

export default Cart;