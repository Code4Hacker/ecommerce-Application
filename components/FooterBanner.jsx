import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
function FooterBanner({ ftBanner }) {
  return (
    <div className='ftBanner-container'>
      <div className="shadow">
        <div className="float-left">
          <p>{ftBanner[0].smallText}</p>
          <h3>{ftBanner[0].midText}</h3>
          <h2>{ftBanner[0].largeText2}</h2>
          <img src={urlFor(ftBanner[0].image[0]).url()} alt="Headphone"/>
          <Link href={`/product/${ftBanner[0].slug.current}`}>
              <button type='button'>{ftBanner[0].buttonText}</button>
          </Link>
          <div className='discount'>{ftBanner[0].saleTime}</div>
        </div>
        <div className="description">
          <div className="desc">
              <h5>Discount</h5>
              <p>{ftBanner[0].discount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner