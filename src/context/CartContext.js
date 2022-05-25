import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart(item){
        const index = cartList.findIndex(product => product.id === item.id)
        if (index !== -1) {
            const cantidadVieja = cartList[index].count
            const newCart = cartList.filter(prod => prod.id !== item.id)
            item.count += cantidadVieja
            setCartList([...newCart, item])
        } else { 
            setCartList( [
                ...cartList,
                item
            ] )
        }
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


    const precioTotal = () => {
        return cartList.reduce((contador, prod) => contador += (prod.count * prod.price) ,0)
    }

    const cantidadTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.count ,0)
    }

    return (
        <CartContext.Provider value= { {
            cartList,
            addToCart,
            clear,
            removeItem,
            precioTotal,
            cantidadTotal,
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;