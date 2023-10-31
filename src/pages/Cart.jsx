import React from 'react';
import {useSelector} from "react-redux";
import cartImg from '../img/cart.png'
const Cart = () => {

    const cart=useSelector(state => state.cart)


    return (
        <div>
            {cart.map((product) => (
                <div key={product._id}>
                    <img src={cartImg} alt=""/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>купить</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;