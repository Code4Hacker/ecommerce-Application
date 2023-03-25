import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';
const SmallCard = ({ smallCard : { image, slug, name} }) => {
  return (
   <div className="col-2 product-box small-view">
     <Link href={`/product/${slug.current}`} className="hreff">
        <div className="name_for_it">
          <p>{ name }</p>
        </div>
        <img src={urlFor(image && image[0]).url()} alt={name}/>
     </Link>
   </div>
  )
}

export default SmallCard;