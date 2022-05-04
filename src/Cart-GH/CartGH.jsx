import React, { useEffect, useState } from "react";
import "../Cart-GH/cart.css";
const CartGH = ({ cart, setCart, clickChange }) => {
  const [price, setPrice] = useState(0);

  const clickDelete = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    clickPrice();
  };

  const clickPrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.amount * item.price));
    setPrice(sum);
  };

  useEffect(() => {
    clickPrice();
  });

  return (
    <article>
      <span className="cart-gh">Giỏ Hàng Của Bạn</span>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.Img} alt="" />
            <p>{item.ProductName}</p>
          </div>
          <div>
            <button className="cong-tru" onClick={() => clickChange(item, -1)}>
              -
            </button>
            <button>{item.amount}</button>
            <button className="cong-tru" onClick={() => clickChange(item, 1)}>
              +
            </button>
          </div>
          <div>
            <span>{item.price.toLocaleString()}</span>
            <button onClick={() => clickDelete(item.id)}>Xóa</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Thanh Toán: {price.toLocaleString()}₫</span>
      </div>
    </article>
  );
};

export default CartGH;
