import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from '../Home/Home/Home';
import Admin from '../Admin/Admin/Admin'
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../ErrorPage/ErrorPage';
import PopulerCatagorieAll from '../PopulerCatagorieAll/PopulerCatagorieAll';
import HotDealsDetails from '../HotDealsAll/HotDealsDetails/HotDealsDetails';
import HotDealsAll from '../HotDealsAll/HotDealsAll/HotDealsAll';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AuthProvider from '../../context/AuthProvider';
import AddParts from '../AddParts/AddParts';
import AdminPrivateRoute from '../Admin/AdminPrivateRoute/AdminPrivateRoute';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ReviewAdd from '../Home/Review/ReviewAdd/ReviewAdd';
import Payment from '../Payment/Payment';




const Routed = () => {

 
  
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <AdminPrivateRoute path="/admin">
              <Admin></Admin>
            </AdminPrivateRoute>
            <PrivateRoute path="/hot-deals-all">
              <HotDealsAll></HotDealsAll>
            </PrivateRoute>
            <Route path="/populer-catagorie-all">
              <PopulerCatagorieAll></PopulerCatagorieAll>
            </Route>
            <Route path="/car-parts-all/:detailsId">
              <HotDealsDetails></HotDealsDetails>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/add-parts">
              <AddParts></AddParts>
            </Route>
            <Route path="/about-us">
              <About></About>
            </Route>
            <Route path="/contact-us">
              <Contact></Contact>
            </Route>
            <Route path="/review-add">
              <ReviewAdd></ReviewAdd>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
};

export default Routed;