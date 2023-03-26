import React from "react";
import { Banner, Product, FooterBanner } from "../components";
import Preloader from "../components/Preloader";
import { client } from '../lib/client';
const Home = ({ queryData , bannerData}) => (
 
  <div className="app-container">
    <Preloader/>
    <Banner banner={ bannerData }/>
    <div className="container as-main">
      <h1>Best Seller Products</h1>
      <h4>All Treanding Accessories in 2023</h4>
      <div className="row product-container">
          {queryData?.map((queryData) => <Product product={ queryData } key={queryData._id}/>)}
      </div>
    </div>
      <FooterBanner ftBanner={ bannerData }/>
  </div>
);
export const getServerSideProps = async() => {
  const queries = '*[_type == "product"]';
  const queryData = await client.fetch(queries);
  const banner = '*[_type == "banner"]';
  const bannerData = await client.fetch(banner);
  return {
    props: { queryData, bannerData }
  }
}
export default Home;