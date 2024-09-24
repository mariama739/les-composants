// import { useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import Moncarte from './components/Card';
// import MonCategorie from './components/Categorie';
// import MonShopinglist from './components/Shopinglist';
import Foot from './components/footer';


function App(){
  return (
    <div>
      <Banner />
      <Moncarte />
      {/* <MonCategorie /> */}
      {/* <MonShopinglist /> */}
      <Foot />
    </div>
  );
}
export default App

