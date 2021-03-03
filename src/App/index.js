import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import layer_product_new from "../assets/images/Layer_product_new.png";
import layer from "../assets/images/Layer.png";
function HomePage() {
  return (
    <div className="home">
      <Header />
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="banner__wrapper-product">
                <img
                  className="banner__product-img"
                  src={layer_product_new}
                  alt=""
                />
                <div className="banner__product-introduce">
                  <div className="banner__product-introduct__name">
                    GreenVera
                  </div>
                  <div className="banner__product-introduct__info">
                    Sản phẩm tinh dầu dưỡng da mới nhất của Mandala
                  </div>
                  <div className="banner__product-introduct__price">
                    GÍA CHỈ 750.000
                    <span className="banner__product-introduct__price-icon">
                      đ
                    </span>
                  </div>
                  <div className="banner__product-introduct__buy">
                    <u>MUA HÀNG</u>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="banner__layer">
                <img className="banner__layer-img" src={layer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
