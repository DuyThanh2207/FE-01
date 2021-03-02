import React from "react";
import logo from "../../assets/images/logo.png";
import product from "../../assets/images/product.png";
function Header() {
  return (
    <div className="header d-flex align-items-center">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <a href="">TRANG CHỦ</a>
        </li>
        <li>
          <a href="">GIỚI THIỆU</a>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              SẢN PHẨM
              <i className="fa fa-chevron-down"></i>
            </button>
            <div class="dropdown-content">
              <div className="triangle"></div>
              <div className="row navbar-content">
                <div className="col-4 navbar-item">
                  <div className="header-content">DƯỠNG DA</div>
                  <hr />
                  <div className="item-content">Áo khoác</div>
                  <div className="item-content">Bộ áo liền quần</div>
                  <div className="item-content">Dresses</div>
                  <div className="item-content">Quần / Váy</div>
                  <div className="item-content">Quần short</div>
                  <div className="item-content">Quần jean</div>
                  <div className="item-content">Đồ đan</div>
                  <div className="item-content">Áo nỉ</div>
                </div>
                <div className="col-4 navbar-item">
                  <div className="header-content">Nước hoa</div>
                  <hr />
                  <div className="item-content">Áo cánh / Áo sơ mi</div>
                  <div className="item-content">Túi xách &amp; Balô</div>
                  <div className="item-content">Khăn quàng cổ và Foulards</div>
                  <div className="item-content">Dệt kim Hats &amp; Gloves</div>
                  <div className="item-content">Vớ &amp; Socks</div>
                  <div className="item-content">Jewerly</div>
                  <div className="item-content">Bị bảo vệ</div>
                  <div className="item-content">Giày</div>
                </div>
                <div className="col-4 navbar-item">
                  <div className="header-content">Trang sức</div>
                  <hr />
                  <div className="item-content">Áo cánh / Áo sơ mi</div>
                  <div className="item-content">Túi xách &amp; Balô</div>
                  <div className="item-content">Khăn quàng cổ và Foulards</div>
                  <div className="item-content">Dệt kim Hats &amp; Gloves</div>
                  <div className="item-content">Vớ &amp; Socks</div>
                  <div className="item-content">Jewerly</div>
                  <div className="item-content">Bị bảo vệ</div>
                  <div className="item-content">Giày</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="">TIN TỨC</a>
        </li>
        <li>
          <a href="">BẢN ĐỒ</a>
        </li>
        <li>
          <a href="">LIÊN HỆ</a>
        </li>
      </ul>
      <div class="dropdown">
        <button class="dropbtn-cart">
          <i className="fa fa-shopping-cart"></i>
        </button>
        <div class="dropdown-content-cart">
          <div className="triangle-cart"></div>
          <div className="row product">
            <div className="col-6">
              <img src={product} alt="" />
            </div>
            <div className="col-5 product-details">
              <span>Áo sơ mi Nam</span>
              <br />
              <span className="price">
                120.000<span className="price-icon">đ</span>
              </span>
            </div>
            <div className="col-1 remove-product">
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="row product mt-3 d-flex">
            <div className="col-6">
              <img src={product} alt="" />
            </div>
            <div className="col-5 product-details">
              <span>Áo sơ mi Nam</span>
              <br />
              <span className="price">
                120.000<span className="price-icon">đ</span>
              </span>
            </div>
            <div className="col-1 remove-product">
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <hr />
          <div
            className="d-flex justify-content-between"
            style={{ margin: "10px" }}
          >
            <span className="total">Tổng số</span>
            <div className="price-total">
              240.000<span className="price-icon">đ</span>
            </div>
          </div>
          <br />
          <button className="btn_cart">GIỎ HÀNG</button>
        </div>
      </div>
      <i className="fa fa-search"></i>
    </div>
  );
}

export default Header;
