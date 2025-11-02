'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== id));
        } else {
            setCartItems(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            );
        }
    };

    const addToWishlist = (product) => {
        setWishlistItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some(item => item.id === productId);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalWishlistItems = () => {
        return wishlistItems.length;
    };

    const getTotalBill = () => {
        return cartItems.reduce((total, item) => {
            const price = Math.floor(parseInt(item.price.replace('₹', '')) / 2);
            return total + (price * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            wishlistItems,
            addToCart,
            updateQuantity,
            addToWishlist,
            isInWishlist,
            getTotalItems,
            getTotalWishlistItems,
            getTotalBill
        }}>
            {children}
        </CartContext.Provider>
    );
};