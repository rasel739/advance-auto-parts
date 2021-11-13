import React from 'react';
import NavigationBar from '../Shered/Navigation/NavigationBar/NavigationBar';
import './PopulerCatagorieAll.css';

const PopulerCatagorieAll = () => {
     document.title = "Populer Catagorie All";
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2 className="">Populer Catagorie All</h2>
        </div>
    );
};

export default PopulerCatagorieAll