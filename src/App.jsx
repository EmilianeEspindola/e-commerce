import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/createaccount' element={<CreateAccount />} />
    </Routes>
  )
}