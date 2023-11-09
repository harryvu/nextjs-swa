import Head from 'next/head'
import Image from 'next/image'

const Product = ({ product }: { product: any }) => {
  // Placeholder image URL
  const placeholderImage = '/path-to-your-placeholder-image.jpg'; // Replace this with the path to your placeholder image

  // Determine image URL - if the product image is null, use the placeholder
  const imageUrl = product.attributes.image?.data?.attributes?.url || placeholderImage;
  const imageAlt = `${product.attributes.code} - ${product.attributes.name}`;

  return (
    <>
      <li className='place-self-center sm:h-auto sm:square sm:self-center md:h-auto md:square' key={product.id}>
        <Image
          sizes='(min-width: 200px)'
          layout='intrinsic'
          width={400}
          height={400} // You should specify a height or use layout='responsive'
          src={imageUrl}
          alt={imageAlt}
        />
        <p className='text-center text-balance font-bold'>{product.attributes.code}-{product.attributes.name}</p>
        <p className='text-center'>{product.attributes.dimensions}</p>
        <p className='text-center'>{product.attributes.barcode}</p>               
      </li>
    </>
  )
}

export default Product;
