import React from 'react';
import cartImg from "../img/cart.png";
import {useDispatch, useSelector} from "react-redux";
import products from '../data/Data.json'
import {addToCart} from "../redux/index.js";

const MainPage = () => {


    const cart=useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        const productInCart = cart.some(item => item._id === product._id)

        if(!productInCart){
            dispatch(addToCart(product))
        }else {
            alert("Этот продукт уже добавлен")
        }

    }


    return (
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <img style={{width:"200px"}} src={cartImg} alt=""/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>купить</button>
                </div>
            ))}
        </div>
    );
};

export default MainPage;