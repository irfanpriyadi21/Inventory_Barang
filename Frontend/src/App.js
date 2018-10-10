import React, { Component } from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';
import Login from "./view/Login";
import Register from "./view/Register";
import Dashboard from "./view/Dashboard";
import Produk from "./view/Produk";
import konsumen from "./view/konsumen";
import suplyer from "./view/suplyer";
import Pembelian from "./view/Pembelian";
import Penjualan from "./view/Penjualan";
import LapPenjualan from "./view/LapPenjualan";
import LapPembelian from "./view/LapPembelian";
import Iproduk from "./view/DataInput/Iproduk";
import Ikonsumen from "./view/DataInput/Ikonsumen";
import Isupplier from "./view/DataInput/Isupplier";


class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/Produk" component={Produk}/>
      <Route path="/konsumen" component={konsumen}/>
      <Route path="/suplyer" component={suplyer}/>
      <Route path="/Pembelian" component={Pembelian}/>
      <Route path="/Penjualan" component={Penjualan}/>
      <Route path="/LapPenjualan" component={LapPenjualan}/>
      <Route path="/LapPembelian" component={LapPembelian}/>
      <Route path="/Iproduk" component={Iproduk}/>
      <Route path="/Ikonsumen" component={Ikonsumen}/>
      <Route path="/Isupplier" component={Isupplier}/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
