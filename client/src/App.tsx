import Header from './components/header/Header';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Product from './components/product/Product';
import Result from './components/result/Result';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import AllProducts from './components/allProducts/AllProducts';
import About from './components/about/About';
import Work from './components/work/Work';
import SignIn from "./components/auth/signIn/signIn";
import SignUp from "./components/auth/signUp/signUp";


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className='page'>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/products' element={<AllProducts/>}/>
            <Route path='/search' element={<Result/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
