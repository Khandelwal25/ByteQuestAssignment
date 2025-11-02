'use client';
import React, {useState} from 'react';
import {FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const Header = () => {
    const [active, setActive] = useState('Bags');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalItems, getTotalWishlistItems } = useCart();

    const menu = ["Bags", "Travel", "Accessories", "Gifting", "Jewellery"];

    return(
        <header className='w-full flex justify-between items-center px-8 py-4 border-b relative'>
            <h1 className='text-1xl '>T A N N &nbsp; T R I M</h1>

            {/* Desktop Menu */}
            <nav className='hidden md:flex gap-6 text-gray-200'>
                {menu.map((item) => (
                    <button key={item}
                        className={`hover:text-blue-500 ${
                        active === item ? "text-gray-200 font-medium" : "text-gray-200"
                        }`}
                        onClick={() => setActive(item)}
                    >{item}</button>
                ))}
            </nav>

            {/* Desktop Icons */}
            <div className='hidden md:flex gap-5 text-xl text-gray-200'>
                <FiSearch />
                <FiUser />
                <Link href='/wishlist' className='relative'>
                    <FiHeart />
                    {getTotalWishlistItems() > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {getTotalWishlistItems()}
                        </span>
                    )}
                </Link>
                <Link href='/cart' className='relative'>
                    <FiShoppingCart />
                    {getTotalItems() > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {getTotalItems()}
                        </span>
                    )}
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='md:hidden text-gray-200 text-xl'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='absolute top-full left-0 w-full bg-white border-b shadow-lg md:hidden z-50'>
                    <nav className='flex flex-col p-4'>
                        {menu.map((item) => (
                            <button key={item}
                                className={`py-2 text-left hover:text-blue-500 ${
                                active === item ? "text-black font-medium" : "text-gray-700"
                                }`}
                                onClick={() => {
                                    setActive(item);
                                    setMobileMenuOpen(false);
                                }}
                            >{item}</button>
                        ))}
                        <div className='flex gap-5 text-xl text-gray-700 mt-4 pt-4 border-t'>
                            <FiSearch />
                            <FiUser />
                            <Link href='/wishlist' className='relative' onClick={() => setMobileMenuOpen(false)}>
                                <FiHeart />
                                {getTotalWishlistItems() > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                        {getTotalWishlistItems()}
                                    </span>
                                )}
                            </Link>
                            <Link href='/cart' className='relative' onClick={() => setMobileMenuOpen(false)}>
                                <FiShoppingCart />
                                {getTotalItems() > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                        {getTotalItems()}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;