import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let check = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
    };
    getProducts();
  }, [third]);

  return <div>Products</div>;
};

export default Products;
