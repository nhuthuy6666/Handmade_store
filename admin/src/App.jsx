import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Accounts from "./pages/Accounts";


export default function App() {
  return (
    <main>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/products' replace />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}