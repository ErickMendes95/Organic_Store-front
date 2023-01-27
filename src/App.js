import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './context/Context';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUpPage/SignUp';
import Checkout from './pages/CheckoutPage/Checkout';
import Products from './pages/ProductsPage/Products';
import HomePage from './pages/HomePage/HomePage'
import { useState } from 'react';
import { ContextSelecionados } from './context/ContextSelecionados';

function App() {
  const [produtosSelec, setProdudosSelec] = useState([]);

  return (
    <Context.Provider>
      <ContextSelecionados.Provider value={[produtosSelec, setProdudosSelec]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      </ContextSelecionados.Provider>
    </Context.Provider>
  );
}

export default App;
