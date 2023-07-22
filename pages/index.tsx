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
  console.log(products);
  return { props: { products: products.data } };
}


const Home = ({ products }: { products: any }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS-SWA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NextJS Static Web App
        </h1>
        <ul>
        {products.map((product:any) => {
          return (<li key={product.id}><Image src={product.attributes.image.data.attributes.url} width={200} height={200} alt={product.attributes.code}/></li>)
        })}
      </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
