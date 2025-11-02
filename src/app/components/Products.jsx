'use client';
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const Products = () => {
    const [products,setProducts] = useState([]);
    const { addToCart, addToWishlist, isInWishlist } = useCart();

    useEffect(() => {
        axios.get("/api/products").then((res) => {
            const filteredProducts = res.data.filter(product => 
                product.name === "The Metro Movers Black" || product.name === "The Brown Metro Movers"
            );
            setProducts(filteredProducts);
        });
    },[]);

    return(
        <section className="p-4 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h2 className="text-lg md:text-xl font-medium text-gray-200">Bags.Backpacks</h2>
                <span className="text-sm md:text-base text-gray-200 font-medium">
                    {[...products, ...products].length} Products
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {[...products, ...products].map((item, index) => (
                <div key={`${item.id}-${index}`} className="rounded-lg p-3 md:p-4 hover:shadow-lg relative bg-black shadow-sm">
                    <button 
                        onClick={() => addToWishlist(item)}
                        className={`absolute top-4 md:top-6 right-4 md:right-6 p-1.5 md:p-2 rounded-full ${isInWishlist(item.id) ? 'text-black bg-gray-100' : 'text-gray-400 hover:text-red-500'}`}
                    >
                        <FiHeart className={`${isInWishlist(item.id) ? 'fill-current' : ''} text-sm md:text-base`} />
                    </button>
                    <Link href={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded cursor-pointer hover:opacity-80" />
                    </Link>
                    <h3 className="mt-3 md:mt-4 text-sm md:text-lg font-medium text-gray-200 line-clamp-2">{item.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex flex-col">
                            <span className="text-xs md:text-sm text-gray-400 line-through">{item.price}</span>
                            <span className="text-xs text-green-600 font-medium">50% OFF</span>
                            <span className="text-sm md:text-lg font-semibold text-gray-200">₹{Math.floor(parseInt(item.price.replace('₹', '')) / 2)}</span>
                        </div>
                        <button 
                            onClick={() => addToCart(item)}
                            className="bg-black text-white p-1.5 md:p-2 rounded hover:bg-gray-800"
                        >
                            <FiShoppingCart className="text-sm md:text-base" />
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}

export default Products;