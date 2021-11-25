import React from "react";
import Footer from "../../Shered/Footer/Footer";
import NavigationBar from "../../Shered/Navigation/NavigationBar/NavigationBar";
import CarWheelOffer from "../CarWheelOffer/CarWheelOffer";
import HotDeals from "../HotDeals/HotDeals/HotDeals";
import NewArrivals from "../NewArrivals/NewArrivals";
import OfferAllCarsPart from "../OfferAllCarsPart/OfferAllCarsPart/OfferAllCarsPart";
import PopularCategories from "../PopularCategories/PopularCategories";
import Review from "../Review/Review/Review";
import VehicleSlider from "../VehicleSlider/VehicleSlider";

const Home = () => {
  document.title = "Home";

  return (
    <div>
      <NavigationBar></NavigationBar>
      <VehicleSlider></VehicleSlider>
      <PopularCategories></PopularCategories>
      <CarWheelOffer></CarWheelOffer>
      <NewArrivals></NewArrivals>
      <OfferAllCarsPart></OfferAllCarsPart>
      <HotDeals></HotDeals>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
