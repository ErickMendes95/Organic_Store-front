import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './context/Context';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUpPage/SignUp';
import Checkout from './pages/CheckoutPage/Checkout';
import Products from './pages/ProductsPage/Products';
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <Context.Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
