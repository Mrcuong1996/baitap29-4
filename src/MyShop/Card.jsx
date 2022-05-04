import React from "react";

const Card = ({ item, clickItem }) => {
  const {
    ProductName,
    Sale,
    price,
    storage,
    Img,
    sizeS,
    sizeM,
    sizeL,
    sizeXL,
    colorRed,
    colorWhite,
    colorBlack,
  } = item;
  return (
    <div>
      <div className="cards">
        <div className="image_box">
          <img src={Img} alt="" />
        </div>
        <span className="sale">Sale: {Sale}</span>
        <div className="details">
          <p>{ProductName}</p>
          <p>Giá: {price.toLocaleString()} ₫</p>
          <p>Kho: {storage}</p>
          <p>
            <select>
              <option>Size</option>
              <option>{sizeS}</option>
              <option>{sizeM}</option>
              <option>{sizeL}</option>
              <option>{sizeXL}</option>
            </select>
          </p>
          <p>
            <select>
              <option>Color</option>
              <option>{colorRed}</option>
              <option>{colorWhite}</option>
              <option>{colorBlack}</option>
            </select>
          </p>
          <button className="themvaogio" onClick={() => clickItem(item)}>
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
