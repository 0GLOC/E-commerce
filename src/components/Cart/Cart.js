import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Card, Button } from "react-bootstrap";
import './Cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, clear, removeItem, precioTotal } = useCartContext()

    return(
        <div>
            {cartList.length === 0 ? <Card className="cart-empty">Carrito Vacio</Card> : null}
            <div className='cardCart'>
            {cartList.map(product => 
                <Card>
                    <div className="product-cart__delete" onClick={() => removeItem(product.id)}>
                        <FontAwesomeIcon icon={faTimes} color={'white'} size={'1x'}/>
                    </div>
                    <Card.Img variant="top" className="product-cart__image" src={product.image} alt="" />
                    <Card.Body>
                        <Card.Title className="product-cart__name">{product.name}</Card.Title>
                        <br></br>
                        <Card.Text className="product-cart__price">Precio: <b>${product.price * product.count}</b></Card.Text>
                        <Card.Text className="product-cart__price">Cantidad: <b>{product.count}</b></Card.Text>
                        <Card.Text className="product-cart__price">Categoría: <b>{product.categoria}</b></Card.Text>
                    </Card.Body>
                </Card>
                )}
            </div>
            {cartList.length === 0 ? null : <Card className="total-price">${precioTotal()}</Card>}
            {cartList.length === 0 ? <Link to='/'><Button variant="dark" size="lg">Ver Productos</Button></Link> : <Button variant="secondary" size="lg" onClick={clear}>Vaciar Carrito</Button>}
        </div>
    );
};


export default Cart;
