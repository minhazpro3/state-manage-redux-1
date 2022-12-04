import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopRated from "./pages/TopRated";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
