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
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
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
            <Route path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
};

export default Routed;