import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import "./Home.css"
import Cart from './Cart';
import { toast } from 'react-toastify';

const Home = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const cartHandler = (shirt) => {
        const exist = cart.find(e => e._id === shirt._id)
        if (exist) {
            toast.success('Already added!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            const newCart = [...cart, shirt];
            setCart(newCart)
        }
    }

    const removeFromCart = (id) => {
        const remaining = cart.filter(i => i._id !== id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='grid grid-cols-3 gap-4 m-12'>
                {
                    shirts.map(shirt => <TShirt
                    key={shirt._id}
                    shirt={shirt}
                    cartHandler={cartHandler}
                    ></TShirt>)
                }
            </div>
            <div className='m-12'>
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;