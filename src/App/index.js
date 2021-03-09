import React, { Component } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import layer_product_new from "../assets/images/Layer_product_new.png";
import layer from "../assets/images/Layer.png";
import plane from "../assets/images/plane.svg";
import gift from "../assets/images/gift.svg";
import star from "../assets/images/star.svg";
import item1 from "../assets/images/item-mother-1.png";
import item2 from "../assets/images/item-mother-2.png";
import ring from "../assets/images/ring.png";
import item3 from "../assets/images/item-mother-3.png";
import item4 from "../assets/images/item-mother-4.png";
import left from "../assets/images/left.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feedback1 from "../assets/images/feedback_1.png";
import feedback2 from "../assets/images/feedback_2.png";
import next from "../assets/images/next.svg";
import prev from "../assets/images/prev.svg";
import product1 from "../assets/images/product_1.jpg";
import product2 from "../assets/images/product_2.jpg";
import product3 from "../assets/images/product_3.jpg";
import product4 from "../assets/images/product_4.jpg";
import product5 from "../assets/images/product_5.jpg";
import product6 from "../assets/images/product_6.jpg";
import product8 from "../assets/images/product_8.png";
import product9 from "../assets/images/product_9.png";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import google from "../assets/images/google.svg";
import pinterest from "../assets/images/pinterest.svg";
import linkedin from "../assets/images/linkedin.svg";
import logo from "../assets/images/logo.png";
import blog from "../assets/images/blog-img.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./page/Products";
class InformationContact extends Component {
  render() {
    const { img, name } = this.props;
    return (
      <div className="contact__list-item">
        <div className="item-icon">
          <img src={img} alt="" />
        </div>
        <div className="item-name">{name}</div>
      </div>
    );
  }
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prev}
      className={className}
      style={{
        ...style,
        display: "block",
        width: "43px",
        height: "29px",
        marginRight: "200px",
        zIndex: "1",
      }}
      onClick={onClick}
      alt=""
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={next}
      className={className}
      style={{
        ...style,
        display: "block",
        width: "43px",
        height: "29px",
        marginLeft: "250px",
        zIndex: "1",
      }}
      onClick={onClick}
      alt=""
    />
  );
}
function HomePage() {
  const settingsProduct = {
    className: "product__setting",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                padding: "10px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                padding: "10px",
                right: "86px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 575,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                display: "block",
                right: "-6px",
                bottom: "120px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          right: "337px",
        }}
      >
        <ul
          style={{
            margin: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "7px",
            height: "7px",
            backgroundColor: "#000",
            opacity: ".25",
            lineHeight: "7px",
          }}
        ></div>
      );
    },
  };
  const settingInformationContact = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    className: "contact__list",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          className: "contact__list",
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          className: "contact__list",
        },
      },
    ],
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="home">
            <Header />
            <div className="banner">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="banner__wrapper-product">
                      <img
                        className="banner__product-img img-fluid"
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
                          GIÁ CHỈ 750.000
                          <span className="banner__product-introduct__price-icon">
                            đ
                          </span>
                        </div>
                        <div className="banner__product-introduct__buy">
                          <a href="#">MUA HÀNG</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner__layer">
                      <img
                        className="banner__layer-img img-fluid"
                        src={layer}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="fact">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="fact__shipping">
                      <img src={plane} alt="" className="fact__shipping__img" />
                      <p className="fact__shipping__text">
                        Miễn phí vận chuyển trên toàn quốc
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="fact__gift">
                      <img src={gift} alt="" className="fact__shipping__img" />
                      <p className="fact__shipping__text">
                        Tặng ngay quà tặng trị giá 350.000đ
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="fact__shipping">
                      <img src={star} alt="" className="fact__shipping__img" />
                      <p className="fact__shipping__text">
                        Giảm 30% cho đơn hàng trên 5.000.000đ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="product">
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-between product__ads-1">
                    <div className="mr-2 product__item-1">
                      <div className="mb-1">
                        <img src={item1} className="img-fluid" alt="" />
                      </div>
                      <div>
                        <img src={item2} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="product__item-2">
                      <div>
                        <img src={ring} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-1 product__ads-2">
                  <div className="d-flex justify-content-between product__ads-1">
                    <div className="mr-2 product__item-2">
                      <img src={left} className="img-fluid" alt="" />
                    </div>
                    <div className="product__item-1">
                      <div className="mb-1">
                        <img src={item3} className="img-fluid" alt="" />
                      </div>
                      <div>
                        <img src={item4} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="feedback">
              <div className="container">
                <Slider {...settings}>
                  <div className="feedback__slider-item d-flex">
                    <div className="feedback__item-content">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                          <div className="content-text">
                            "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                            màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                            kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                            công nghệ cải tiến mới nhất, hảng Rohto"
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feedback__item-infor">
                      <div className="infor-avatar">
                        <img src={feedback1} alt="" />
                      </div>
                      <div className="infor-block">
                        <h6>
                          TUTILE
                          <span className="infor-name">
                            Giám đốc phát triển sản phẩm
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="feedback__slider-item d-flex">
                    <div className="feedback__item-content">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                          <div className="content-text">
                            "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                            màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                            kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                            công nghệ cải tiến mới nhất, hảng Rohto"
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feedback__item-infor">
                      <div className="infor-avatar">
                        <img src={feedback1} alt="" />
                      </div>
                      <div className="infor-block">
                        <h6>
                          TUTILE
                          <span className="infor-name">
                            Giám đốc phát triển sản phẩm
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="feedback__slider-item d-flex">
                    <div className="feedback__item-content">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                          <div className="content-text">
                            "Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                            màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                            kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                            công nghệ cải tiến mới nhất, hảng Rohto"
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feedback__item-infor">
                      <div className="infor-avatar">
                        <img src={feedback2} alt="" />
                      </div>
                      <div className="infor-block">
                        <h6>
                          TUTILE
                          <span className="infor-name">
                            Giám đốc phát triển sản phẩm
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
            <section className="bestseller-product">
              <div>
                <div className="container">
                  <ul className="bestseller__product-list">
                    <li>
                      <a href="#" className="list-item__new">
                        Sản phẩm mới
                      </a>
                    </li>
                    <li>
                      <a className="list-item__active" href="#">
                        Sản phẩm bán chạy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="list-item__special">
                        Sản phẩm đặc biệt
                      </a>
                    </li>
                  </ul>
                  <div className="line">
                    <span className="line-before"></span>
                    <span className="line-center">//////////////</span>
                    <span className="line-after"></span>
                  </div>
                </div>
              </div>
              <div>
                <div className="container">
                  <ul className="menu">
                    <div className="col-left">
                      <li className="menu__item">
                        <a href="">Mỹ phẩm</a>
                      </li>
                      <li className="menu__item">
                        <a href="">Chăm sóc da</a>
                      </li>
                      <li className="menu__item">
                        <a href="">Dành cho tóc</a>
                      </li>
                    </div>
                    <div className="col-right">
                      <li className="menu__item">
                        <a href="">Nước hoa</a>
                      </li>
                      <li className="menu__item">
                        <a href="">Trang sức</a>
                      </li>
                      <li className="menu__item">
                        <a href="">Quà tặng</a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="slide__product">
                <Slider {...settingsProduct}>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product1} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product2} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product3} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product4} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product5} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product6} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product8} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product__item-list">
                    <div className="item__img">
                      <img src={product9} alt="" />
                    </div>
                    <div className="item__content">
                      <p className="item__content-title">Tyffany</p>
                      <p className="item__content-name">Mỹ phẩm châu Âu</p>
                      <div className="line"></div>
                      <div className="item__content-price">
                        <p>
                          355.000
                          <span>đ</span>
                        </p>
                        <p className="price-sale">
                          450.000
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                    <div className="item__button">
                      <button className="item__button-icon item__button-buy">
                        <span className="icon-text">Mua hàng</span>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-heart"></i>
                      </button>
                      <button className="item__button-icon">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
            <section className="additional-information">
              <div className="container">
                <div className="information__contact">
                  <Slider {...settingInformationContact}>
                    <InformationContact img={facebook} name="Facebook" />
                    <InformationContact img={twitter} name="Twitter" />
                    <InformationContact img={instagram} name="Instagram" />
                    <InformationContact img={google} name="Google +" />
                    <InformationContact img={pinterest} name="Pinterest" />
                    <InformationContact img={linkedin} name="Linkedin" />
                  </Slider>
                </div>
                <div className="information__details">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                      <div className="details__about-us">
                        <div className="about-us__title">
                          <h2>Về chúng tôi</h2>
                          <span>///////////////////</span>
                        </div>
                        <div className="about-us__content">
                          <div className="about-us__content-logo">
                            <a href="">
                              <img src={logo} alt="" />
                            </a>
                          </div>
                          <div className="about-us__content-title">
                            <h2>
                              giới thiệu chung về mỹ phẩm handmade mandala
                            </h2>
                          </div>
                          <div className="about-us__content-introduce">
                            <p>
                              Hi, chào các nàng ... sau khá nhiều lời hứa hão
                              thì hôm nay tớ quay lại hâm nóng cái Blog này vào
                              một ngày đầu hè nóng oi bức, khi mà dân tình xô
                              nhau đi tắm Free để giải nhiệt.Hi, chào các nàng
                              ... sau khá nhiều lời hứa hão thì hôm nay tớ quay
                              lại hâm nóng cái Blog này vào một ngày đầu hè nóng
                              oi bức, khi mà dân tình xô nhau đi tắm Free để
                              giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời
                              hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog
                              này vào một ngày đầu hè nóng oi bức, khi mà dân
                              tình xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <a href="">Xem thêm</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                      <div className="details__blog">
                        <div className="about-us__title">
                          <h2>Blog</h2>
                          <span>///////////////////</span>
                        </div>
                        <div className="details__blog-img">
                          <img src={blog} alt="" />
                        </div>
                        <div className="details__blog-title">
                          Review son kem bourjois velvet
                        </div>
                        <p className="details__blog-introduce">
                          Hi, chào các nàng ... sau khá nhiều lời hứa hão thì
                          hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày
                          đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                          Free để giải nhiệt.
                        </p>
                        <a href="">Bởi NamTran (27/05/2015)</a>
                        <div className="details__block-details">
                          <a href="" className="introduct-link">
                            Đọc thêm
                            <i className="fa fa-angle-right"></i>
                          </a>
                          <a href="" className="comment-index">
                            23 Bình luận
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                      <div className="row">
                        <div className="col-sm-6 col-lg-12">
                          <div className="details__send-mail">
                            <div className="about-us__title">
                              <h2>gửi email cho chúng tôi</h2>
                              <span>///////////////////</span>
                            </div>
                            <div className="send-email__form">
                              <form>
                                <input
                                  className="email-input"
                                  type="text"
                                  placeholder="Email của bạn"
                                />
                                <p className="email-text">
                                  Gửi email để nhận những ưu đãi mới nhất
                                </p>
                                <button className="email-btn" type="submit">
                                  Gửi
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                          <div className="details__product-tag">
                            <div className="about-us__title">
                              <h2>tag sản phẩm</h2>
                              <span>///////////////////</span>
                            </div>
                            <ul className="product__tag-list">
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Đồng hồ
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Túi
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Phụ kiện
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Đồng hồ
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Túi
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Giày
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Sandal
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Áo sơ mi
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Nước hoa
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Giày
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Sandal
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Trẻ em
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Thời trang nữ
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Trẻ em
                                </a>
                              </li>
                              <li className="tag-item">
                                <a href="#" className="tag-item-link">
                                  Thời trang nữ
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </Route>
        <Route path="/product">
          <div className="wrapper">
            <Header />
            <Product />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
