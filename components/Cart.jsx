import React, { useRef } from 'react';
import { AiOutlineDoubleLeft, AiFillDelete} from 'react-icons/ai';
import { GiShoppingCart } from "react-icons/gi";
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import { toast } from 'react-hot-toast';
import getStripe from '../lib/getStripe';
const Cart = () => {
  const { totalQuantity, totalPrice, setShowCart,  cartItems, theProductFromCart, onRemove} = useStateContext();
  const cartRef = useRef();
  const handlerCheckout = async () => {
    const stripe = await getStripe();
    const respose = await fetch('/api/stripe', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(cartItems),
    });
    if(respose.statusCode === 500) return;
    const data = await respose.json();
    console.log(data);
    toast.loading('Redirecting ...');
    
    stripe.redirectToCheckout({ sessionId: data.id});
  }
  return (
    <div className="cart-section" ref={cartRef}>
      <div className="cart-container">
        <div className="container margin-top-10">
           <button type='button' onClick={() => setShowCart(false)} className="btn-cls"><AiOutlineDoubleLeft/> Your Cart <span className="sharp gradient">({totalQuantity}) items</span>
           </button>
           {cartItems.length < 1 && (<div className="empty-cart">
              <GiShoppingCart size={200}/>
              <p className='small gradient sharp'>Oops, Sorry you didn&apos;t add anything either</p>
              <div className="shopping-btn">
                  <Link href="/">
                      <button onClick={() => setShowCart(false)}>Continue Shopping</button>
                  </Link>
              </div>
           </div>)}
           <div className="cart-products">
            <div className="cart-item">
              { cartItems.length > 0 && cartItems.map((item) => 
              <div className='item' key={item._id}>
                <img src={urlFor(item?.image[0])} alt=""/>
                <div className='small'>
                <div className='gradient sharp'><div className="left">{item.name}</div><div className="right right-align">Tsh.{item.price}/=</div></div>
                <div className="compress">
                    <div className='add-to-cart'>
                        <button type='button' onClick={() => theProductFromCart(item._id,'dec')}>-</button><button>{item.quantity}</button><button type='button' onClick={() => theProductFromCart(item._id,'inc')}>+</button>
                    </div>
                   <div className="icon_del" onClick={() => onRemove(item)}>
                      <AiFillDelete/>
                   </div>
                </div>
                </div>
              </div>
              )}
            </div>
            <div className="shopping-btn align-center smart-cash">
              {
                cartItems.length >= 1 && (
                  <div className='details'>
                    <div className='gradient'><div className="left">SubTotal</div><div className="right right-align">Tsh.{totalPrice}/=</div></div>
              </div>
                )
              }
              <button type="button" onClick={handlerCheckout}>PAY WITH STRIPE</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;