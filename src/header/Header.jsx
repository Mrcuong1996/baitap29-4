import React from "react";

function Header({ setShow, size }) {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
        <div class="container">
          <a
            class="navbar-brand fw-bold fs-4  "
            onClick={() => setShow(true)}
            href="#"
          >
            Cường Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <button href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in"> </i>
                <span> Đăng Nhập</span>
              </button>
            </div>
            <button href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus"> </i>
              <span> Đăng Ký</span>
            </button>
            <button
              onClick={() => setShow(false)}
              className="btn btn-outline-dark ms-2 cart"
            >
              <i className="fa fa-shopping-cart me-1"> </i>{" "}
              <span className="number-cart">{size}</span> Giỏ Hàng
            </button>
            <i
              onClick={() => setShow(false)}
              className="fa fa-shopping-cart myCart "
            >
              <span className="size-span2">{size}</span>
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
