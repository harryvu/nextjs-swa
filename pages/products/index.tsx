import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../../components/Product';
import Categories from '../../components/Categories';
import MainLayout from '../../layouts/main.layout';

async function getProducts() {
  // fetch data from an API
  const url = 'https://lfs-api.onrender.com/api/products?populate=*';
  const res = await fetch(url, { cache: 'no-store' });
  //const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();
  return data;
}

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products: products.data } };
}


const ProducsPage = ({ products }: { products: any }) => {

  return (
    <MainLayout>
      <div className="grid place-items-center min-h-screen bg-gray-50 p-8">
      <Head>
        <title>NextJS-SWA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className="p-4 max-w-6xl grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <li className="text-4xl text-red-700 font-noticia font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:col-span-3">
          <h1 className='md:col-span-2'>
            <span className='italic text-yellow-600'>All Products</span>
          </h1>
        </li>
        <li className='hidden md:block uppercase'>
          <Categories />
        </li>
        <li className='italic text-blue-600 sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-2 md:col-span-2 border-2 rounded-xl border-red-500 border-dotted p-4'>
          <p className='text-xl'>
          L & FS Global Trading is your premier gateway to authentic Vietnamese products and ingredients. Despite being a budding presence in the Australian landscape, our commitment runs deep: we meticulously source the finest ingredients straight from Vietnam, ensuring unparalleled quality. From gourmet restaurants to your own kitchen creations, L & FS Global Trading guarantees a touch of Vietnamese authenticity that will elevate and satisfy your culinary needs.
          </p>
        </li>
          {products.map((product:any) => {
            return (
              <Product key={product.id} product={product} />
            )
          })}
      </ul>
    </div>
    </MainLayout>    
  )
}

export default ProducsPage