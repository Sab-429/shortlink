import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 flex justify-between px-3 items-center'>
        <div className="logo font-bold text-xl text-white">ShortLinker</div>
        <ul className='flex gap-4 justify-center items-center font-bold text-xl text-white'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>contact us</li></Link>
        </ul>
    </nav>
  )
}
export default Navbar
