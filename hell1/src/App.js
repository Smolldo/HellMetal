import React from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Items from "./components/items"
import Categories from "./components/categories"
import item from "./components/item";
class App extends React.Component {
  
constructor(props){
  super(props)
  this.state={
    currentItems:[],
    items:[
      {
        id:1,
        title:'Black kit dum de dum',
        img:'https://cdn.shopify.com/s/files/1/0863/6884/t/90/assets/sjc-tour-series_matte-black_full-set-1680707150735_1200x.jpg?v=1680707152',
        desc:'Hit me harder',
        category:'DRUMS',
        price:'14.88'
      },
      {
        id:2,
        title:'Electro mega piece of garbage',
        img:'https://m.media-amazon.com/images/I/71W8rtQ7U7L._AC_UF894,1000_QL80_.jpg',
        desc:'no electricity - no music',
        category:'DRUMS',
        price:'69.420'
      },
      {
        id:3,
        title:'To drunk to fuck',
        img:'https://sfo2.digitaloceanspaces.com/hmol/2021/07/ST2110.jpg',
        desc:'Kill the poor',
        category:'MERCH',
        price:'FREE'
      },
      {
        id:4,
        title:'Six string',
        img:'https://alvarezguitars.com/wp-content/uploads/2019/12/ABT60CE-8SHB-Front-3_4-942x1024.jpg',
        desc:'Nobody likes you',
        category:'GUITARS',
        price:'228'
      },
      {
        id:5,
        title:"OMFG its Dime's guitar",
        img:'https://i.pinimg.com/originals/38/17/6c/38176cf6305221eda9b84bb96ebc278d.jpg',
        desc:'Cowboys from Hell',
        category:'GUITARS',
        price:'300'
      },
      {
        id:6,
        title:'Are u real trooper?',
        img:'https://img3.zakaz.ua/20190610.1560176948.ad72436478c_2019-06-10_Listex/20190610.1560176948.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
        desc:'Fear of the running to the beast',
        category:'PRIKOLY',
        price:'4.50'
      },
    ],
    counter:0
  }
  this.state.currentItems=this.state.items
  this.chooseCategory=this.chooseCategory.bind(this);
}


  render(){
  return (
    <div className="mainBlock">

     <Header/>
    Korzina: {this.state.counter}
     <Categories chooseCategory={this.chooseCategory}></Categories>
     <Items items={this.state.currentItems} ></Items>
     
     <Footer/>
    </div>
  );
  }
  chooseCategory(category){
    if(category==='ALL'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el=>el.category===category)
    })
  }
}

export default App;
