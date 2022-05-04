import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import MyShop from "./MyShop/MyShop";
import { useEffect, useState } from "react";
import CartGH from "./Cart-GH/CartGH";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const clickItem = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const clickChange = (item, h) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += h;

    if (arr[index].amount === 0) arr[index].amount = 1;

    setCart([...arr]);
  };

  return (
    <div className="App">
      <Header setShow={setShow} size={cart.length} />
      {/* <Home /> */}
      {show ? (
        <MyShop clickItem={clickItem} />
      ) : (
        <CartGH cart={cart} setCart={setCart} clickChange={clickChange} />
      )}
    </div>
  );
}

export default App;
