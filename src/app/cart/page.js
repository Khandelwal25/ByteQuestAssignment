'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

const CartPage = () => {
    const { cartItems, updateQuantity, getTotalBill } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Your cart is empty</h2>
                <Link href="/" className="bg-black text-white px-4 md:px-6 py-2 rounded hover:bg-gray-800 text-sm md:text-base">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Shopping Cart</h1>
            
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded mx-auto sm:mx-0" />
                        
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-base md:text-lg font-medium">{item.name}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{item.price}</p>
                        </div>
                        
                        <div className="flex items-center gap-3 mx-auto sm:mx-0">
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 md:p-2 hover:bg-gray-100 rounded"
                            >
                                <FiMinus className="text-sm md:text-base" />
                            </button>
                            
                            <span className="w-6 md:w-8 text-center text-sm md:text-base">{item.quantity}</span>
                            
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 md:p-2 hover:bg-gray-100 rounded"
                            >
                                <FiPlus className="text-sm md:text-base" />
                            </button>
                            
                            <button 
                                onClick={() => updateQuantity(item.id, 0)}
                                className="p-1 md:p-2 text-red-500 hover:bg-red-50 rounded ml-2"
                            >
                                <FiTrash2 className="text-sm md:text-base" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 border-t pt-6">
                <div className="flex justify-end mb-4">
                    <div className="text-right">
                        <p className="text-xl font-semibold">Total: ₹{getTotalBill()}</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link href="/" className="text-blue-600 hover:underline text-sm md:text-base">
                        ← Continue Shopping
                    </Link>
                    <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-800 text-sm md:text-base w-full sm:w-auto">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;