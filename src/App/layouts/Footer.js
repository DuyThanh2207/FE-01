import React from "react";
import map from "../../assets/images/map.svg";
import phone from "../../assets/images/phone.svg";
import fax from "../../assets/images/fax.svg";
import email from "../../assets/images/email.svg";
import footer_extend from "../../assets/images/footer_extend.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <div className="footer__contact">
              <p className="footer__contact-title">LIÊN HỆ VỚI CHÚNG TÔI</p>
              <ul className="footer__contact-list">
                <li className="d-flex footer__address-item">
                  <div className="footer__contact-icon">
                    <img src={map} alt="" />
                  </div>
                  <a className="footer__contact-address">
                    Tầng 4, tòa nhà Hanoi Group Số 442 Đội Cấn, P.Cống Vị, Q. Ba
                    Đình, Hà Nội
                  </a>
                </li>
                <div className="d-flex">
                  <li className="d-flex footer__address-item">
                    <span className="footer__contact-icon">
                      <img src={phone} alt="" />
                    </span>
                    <a className="footer__contact-phone">(04) 6674 2332 </a>
                  </li>
                  <span className="space-line">-</span>
                  <li className="d-flex footer__address-item">
                    <span className="footer__contact-icon ml-1">
                      <img src={fax} alt="" />
                    </span>
                    <a className="footer__contact-phone">(04) 3786 8904</a>
                  </li>
                </div>
                <div className="d-flex">
                  <li className="d-flex footer__address-item">
                    <span className="footer__contact-icon">
                      <img src={phone} alt="" />
                    </span>
                    <a className="footer__contact-phone">(04) 6680 9686 </a>
                  </li>
                  <li className="d-flex footer__address-item ml-4">
                    <span className="footer__contact-icon">
                      <img src={email} alt="" />
                    </span>
                    <a className="footer__contact-phone">
                      Support&#64;bizweb.vn
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className="footer__contact">
              <p className="footer__contact-title">CHUYỂN HÀNG</p>
              <ul className="footer__shipping">
                <li>
                  <a>Mua sắm trực tuyến</a>
                </li>
                <li>
                  <a>Đến từ chúng tôi gửi đến</a>
                </li>
                <li>
                  <a>Chính sách vận chuyển</a>
                </li>
                <li>
                  <a>Vận chuyển thông tin</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className="footer__contact">
              <p className="footer__contact-title">HỖ TRỢ</p>
              <ul className="footer__shipping">
                <li>
                  <a>Câu chuyện của chúng tôi</a>
                </li>
                <li>
                  <a>Thanh toán an toàn</a>
                </li>
                <li>
                  <a>Tùy chọn vận chuyển</a>
                </li>
                <li>
                  <a>Chính sách vận chuyển</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className="footer__contact">
              <p className="footer__contact-title">THÔNG TIN</p>
              <ul className="footer__shipping">
                <li>
                  <a>Về chúng tôi</a>
                </li>
                <li>
                  <a>Điều khoản &amp; Điều kiện</a>
                </li>
                <li>
                  <a>Chính sách riêng tư</a>
                </li>
                <li>
                  <a>Đơn đặt hàng và returns</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className="footer__contact">
              <p className="footer__contact-title">MY ACCOUNT</p>
              <ul className="footer__shipping">
                <li>
                  <a>Xem giỏ hàng</a>
                </li>
                <li>
                  <a>Sản phẩm yêu thích</a>
                </li>
                <li>
                  <a>Kiểm tra</a>
                </li>
                <li>
                  <a>Theo dõi đặt hàng của tôi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <p className="footer__extend-text">
              © Copyright 2008-2014 DKT Technology JSC
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="footer__extend-img d-flex justify-content-end">
              <img src={footer_extend} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
