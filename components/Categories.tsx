import Link from 'next/link'

const Categories = () => {
    return (
        <ul className="list-none text-slate-600 p-4">
            <li className='text-right hover:text-white hover:bg-red-500' data-id="00-all">
                <Link href="/products">All Products</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="01-fve">
                <Link href="/products/fve">Frozen Vegetables</Link>
                </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="02-fsf">
                <Link href="/products/fsf">Frozen Seafoods</Link>   
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="03-fsp">
                <Link href="/products/fsp">Frozen Special Foods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="04-fds">
                <Link href="/products/fds">Dried Seafoods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="05-fdv">
                <Link href="/products/fdv">Dried Vegetables</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="06-ddf">
                <Link href="/products/ddf">Dry Foods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="07-ddr">
                <Link href="/products/ddr">Drinks</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="08-dsn">
                <Link href="/products/dsn">Snacks</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="09-dsp">
                <Link href="/products/dsp">Spices</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="10-dsa">
                <Link href="/products/dsa">Sauces</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="11-fre">
                <Link href="/products/fre">Fresh Products</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="101-oth">
                <Link href="/products/oth">Others</Link>
            </li>
        </ul>
    )
}

export default Categories;