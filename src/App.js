
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [list, setList] = useState([
    {id : "DQ1049-548",
    fam : "Nike Sportswear",
    subfam : "Men's T-Shirt",
    price : "30",
    description : "Not unlike freshly picked produce, fresh sneakers tend to disappear when left unattended. The Nike Sportswear T-Shirt is made with lightweight cotton and a classic fit so you can protect your favorite sneakers in the comfort.",
    color :"Light Marine",
    poster : [
    "images/test.png",
    "images/test 01.png",
    "images/test 02.png",
    "images/test 03.png"]},
    {id : "DQ1021-100",
    fam : "Nike Sportswear DNA",
    subfam : "Men's T-Shirt",
    price : "30",
    description : "Loosen up in the Nike Sportswear DNA T-Shirt. Its roomy fit and mid-weight organic cotton jersey fabric are a powerfully comfortable combo you can enjoy through the seasons. This product is made with at least 75% organic cotton fibers.",
    color :"White",
    poster : [
    "images/DQ1021-100.png",
    "images/DQ1021-100 01.png",
    "images/DQ1021-100 02.png",
    "images/DQ1021-100 03.png"]},
  ])

  const getList=(newList)=>{
    setList(newList)
  }

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ProductList" element={<ProductList list={list} getList={getList}/>}/>
      <Route path="/ProductList/:id" element={<ProductDetails list={list}/>}/>
      <Route path="*" element={<h1 style ={{paddingTop:"300px"}}>404 not found</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
