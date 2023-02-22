import Header from './components/header/Header';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Product from './components/product/Product';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
