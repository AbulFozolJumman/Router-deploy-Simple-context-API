import React, { createContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <ToastContainer />
    </div>
  );
};

export default App;