import Head from 'next/head'
import Image from 'next/image'

const Product = ({ product }: { product: any }) => {

  return (
    <>
      <li className='place-self-center sm:h-auto sm:square sm:self-center md:h-auto md:square' key={product.id}>
        <Image sizes='(min-width: 200px)' layout='intrinsic' width={400} height={0} src={product.attributes.image.data.attributes.url} alt={product.attributes.code}/>
        <p className='text-center text-balance font-bold'>{product.attributes.code}-{product.attributes.name}</p>
        <p className='text-center'>{product.attributes.dimensions}</p>
        <p className='text-center'>{product.attributes.barcode}</p>               
      </li>
    </>
  )
}

export default Product;
