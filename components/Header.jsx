import React from "react"
import Image from "next/image"
import { Aladin } from 'next/font/google'
import Link
 from "next/link"
const aladin = Aladin({ weight: ['400'], subsets:['latin']})

const Header = () => {
  return (
    <>
      <div className="flex p-4 bg-red-700 items-center">
        <Link href="/">
            <Image src="/LFS_logo.png" alt="L&FS" width={144} height={65} />
        </Link>
        <h1 className={`${aladin.className} text-5xl text-white`}>Asian Food</h1>
      </div>
    </>
  )
}

export default Header