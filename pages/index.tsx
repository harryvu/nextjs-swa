import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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


const Home = ({ products }: { products: any }) => {

  return (
    <div className="grid place-items-center min-h-screen bg-gray-50">
      <Head>
        <title>NextJS-SWA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className="p-4 max-w-5xl grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <li className="text-4xl text-red-700 font-noticia font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:col-span-3">
          <h1 className='md:col-span-2'>
            <span>LFS Global Trading Pty Ltd</span>
          </h1></li>
        <li className='italic text-gray-600 sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 border-2 rounded-xl border-blue-200 border-dotted p-4'>
          <p>
          L & FS Global Trading is a trusted importer of traditional Vietnamese products and ingredients.
          We work rigorously to provide the Australian market with the best ingredients and tastes directly from Vietnam.
          </p>
        </li>
          {products.map((product:any) => {
            return (
              <li className='place-self-center sm:h-auto sm:square sm:self-center md:h-auto md:square' key={product.id}>
                <Image src={product.attributes.image.data.attributes.url} width={200} height={200} alt={product.attributes.code}/>
              </li>)
          })}
      </ul>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © LFS {' '}
          <span className={styles.logo}>
            <Image src="/LFS_logo.png" alt="LFS Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
