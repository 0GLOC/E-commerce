import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import '../CartWidget/CartWidget.css'


const CartWidget = () => {
    const { cartList, cantidadTotal } = useCartContext()

    return(
        <Link to='/cart'>
            <div className="cart-widget">
                <FontAwesomeIcon icon={faGamepad} size="2x" color="white"/>
                {cartList.length >= 1 ? <div className="qty-display">{cantidadTotal()}</div> : null}
            </div>
        </Link>
    );
};


export default CartWidget;
