import React, { useState } from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import Categories from "./components/categories"
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import {useLogger} from './components/myHooks';
import  DebugHistory from './components/DebugHistory';
import { useContext } from 'react';
export const ProductsContext = React.createContext();
const products = [
  {
    id:1,
        title:'Black kit dum de dum',
        img:'https://cdn.shopify.com/s/files/1/0863/6884/t/90/assets/sjc-tour-series_matte-black_full-set-1680707150735_1200x.jpg?v=1680707152',
        desc:'Hit me harder',
        category:'DRUMS',
        price:'14.88',
    agreement: false,
    comments: []
  },
  {
    id:2,
        title:'Electro mega piece of garbage',
        img:'https://m.media-amazon.com/images/I/71W8rtQ7U7L._AC_UF894,1000_QL80_.jpg',
        desc:'no electricity - no music',
        category:'DRUMS',
        price:'69.420',
    agreement: false,
    comments: []
  },
  {
    id:3,
    title:'To drunk to fuck',
    img:'https://sfo2.digitaloceanspaces.com/hmol/2021/07/ST2110.jpg',
    desc:'Kill the poor',
    category:'MERCH',
    price:'FREE',
    agreement: false,
    comments: []
  },
  {
    id:4,
        title:'Six string',
        img:'https://alvarezguitars.com/wp-content/uploads/2019/12/ABT60CE-8SHB-Front-3_4-942x1024.jpg',
        desc:'Nobody likes you',
        category:'GUITARS',
        price:'228',
    agreement: false,
    comments: []
  },
  {
    id:5,
        title:"OMFG its Dime's guitar",
        img:'https://i.pinimg.com/originals/38/17/6c/38176cf6305221eda9b84bb96ebc278d.jpg',
        desc:'Cowboys from Hell',
        category:'GUITARS',
        price:'300',
    agreement: false,
    comments: []
  },
  {
    id:6,
        title:'Are u real trooper?',
        img:'https://img3.zakaz.ua/20190610.1560176948.ad72436478c_2019-06-10_Listex/20190610.1560176948.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
        desc:'Fear of the running to the beast',
        category:'PRIKOLY',
        price:'4.50',
    agreement: false,
    comments: []
  },
  
]


function App() {
  
  const categories = [...new Set(products.map((product) => product.category))];
  const [history, setHistory] = useState([]);
  return (
    <div className="mainBlock">
        
     <Header/>
     <ProductsContext.Provider value={{ products, categories, setHistory }}>
      <Router>
      <DebugHistory />
        <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
            <Route path="/category/:categoryName" component={ProductList} />
        </Switch>
      </Router>
    </ProductsContext.Provider>
    <Footer/>
    
    </div>
  );
};

export default App;
