import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import product from "../../assets/images/product.png";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-auto">
            <ul className="header__nav-list">
              <li>
                <a href="#">TRANG CHỦ</a>
              </li>
              <li>
                <a href="#">GIỚI THIỆU</a>
              </li>
              <li className="header__nav-list__dropdown">
                <a href="#">
                  SẢN PHẨM
                  <i className="fa fa-chevron-down"></i>
                </a>
                <ul className="header__nav-list__dropdownlist">
                  <div className="header__nav-list__dropdown__triangle"></div>
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <p className="header__nav-list__dropdownlist__title">
                        DƯỠNG DA
                      </p>
                      <ul className="header__nav-list__dropdownlist__details">
                        <li>
                          <a>Áo khoác</a>
                        </li>
                        <li>
                          <a>Bộ áo liền quần</a>
                        </li>
                        <li>
                          <a>Dresses</a>
                        </li>
                        <li>
                          <a>Quần / Váy</a>
                        </li>
                        <li>
                          <a>Quần short</a>
                        </li>
                        <li>
                          <a>Quần jean</a>
                        </li>
                        <li>
                          <a>Đồ đan</a>
                        </li>
                        <li>
                          <a>Áo nỉ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <p className="header__nav-list__dropdownlist__title">
                        NƯỚC HOA
                      </p>
                      <ul className="header__nav-list__dropdownlist__details">
                        <li>
                          <a>Áo khoác</a>
                        </li>
                        <li>
                          <a>Bộ áo liền quần</a>
                        </li>
                        <li>
                          <a>Dresses</a>
                        </li>
                        <li>
                          <a>Quần / Váy</a>
                        </li>
                        <li>
                          <a>Quần short</a>
                        </li>
                        <li>
                          <a>Quần jean</a>
                        </li>
                        <li>
                          <a>Đồ đan</a>
                        </li>
                        <li>
                          <a>Áo nỉ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <p className="header__nav-list__dropdownlist__title">
                        TRANG SỨC
                      </p>
                      <ul className="header__nav-list__dropdownlist__details">
                        <li>
                          <a>Áo khoác</a>
                        </li>
                        <li>
                          <a>Bộ áo liền quần</a>
                        </li>
                        <li>
                          <a>Dresses</a>
                        </li>
                        <li>
                          <a>Quần / Váy</a>
                        </li>
                        <li>
                          <a>Quần short</a>
                        </li>
                        <li>
                          <a>Quần jean</a>
                        </li>
                        <li>
                          <a>Đồ đan</a>
                        </li>
                        <li>
                          <a>Áo nỉ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li>
                <a href="#">TIN TỨC</a>
              </li>
              <li>
                <a href="#">BẢN ĐỒ</a>
              </li>
              <li>
                <a href="#">LIÊN HỆ</a>
              </li>
            </ul>
          </div>
          <div className="col-auto" style={{ padding: "0" }}>
            <ul className="header__function-list">
              <li className="header__function-list__dropdown">
                <i className="fa fa-shopping-cart"></i>
                <ul className="header__function-list__dropdownlist">
                  <div className="header__function-list__dropdown__triangle"></div>
                  <div className="header__cart__product-details">
                    <div className="row">
                      <div className="col-6">
                        <img src={product} alt="" />
                      </div>
                      <div className="col-5 header__cart__product-details__product-name">
                        <span>Áo sơ mi Nam</span>
                        <br />
                        <span className="header__cart__product-details__price">
                          120.000
                          <span className="header__cart__product-details__price-icon">
                            đ
                          </span>
                        </span>
                      </div>
                      <div className="col-1">
                        <div className="col-1 header__cart__product-details__remove-product">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <img src={product} alt="" />
                      </div>
                      <div className="col-5 header__cart__product-details__product-name">
                        <span>Áo sơ mi Nam</span>
                        <br />
                        <span className="header__cart__product-details__price">
                          120.000
                          <span className="header__cart__product-details__price-icon">
                            đ
                          </span>
                        </span>
                      </div>
                      <div className="col-1">
                        <div className="col-1 header__cart__product-details__remove-product">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="header__line">
                      {" "}
                      <hr />
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ margin: "10px" }}
                    >
                      <span className="header__cart__product-details__total">
                        Tổng số
                      </span>
                      <div className="header__cart__product-details__price-total">
                        240.000
                        <span className="header__cart__product-details__price-icon">
                          đ
                        </span>
                      </div>
                    </div>
                    <br />
                    <button className="header__cart__product-details__btn_cart">
                      GIỎ HÀNG
                    </button>
                  </div>
                </ul>
              </li>
              <li>
                <i className="fa fa-search"></i>
              </li>
              <li className="header__navbar-mobile">
                <div
                  className="circle d-flex justify-content-center align-items-center"
                  onClick={() => setShow(!show)}
                >
                  <i className="fa fa-bars"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {show && (
        <div className="header__navitem__mobile">
          <div className="container">
            <div className="header__navitem__mobile__list">
              <ul>
                <li>
                  <a href="#">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="#">GIỚI THIỆU</a>
                </li>
                <li className="header__navitem__dropdown">
                  <a href="#">
                    SẢN PHẨM
                    <i className="fa fa-chevron-down ml-1"></i>
                  </a>
                  <ul className="header__navitem__dropdownlist">
                    <div className="row">
                      <div className="col-sm-12 col-md-4">
                        <p className="header__nav-list__dropdownlist__title">
                          DƯỠNG DA
                        </p>
                        <ul className="header__nav-list__dropdownlist__details">
                          <li>
                            <a>Áo khoác</a>
                          </li>
                          <li>
                            <a>Bộ áo liền quần</a>
                          </li>
                          <li>
                            <a>Dresses</a>
                          </li>
                          <li>
                            <a>Quần / Váy</a>
                          </li>
                          <li>
                            <a>Quần short</a>
                          </li>
                          <li>
                            <a>Quần jean</a>
                          </li>
                          <li>
                            <a>Đồ đan</a>
                          </li>
                          <li>
                            <a>Áo nỉ</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <p className="header__nav-list__dropdownlist__title">
                          NƯỚC HOA
                        </p>
                        <ul className="header__nav-list__dropdownlist__details">
                          <li>
                            <a>Áo khoác</a>
                          </li>
                          <li>
                            <a>Bộ áo liền quần</a>
                          </li>
                          <li>
                            <a>Dresses</a>
                          </li>
                          <li>
                            <a>Quần / Váy</a>
                          </li>
                          <li>
                            <a>Quần short</a>
                          </li>
                          <li>
                            <a>Quần jean</a>
                          </li>
                          <li>
                            <a>Đồ đan</a>
                          </li>
                          <li>
                            <a>Áo nỉ</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <p className="header__nav-list__dropdownlist__title">
                          TRANG SỨC
                        </p>
                        <ul className="header__nav-list__dropdownlist__details">
                          <li>
                            <a>Áo khoác</a>
                          </li>
                          <li>
                            <a>Bộ áo liền quần</a>
                          </li>
                          <li>
                            <a>Dresses</a>
                          </li>
                          <li>
                            <a>Quần / Váy</a>
                          </li>
                          <li>
                            <a>Quần short</a>
                          </li>
                          <li>
                            <a>Quần jean</a>
                          </li>
                          <li>
                            <a>Đồ đan</a>
                          </li>
                          <li>
                            <a>Áo nỉ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li>
                  <a href="#">TIN TỨC</a>
                </li>
                <li>
                  <a href="#">BẢN ĐỒ</a>
                </li>
                <li>
                  <a href="#">LIÊN HỆ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
