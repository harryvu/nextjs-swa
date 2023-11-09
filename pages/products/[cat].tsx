import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../../layouts/main.layout';
import Product from '../../components/Product';
import Categories from '../../components/Categories';

async function getProducts(cat: string) {
  // // fetch data from an API  
  // const cat = 'fsf'
  const filterExpr = `filters[$and][0][category][name][$eq]=${cat}`
  const url = `https://lfs-api.onrender.com/api/products?populate=*&${filterExpr}`;
  console.log(url)
  const res = await fetch(url, { cache: 'no-store' });
  //const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();
  return data;
}

export async function getServerSideProps(context: { params: { cat: any; }; }) {
  const cat = context.params.cat
  const products = await getProducts(cat);
  return { props: { products: products.data } };
}

const Page = ({ products }: { products: any }) => {
    const router = useRouter()
    const hasProducts = products.length > 0
    let catName = "";
    let catDesc = ""
    if (hasProducts) {
      catName = products[0].attributes.category.data.attributes.value
      catDesc = products[0].attributes.category.data.attributes.description
    }
    
    return (
        <MainLayout>
          <div className="grid place-items-center min-h-screen bg-gray-50 p-8">
          <Head>
            <title>L & FS Global Trading</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {hasProducts ? (
            <ul className="p-4 max-w-6xl grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <li className="text-4xl text-red-700 font-noticia font-extrabold sm:col-span-2 sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:col-span-3">
              <h1 className='md:col-span-2'>
                <span className='italic text-yellow-600'>{catName}</span>
              </h1>
            </li>
            <li className='italic text-blue-600 hidden md:block sm:row-start-2 sm:col-start-1 sm:self-center md:col-start-1 md:col-span-2 border-2 rounded-xl border-red-500 border-dotted p-4'>
              <p className='text-xl'>
              {catDesc}
              </p>
            </li>
            <li className='sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-3 uppercase'>
              <Categories />
            </li>            
            {products.map((product:any) => {
              return (
                <Product key={product.id} product={product} />
              )
            })}
          </ul>
          ) : (
            <p>No products available in this category.</p>
          )}          
        </div>
        </MainLayout>    
      )
  }
  
  export default Page