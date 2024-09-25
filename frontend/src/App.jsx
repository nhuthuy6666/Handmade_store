import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import banner3 from './assets/banner3.jpg';
import banner4 from './assets/banner4.jpg';

export default function App() {
  return (
    <main className="pt-10">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/wallart" element={<Category category="wallart" banner={banner1} />}/>
        <Route path="/furniture" element={<Category category="furniture" banner={banner2} />}/>
        <Route path="/plants" element={<Category category="plants" banner={banner3} />}/>
        <Route path="/accessories" element={<Category category="accessories" banner={banner4} />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </main>
  )
}