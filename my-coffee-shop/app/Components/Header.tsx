"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/kage.svg' 
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='px-6 py-4 bg-gradient-to-r from-orange-950 to-zinc-950 text-white w-full border-b-2 border-gray-400'>
            <div className='flex items-center justify-between'>
                <Image src={logo} alt='Coffee Grove Logo' width={120} height={60} />

                <ul className='hidden md:flex items-center justify-center gap-4 font-bold'>
                    <Link href="/" className='hover:bg-orange-800 py-2 px-6 rounded-full transition-all'>
                        <li>Home</li>
                    </Link>
                    <Link href="/About" className='hover:bg-orange-800 py-2 px-6 rounded-full transition-all'>
                        <li>About</li>
                    </Link>
                    <Link href="/Services" className='hover:bg-orange-800 py-2 px-6 rounded-full transition-all'>
                        <li>Services</li>
                    </Link>
                    <Link href="/Menu" className='hover:bg-orange-800 py-2 px-6 rounded-full transition-all'>
                        <li>Menu</li>
                    </Link>
                    <Link href="/Contact" className='hover:bg-orange-800 py-2 px-6 rounded-full transition-all'>
                        <li>Contact</li>
                    </Link>
                </ul>

                <div className='md:hidden flex items-center'>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-white focus:outline-none'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:hidden relative left-0  w-full bg-gradient-to-r from-orange-950 to-zinc-950 text-white py-4 px-6`}
            >
                <ul className='space-y-4 font-bold'>
                    <Link href="/" className='block py-2 px-6 rounded-full transition-all'>
                        <li>Home</li>
                    </Link>
                    <Link href="/About" className='block py-2 px-6 rounded-full transition-all'>
                        <li>About</li>
                    </Link>
                    <Link href="/Services" className='block py-2 px-6 rounded-full transition-all'>
                        <li>Services</li>
                    </Link>
                    <Link href="/Menu" className='block py-2 px-6 rounded-full transition-all'>
                        <li>Menu</li>
                    </Link>
                    <Link href="/Contact" className='block py-2 px-6 rounded-full transition-all'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
