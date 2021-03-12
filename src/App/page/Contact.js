import React from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";

function Contact() {
  const defaultProps = {
    center: {
      lat: 16.051234367943042,
      lng: 108.20563515017957,
    },
    zoom: 18,
  };
  //   console.log(defaultProps.zoom);
  return (
    <section className="section__contact">
      <div className="container">
        <div className="path">
          <Link to="/" className="path__name">
            Home
          </Link>
          <Link to="/contact" className="path__name">
            Liên hệ
          </Link>
        </div>
        <div className="contact__wrapper">
          <h3>Liên hệ</h3>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="contact__map">
                <div style={{ height: "405px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyD9GkYM8HNoP4flJ8iaWfF0BsVvpEkBU1o",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  ></GoogleMapReact>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="contact__form">
                <h4>gửi email cho chúng tôi</h4>
                <form action="#">
                  <div className="form__group">
                    <label className="form__lable">
                      Tên<span className="form__obligatory">*</span>
                    </label>
                    <input className="form__input" type="text" />
                  </div>
                  <div className="form__group">
                    <label className="form__lable">
                      Email<span className="form__obligatory">*</span>
                    </label>
                    <input className="form__input" type="text" />
                  </div>
                  <div className="form__group">
                    <label className="form__lable form__lable-textarea">
                      Tin nhắn<span className="form__obligatory">*</span>
                    </label>
                    <textarea
                      className="form__input form__textarea"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="form__buttons">
                    <button className="btn btn-submit" type="submit">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
