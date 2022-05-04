import React, { useState } from "react";
import data from "../data/data";
import Cards from "../MyShop/Card";
import "../MyShop/MyShop.css";

const MyShop = ({ clickItem }) => {
  return (
    <section>
      {data.map((item) => (
        <Cards key={item.id} item={item} clickItem={clickItem} />
      ))}
    </section>
  );
};

export default MyShop;
