
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'


function App() {

  const list = useSelector(state=>state.productReducer.productList)

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ProductList" element={<ProductList list={list}/>}/>
      <Route path="/ProductList/:id" element={<ProductDetails list={list}/>}/>
      <Route path="*" element={<h1 style ={{paddingTop:"300px"}}>404 not found</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
