import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../../components/Product';
import Categories from '../../components/Categories';
import MainLayout from '../../layouts/main.layout';


const ContactPage = ({ products }: { products: any }) => {

  return (
    <MainLayout>
      <div className="grid place-items-center min-h-screen bg-gray-50 p-8">
        <Head>
            <title>L & FS Global Trading</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Contact Information</h1>
    </div>
    </MainLayout>    
  )
}

export default ContactPage
