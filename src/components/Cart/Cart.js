import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Card, Button } from "react-bootstrap";
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const { cartList, clear, removeItem } = useCartContext()

    return(
        <div>
            <div className='cardCart'>
            {cartList.map(product => 
                <Card>
                    <div className="product-cart__delete" onClick={() => removeItem(product.id)}>
                        <FontAwesomeIcon icon={faTimes} color={'white'} size={'1x'}/>
                    </div>
                    <Card.Img variant="top" className="product-cart__image" src={product.image} alt="" />
                    <Card.Body>
                        <Card.Title className="product-cart__name">{product.name}</Card.Title>
                        <Card.Text className="product-cart__price">${product.price}</Card.Text>
                        <Card.Text className="product-cart__price">Cantidad: <b>{product.count}</b></Card.Text>
                        <Card.Text className="product-cart__price">Categoría: <b>{product.categoria}</b></Card.Text>
                        <Card.Text className="product-cart__price">Total: <b>${product.count * product.price}</b></Card.Text>
                    </Card.Body>
                </Card>)}
            </div>
            <Button variant="secondary" size="lg" onClick={clear}>Vaciar Carrito</Button>
        </div>
    );
};


export default Cart;
