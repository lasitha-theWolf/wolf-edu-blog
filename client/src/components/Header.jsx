import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        {/*when page minizzum logo become small*/}
        <span className='px-1 py-2 bg-gradient-to-r from-indigo-500 via-blue-900 to-red-500 rounded-lg text-white'>Wolf</span>
        Coder
      </Link>
    </Navbar>
  );
}
