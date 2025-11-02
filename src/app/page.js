import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import CategoryStrip from './components/CategoryStrip';

const Home = () => {
    return(
        <div>
            <Header />
            <CategoryStrip />
            <Products />
        </div>
    );
}

export default Home;
