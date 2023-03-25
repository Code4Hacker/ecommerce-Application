import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

function Banner({ banner }) {
  return (
    <div className='banner-container'>
      <div className="shadow">
        <div className="float-left">
          <p>{banner[0].smallText}</p>
          <h3>{banner[0].midText}</h3>
          <h1>{banner[0].largeText1}</h1>
          <img src={urlFor(banner[0].image && banner[0].image[0]).url()} alt={banner[0].name}/>
          <Link href={`/product/${banner[0].slug.current}`}>
              <button type='button'>{banner[0].buttonText}</button>
          </Link>
        </div>
        <div className="description">
          <div className="desc">
              <h5>Description</h5>
              <p>{banner[0].desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner