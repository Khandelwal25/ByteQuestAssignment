'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

const WishlistPage = () => {
    const { wishlistItems, addToCart, addToWishlist } = useCart();

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Your wishlist is empty</h2>
                <Link href="/" className="bg-black text-white px-4 md:px-6 py-2 rounded hover:bg-gray-800 text-sm md:text-base">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">My Wishlist</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-3 md:p-4 hover:shadow-lg">
                        <img src={item.image} alt={item.name} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded" />
                        <h3 className="mt-3 md:mt-4 text-sm md:text-lg font-medium line-clamp-2">{item.name}</h3>
                        <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{item.price}</p>
                        
                        <div className="flex gap-2">
                            <button 
                                onClick={() => addToCart(item)}
                                className="flex-1 bg-black text-white py-2 px-2 md:px-4 rounded hover:bg-gray-800 flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm"
                            >
                                <FiShoppingCart className="text-sm" />
                                <span className="hidden sm:inline">Add to Cart</span>
                                <span className="sm:hidden">Add</span>
                            </button>
                            <button 
                                onClick={() => addToWishlist(item)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded"
                            >
                                <FiTrash2 className="text-sm md:text-base" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 md:mt-8">
                <Link href="/" className="text-blue-600 hover:underline text-sm md:text-base">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default WishlistPage;