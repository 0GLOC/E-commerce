import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/categoria/:types' element = {<ItemListContainer/>}/>
            <Route path='/details/:detailId' element = {<ItemDetailContainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/*' element = { <Navigate to='/' replace /> }/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
