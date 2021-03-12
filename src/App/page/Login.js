import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <section className="section__login">
      <div className="container">
        <div className="path">
          <Link to="/" className="path__name">
            Home
          </Link>
          <Link to="/login" className="path__name">
            Login
          </Link>
        </div>
        <div className="login__wrapper">
          <div className="login__header">
            <h3>Đăng nhập</h3>
            <Link to="/register" className="btn">
              Đăng kí
            </Link>
          </div>
          <form class="form" action="#">
            <h4 class="form__title">khách hàng đăng ký</h4>
            <p class="form__text">
              Nếu bạn có tài khoản, xin vui lòng đăng nhập
            </p>
            <div class="form__group">
              <label class="form__lable">
                Địa chỉ email<span class="form__obligatory">*</span>
              </label>
              <input class="form__input" type="text" />
            </div>
            <div class="form__group">
              <label class="form__lable">
                Password<span class="form__obligatory">*</span>
              </label>
              <input class="form__input" type="password" />
            </div>
            <div class="form__buttons">
              <a class="form__link" href="#">
                Quên mật khẩu?
              </a>
              <button class="btn btn-submit" type="submit">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
