import React from 'react';
import NavigationBar from '../../Shered/Navigation/NavigationBar/NavigationBar';
import './HotDealsAll.css';

const HotDealsAll = () => {

    document.title = 'Hot Deals All';
    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>Hot Deals All</h2>
        </div>
    );
};

export default HotDealsAll;