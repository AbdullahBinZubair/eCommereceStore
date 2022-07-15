import React from 'react';
// import {HeroBanner} from '../components';
import HeroBanner from '../components/HeroBanner';
import { client } from '../lib/client';
import FooterBanner from '../components/FooterBanner';
import Product from '../components/Product'

const Button = () => {
  return <button>Click</button>;
};
const Home = ({products,bannerData}) => 
 (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
          <h2>Best Selling Product</h2>
          <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product.id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  );


export const getServerSideProps = async () =>{
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const query1 = '*[_type=="banner"]';
  const bannerData = await client.fetch(query1);

  // console.log(bannerData);
  return {
    props: {products, bannerData}
  }
};
export default Home