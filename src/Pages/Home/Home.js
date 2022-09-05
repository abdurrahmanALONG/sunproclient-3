import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Bannar from './Bannar/Bannar';
import DiscountCard from './DiscountCard/DiscountCard';
import './Home.css'
import Item from './Items/Item';
import NewCollection from './NewCollection/NewCollection';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Bannar />
            <DiscountCard />
            <NewCollection />
            <Summary />
            <Item />
            <Footer />
        </div>
    );
};

export default Home;