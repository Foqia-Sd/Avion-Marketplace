"use client"

import { product } from "@/sanity/schemaTypes/product";
import { createContext, useState } from "react"

export const CartContext = createContext({});

export const CartProvider = ({children} : any) => {
    // State for Open Close Cart
    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);

    // Items In Cart
    const [cartItems, setCartItems] = useState<any[]>([]);
    // Total Quantity
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Increase Quantity
    const incQty = () => {
         setQty((prevQty) => prevQty + 1)
    }

    // Decrease Quantiy
    const decQty = () => {
         setQty((prevQty) => {
            
            if(prevQty - 1 < 1 ) return 1;
            return prevQty - 1;
        })
    }

    // Add Product To Cart
    const addProduct = (product: any, quantity:number) => {

        const checkProductInCart = cartItems.find((item:any) => item._id == product._id)
        setTotalQuantity((prev) => prev + quantity)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)

        if(checkProductInCart) {
            const updateCartItems = cartItems.map((cartProduct:any) => {
                if(cartProduct._id == product._id)
                {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }else {
                    return cartProduct
                }
            });
            setCartItems(updateCartItems)

        }else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
    }

    const toogleCartItemQty = (id:any, value:any) => {
        let foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    const updatedCartItems = [...cartItems];

        if(value === 'plus') {
            updatedCartItems[index] = {...updatedCartItems[index], quantity:updatedCartItems[index].quantity + 1 }

            setCartItems([...updatedCartItems]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantity((prevTotalQty) => prevTotalQty + 1)

        }
        else if(value === 'minus') {
            if(foundProduct.quantity > 1) {
             updatedCartItems[index] = {...updatedCartItems[index], quantity:updatedCartItems[index].quantity - 1 }

            }
            setCartItems([...updatedCartItems]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            setTotalQuantity((PrevTotalQty) => PrevTotalQty - 1)

        } 
        
    }

    const onRemove = (product:any) => {

        let foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setCartItems(newCartItems)
        setTotalPrice((prevTotal) => prevTotal - foundProduct.price * foundProduct.quantity)
        setTotalQuantity((prevTotalQty) => prevTotalQty - foundProduct.quantity);
    }

    return (

        <CartContext.Provider

            value={{onRemove, toogleCartItemQty, totalPrice, totalQuantity, showCart, setShowCart, qty, incQty, decQty, cartItems, addProduct}}
        >
            <div>{children}</div>

        </CartContext.Provider>

    )
}

