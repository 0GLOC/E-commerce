import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart(item){
        setCartList( [
            ...cartList,
            item
        ] )
    }

    const removeItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((x) => x.id === id);

        newCart.splice(index, 1);

        setCartList([...newCart]);
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value= { {
            cartList,
            addToCart,
            clear,
            removeItem,
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;