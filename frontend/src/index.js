import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import { Provider } from 'react-redux'
import store from "./store.js"
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrdersScreen from './screens/PlaceOrdersScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/admin/ProductListScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route index={true} path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/search/:keyword' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/page/:pageNumber' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
      <Route path='/cart' element={<CartScreen></CartScreen>}></Route>
      <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
      <Route path='/register' element={<RegisterScreen></RegisterScreen>}></Route>
      <Route path='' element={<PrivateRoute></PrivateRoute>}>
        <Route path='/shipping' element={<ShippingScreen></ShippingScreen>}></Route>
        <Route path='/payment' element={<PaymentScreen></PaymentScreen>}></Route>
        <Route path='/placeorder' element={<PlaceOrdersScreen></PlaceOrdersScreen>}></Route>
        <Route path='/order/:id' element={<OrderScreen></OrderScreen>}></Route>
        <Route path='/profile' element={<ProfileScreen></ProfileScreen>}></Route>
      </Route>
      <Route path='' element={<AdminRoute></AdminRoute>}>
        <Route path='/admin/orderlist' element={<OrderListScreen></OrderListScreen>}></Route>
        <Route path='/admin/productlist' element={<ProductListScreen></ProductListScreen>}></Route>
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen></ProductListScreen>}></Route>
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen></ProductEditScreen>}></Route>
        <Route path='/admin/userlist' element={<UserListScreen></UserListScreen>}></Route>
        <Route path='/admin/user/:id/edit' element={<UserEditScreen></UserEditScreen>}></Route>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router}>
        </RouterProvider>
      </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
