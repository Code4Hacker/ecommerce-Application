import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [qty, setQty] = useState(1);
    const [imgid, setImgid] = useState(0);

    let theProduct,index;
    const onAdd = (product, quantity, images) => {
        setImgid(images);
        const CheckTheProduct = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
        if(CheckTheProduct){
            const updateCart = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct, quantity : cartProduct.quantity + quantity
                }
            }
            );
            setCartItems(updateCart);
        }else{
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added on the cart.`);
    }
    const onRemove = (product) => {
        theProduct = cartItems.find((item) => item._id === product._id);
        const newCartItem = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice((prevPrice) => prevPrice -theProduct.price * theProduct.quantity);
        setTotalQuantity(prevQty => prevQty - theProduct.quantity);
        setCartItems(newCartItem);
    }
    const theProductFromCart = (id, value) => {
        theProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItem = cartItems.filter((item) => item._id !== id);
        
    if(value === 'inc') {
        setCartItems([...newCartItem, { ...theProduct, quantity: theProduct.quantity + 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + theProduct.price)
        setTotalQuantity(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (theProduct.quantity > 1) {
          setCartItems([...newCartItem, { ...theProduct, quantity: theProduct.quantity - 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - theProduct.price)
          setTotalQuantity(prevTotalQuantities => prevTotalQuantities - 1)
        }
      }
       
    }
    
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) {
                alert("We cannot Provide negative items, If your not Interested adding on the cart leave it as zero!");
                return 1;
            }
            return prevQty - 1;
        });
    }

    return(
        <Context.Provider value={
            {
                showCart,
                cartItems,
                setShowCart,
                totalQuantity,
                qty,
                incQty,
                decQty,
                onAdd,
                theProductFromCart,
                setTotalQuantity,
                onRemove,
                totalPrice,
                setTotalPrice,
                setCartItems,
                imgid

            }
        }>
            { children }
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);