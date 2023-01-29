import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react"
import Context from './context/Context';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUpPage/SignUp';
import Checkout from './pages/CheckoutPage/Checkout';
import Products from './pages/ProductsPage/Products';
import HomePage from './pages/HomePage/HomePage'
import { ContextSelecionados } from './context/ContextSelecionados';

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [token, setToken] = useState("")
  const [produtosSelec, setProdudosSelec] = useState([]);
  const [totalValue, setTotalValue] = useState(0)

  return (
    <Context.Provider value={{ email, setEmail, password, setPassword, name, setName, token, setToken, confirmPassword, setConfirmPassword }}>
      <ContextSelecionados.Provider value={[produtosSelec, setProdudosSelec, totalValue, setTotalValue]}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/products' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ContextSelecionados.Provider>
    </Context.Provider>
  );
}

export default App;
