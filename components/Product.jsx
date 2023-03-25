import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'

function Product({ product: {image, slug, name, price} }) {
  return (
    <div className='col-3 product-box'>
        <Link href={`/product/${slug.current}`} className="links">
          <div className="product-image">
            <img src={urlFor(image && image[0]).url()} alt={name} />
            <p>{name}</p>
            <div className='price'>{price} TZS</div>
          </div>
        </Link>
    </div>
  )
}

export default Product