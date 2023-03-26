import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from "next/link";
import jQuery from 'jquery';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Menu = () => {
  const {showCart, setShowCart ,totalQuantity } = useStateContext();
  const darkmode = () => {
    jQuery(".dark").on("click",function(){
      if(jQuery(".dark").hasClass("clicked")){
        jQuery(".layout").removeClass("darkmode");
        jQuery("body").removeClass("darkmode");
        console.log("true");
        jQuery(".dark").removeClass("clicked");
      }else{
        jQuery(".layout").addClass("darkmode");
        jQuery("body").addClass("darkmode");
        
        console.log("false");
        jQuery(".dark").addClass("clicked");
      }
    });
  }
  return(
    <div className="menu-container">
      <div className='menu'>
      <div className="smart_menu">
          <div className="carts">
            <div className="logo_cart">
            <div className="dark" onClick={darkmode} title="Double Tap if not work">
            </div>
            <h2><Link href="/" className='gradient small'><span>Gemini</span><span></span></Link></h2> 
            </div>

            <button className='cart-tool' onClick={() => setShowCart(true)}><AiOutlineShoppingCart/> <span className='cart-items'>{totalQuantity}</span></button>
          </div>
      </div>
    </div>
      {showCart && <Cart/>}
    </div>
  );
}
export default Menu;