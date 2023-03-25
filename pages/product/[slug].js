import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../lib/client';
import { FaCrown } from "react-icons/fa";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import SmallCard from '../../components/SmallCard';
import { useStateContext } from '../../context/StateContext';
import Image from 'next/image';
const Slug = ({ oneData, products }) => {
  const [images, setImages] = useState(0);
  const {image, name, price, details, _id} = oneData;
  const rank = "(15)";
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  const handlerBuyCart = () => {
    onAdd(oneData, qty);
    setShowCart(true);
  }
  return (
    <div className='slug'>
        <div className='col-xl-12 smart-object'>
        <div className='images left'>
            <div className='image'>
                <Image src={urlFor(image && image[images])} alt={name}/>
            </div>
            <div className='related'>
                {
                    image?.map((item, i) => (
                        <div className={i===images?"selected":"little-view"} key={i}>
                            <Image src={urlFor(item).url()} onMouseMove={() => setImages(i)} alt=""/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='float-right'>
            <h1>{name}</h1>
            <span className="ranking">
                <FaCrown/>
                <FaCrown/>
                <FaCrown/>
                <FaCrown/>
                <FaCrown/>
                <span>{rank}</span>
            </span>
            <p className='details'>Details:</p>
            <p>{details}</p>
            <p className='ranking'>{price} TZS</p>
            <div className="quantity">
                <div>{qty<=1?"Quantity":"Quantities"}:</div>
                <div className='add-to-cart'>
                    <button type='button' onClick={decQty}>-</button><button>{qty}</button><button type='button' onClick={incQty}>+</button>
                </div>
            </div>
            <div className="cart-buttons">
                <button type='button' onClick={() => onAdd(oneData, qty)}><BsFillCartPlusFill/> Add Cart</button>
                <button type="button" onClick={handlerBuyCart}><BsFillCartCheckFill/> Buy Now</button>
            </div>
        </div>
        </div>
        <div className='col-xl-12 float-center'>
            <h1>You may also like</h1>
            <span>Best Products wish you will like them</span>
            <div className='other-items'>
                <div className='row flexing-row'>
                {products?.map((item) => <SmallCard key={item._id} smallCard={item}/>)}
                </div>

            </div>
        </div>
    </div>
  )
}
export const getStaticPaths = async () => {
    const queries = `*[_type == "product"]{
        slug{
            current
        }
    }`;
    const products = await client.fetch(queries);
    const paths = products.map((product) => ({
        params:{
            slug: product.slug.current
        }
    }));
    return {
        paths,
        fallback:"blocking",
    }
}
export const getStaticProps = async({ params:{ slug }}) => {
    const queries = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const oneData = await client.fetch(queries);
    const product = '*[_type == "product"]';
    const products = await client.fetch(product);
    console.log(oneData);
    return {
      props: { oneData, products }
    }
  }
export default Slug;