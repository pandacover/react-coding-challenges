import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart";
import Products from "./pages/products";

const App = () => {
  return (
    <div>
      <header></header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
