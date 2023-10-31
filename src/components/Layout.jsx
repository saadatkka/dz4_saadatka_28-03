import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Layout = () => {

    const cart=useSelector(state => state.cart)

    return (
        <div>
            <div>Корзина: {cart.length}</div>
            <header>
                <Link to={'/'}>Main</Link>
                <Link to={'/cart'}>Cart</Link>
            </header>

            <Outlet/>
        </div>
    );
};

export default Layout;