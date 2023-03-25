import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from "next/link";
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Menu = () => {
  const {showCart, setShowCart ,totalQuantity } = useStateContext();
  return(
    <div className="menu-container">
      <div className='menu'>
      <div className="smart_menu">
          <div className="carts">
            <h2><Link href="/" className='gradient small'><span>Gemini</span><span></span></Link></h2> 

            <button className='cart-tool' onClick={() => setShowCart(true)}><AiOutlineShoppingCart/> <span className='cart-items'>{totalQuantity}</span></button>
          </div>
      </div>
    </div>
      {showCart && <Cart/>}
    </div>
  );
}
export default Menu;