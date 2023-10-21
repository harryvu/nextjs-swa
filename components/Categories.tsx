import Link from 'next/link'

const Categories = () => {
    return (
        <ul className="list-none text-slate-600 p-4">
            <li className='text-right hover:text-white hover:bg-red-500' data-id="000-all">
                <Link href="/products">All Products</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="001-fve">
                <Link href="/products/001-fve">Frozen Vegetables</Link>
                </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="002-fsf">
                <Link href="/products/002-fsf">Frozen Seafoods</Link>   
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="003-fsp">
                <Link href="/products/003-fsp">Frozen Special Foods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="004-fds">
                <Link href="/products/004-fds">Dried Seafoods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="005-fdv">
                <Link href="/products/005-fdv">Dried Vegetables</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="006-ddf">
                <Link href="/products/006-ddf">Dry Foods</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="007-ddr">
                <Link href="/products/007-ddr">Drinks</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="008-dsn">
                <Link href="/products/008-dsn">Snacks</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="009-dsp">
                <Link href="/products/009-dsp">Spices</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="010-dsa">
                <Link href="/products/010-dsa">Sauces</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="011-fre">
                <Link href="/products/011-fre">Fresh Products</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="012-dfc">
                <Link href="/products/012-dfc">Dry Food Can</Link>
            </li>
            <li className='text-right hover:text-white hover:bg-red-500' data-id="101-oth">
                <Link href="/products/101-oth">Others</Link>
            </li>
        </ul>
    )
}

export default Categories;