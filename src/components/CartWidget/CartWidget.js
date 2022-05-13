import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import '../CartWidget/CartWidget.css'


const CartWidget = () => {
    return(
        <Link to='/cart'>
            <div className="cart-widget">
                <FontAwesomeIcon icon={faGamepad} size="2x" color="white" />
                <div className="qty-display">0</div>
            </div>
        </Link>
    );
};


export default CartWidget;
