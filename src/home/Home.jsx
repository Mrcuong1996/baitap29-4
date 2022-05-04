import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white">
        <img
          class="card-img"
          src="https://media.threatpost.com/wp-content/uploads/sites/103/2016/03/07000332/shutterstock_390788425.jpg"
          alt="Background"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              HÈ 2022 CÙNG CƯỜNG STORE
            </h5>
            <p class="card-text lead fs-2">
              Miễn Phí Giao Hàng Tận Nơi Với Các Đơn Hàng Trên 500k
            </p>
            <p class="card-text lead fs-2">
              Giảm Giá Đến 70% Giá Trị Các Sản Phẩm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
