'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FiShoppingCart, FiHeart, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart, addToWishlist, isInWishlist } = useCart();

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            const foundProduct = res.data.find(p => p.id === parseInt(id));
            setProduct(foundProduct);
        });
    }, [id]);

    if (!product) return <div className="p-8">Loading...</div>;

    return (
        <div className="max-w-6xl mx-auto p-8">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline mb-6">
                <FiArrowLeft /> Back to Products
            </Link>
            
            <div className="grid grid-cols-2 gap-12">
                <div>
                    <img src={product.image} alt={product.name} className="w-full h-96 object-contain rounded" />
                </div>
                
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-200 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                        <span className="text-lg text-gray-400 line-through block">{product.price}</span>
                        <span className="text-sm text-green-600 font-medium">50% OFF</span>
                        <span className="text-2xl font-bold text-gray-200 block">₹{Math.floor(parseInt(product.price.replace('₹', '')) / 2)}</span>
                    </div>
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-black text-white py-3 px-6 rounded hover:bg-gray-800 flex items-center justify-center gap-2"
                        >
                            <FiShoppingCart /> Add to Cart
                        </button>
                        <button 
                            onClick={() => addToWishlist(product)}
                            className={`p-3 rounded border ${isInWishlist(product.id) ? 'bg-red-50 text-red-500' : 'hover:bg-gray-50'}`}
                        >
                            <FiHeart className={isInWishlist(product.id) ? 'fill-current' : ''} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;