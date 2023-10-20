import React from "react"
import Link from "next/link"

// &#9776; is the hambuger icon

const Menu = () => {
  return (
    <div className="nav">
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" className="toggle" />
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </div>
  )
}

export default Menu