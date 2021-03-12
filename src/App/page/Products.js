import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product_20.png";
import product2 from "../../assets/images/product_21.png";
import product3 from "../../assets/images/product_22.png";
import ReactPaginate from "react-paginate";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    boxShadow: "none",
    borderBottom: "1px dashed #e6e6e6",
    cursor: "pointer",
    marginBottom: "-10px",
  },
  heading: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
  item: {
    fontSize: "14px",
    display: "block",
    position: "relative",
    marginTop: "-1.5rem",
    marginLeft: "0.5rem",
    color: "#737373",
    textTransform: "capitalize",
    lineHeight: "2rem",
    listStyleType: "square",
  },
}));
function Products() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [showType, setShowType] = useState("grid");
  const productData = [
    { image: product1, title: "OHUI" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUI" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUIAAAA" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUI" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUIBBBB" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUI" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUICCCC" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
    { image: product1, title: "OHUI" },
    { image: product2, title: "HOME" },
    { image: product3, title: "DEBORA" },
  ];

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 6;
  const productPerPageList = 3;
  const pagesVisited = pageNumber * productPerPage;
  const pagesVisitedList = pageNumber * productPerPageList;
  const displayProductGrid = productData
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((product) => {
      return (
        <div className="product-show__item">
          <div className="item__img">
            <img src={product.image} alt="" />
          </div>
          <div className="item__content">
            <p className="item__title">{product.title}</p>
            <p className="item__name">Mỹ phẩm châu Âu</p>
            <p className="line"></p>
            <p className="item__price">
              <p>
                355.000<span>đ</span>
              </p>
              <p className="price__sale">
                <p>
                  450.000<span>đ</span>
                </p>
              </p>
            </p>
            <p className="item__btn">
              <button>
                <span>Mua hàng</span>
              </button>
              <button>
                <i className="fa fa-heart"></i>
              </button>
              <button>
                <i className="fa fa-sync"></i>
              </button>
            </p>
          </div>
        </div>
      );
    });
  const displayProductList = productData
    .slice(pagesVisitedList, pagesVisitedList + productPerPageList)
    .map((product) => {
      return (
        <div className="product-show__item">
          <div className="item__img">
            <img src={product.image} alt="" />
          </div>
          <div className="item__content">
            <p className="item__name">Mỹ phẩm châu Âu</p>
            <div className="item__rating">
              <ul className="rating__list">
                <li className="rating__item">
                  <i className="fa fa-heart"></i>
                </li>
                <li className="rating__item">
                  <i className="fa fa-heart"></i>
                </li>
                <li className="rating__item">
                  <i className="fa fa-heart"></i>
                </li>
                <li className="rating__item">
                  <i className="fa fa-heart"></i>
                </li>
                <li className="rating__item">
                  <i className="fa fa-heart"></i>
                </li>
              </ul>
              <p className="quantity">(4 lượt mua)</p>
            </div>
            <p className="item__desc">
              Tự hào được ghi là năm mà Tiffany &#38; Co là thành lập, bộ sưu
              tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua
              trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp đường
              cong và đường nét mượt mà.
            </p>
            <div className="item__price">355.000đ</div>
            <div className="item__btn">
              <button>
                <span>Mua hàng</span>
              </button>
              <button>
                <i className="fa fa-heart"></i>
              </button>
              <button>
                <i className="fa fa-sync"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(productData.length / productPerPage);
  const pageCountList = Math.ceil(productData.length / productPerPageList);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const changeTypeShow = () => {
    if (pageNumber > 4) setPageNumber(3);
    setShowType("grid");
  };
  return (
    <section className="product-page">
      <div className="container">
        <div className="path">
          <Link to="/" className="path__name">
            Home
          </Link>
          <Link to="#" className="path__name">
            Sản phẩm
          </Link>
          <Link to="/product" className="path__name">
            Trang sức
          </Link>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="banner__wrap">
            <p className="banner__sale">Giảm giá 50%</p>
            <p className="banner__time">
              Trong vòng 3 ngày
              <span>(25/5 - 28/5/2015)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="product-page__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="product-page__left">
                <div className="category">
                  <h3 className="heading-secondary">
                    <i className="fa fa-bars"></i>
                    Danh mục sản phẩm
                  </h3>
                  <div>
                    <Accordion
                      className={classes.root}
                      expanded={expanded === "mypham"}
                      onChange={handleChange("mypham")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="mypham-content"
                        id="mypham-header"
                      >
                        <Typography className={classes.heading}>
                          Mỹ phẩm
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.item}>
                          <ul>
                            <li>Sữa rửa mặt</li>
                            <li>Kem dưỡng da</li>
                            <li>Kem chống nắng</li>
                            <li>Son môi</li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      className={classes.root}
                      expanded={expanded === "trangsuc"}
                      onChange={handleChange("trangsuc")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="mypham-content"
                        id="mypham-header"
                      >
                        <Typography className={classes.heading}>
                          Trang sức
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.item}>
                          <ul>
                            <li>Vòng tay</li>
                            <li>Nhẫn</li>
                            <li>Lắc chân</li>
                            <li>Phụ kiện khác</li>
                            <li>Giày lưới các loại</li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      className={classes.root}
                      expanded={expanded === "phukien"}
                      onChange={handleChange("phukien")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="mypham-content"
                        id="mypham-header"
                      >
                        <Typography className={classes.heading}>
                          Phụ kiện
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.item}>
                          <ul>
                            <li>Túi xách</li>
                            <li>Đồng hồ</li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      className={classes.root}
                      expanded={expanded === "nuochoa"}
                      onChange={handleChange("nuochoa")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="mypham-content"
                        id="mypham-header"
                      >
                        <Typography className={classes.heading}>
                          Nước hoa
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.item}>
                          <ul>
                            <li>Nước hoa Việt Nam</li>
                            <li>Nước hoa Mỹ</li>
                            <li>Nước hoa Pháp</li>
                            <li>Nước hoa Nhật</li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                <div className="compare-product">
                  <h3 className="heading-secondary">So sánh sản phẩm</h3>
                  <p className="compare-product__msg">
                    Bạn chưa có sản phẩm nào để so sánh
                  </p>
                </div>
                <div className="tag">
                  <h3 className="heading-secondary">Tag sản phẩm</h3>
                  <ul className="tag__list">
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Hoa tai
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Son
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Nước hoa
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Giày
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Sandal
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Áo sơ mi
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Nước hoa
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Trẻ em
                      </a>
                    </li>
                    <li className="tag__item">
                      <a href="#" className="tag__link">
                        Thời trang nữ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="store">
                  <p className="store__name">
                    Mandala <br />
                    Store
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="product-list__right">
                <div className="control-bar">
                  <div className="control-bar__show">
                    <div className="grid" onClick={() => changeTypeShow()}>
                      <i
                        className={
                          showType === "grid"
                            ? "fa fa-th-large active"
                            : "fa fa-th-large"
                        }
                      ></i>
                    </div>
                    <div className="list" onClick={() => setShowType("list")}>
                      <i
                        className={
                          showType === "list"
                            ? "fa fa-list active"
                            : "fa fa-list"
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="control-bar__page">
                    <div className="pagination-wrapper">
                      {showType === "grid" ? (
                        <ReactPaginate
                          forcePage={pageNumber}
                          previousLabel={<i className="fa fa-caret-left"></i>}
                          nextLabel={<i className="fa fa-caret-right"></i>}
                          pageCount={pageCount}
                          onPageChange={(selected) => changePage(selected)}
                          containerClassName={"pagination"}
                          activeClassName={"active"}
                        />
                      ) : (
                        <ReactPaginate
                          forcePage={pageNumber}
                          previousLabel={<i className="fa fa-caret-left"></i>}
                          nextLabel={<i className="fa fa-caret-right"></i>}
                          pageCount={pageCountList}
                          onPageChange={(selected) => changePage(selected)}
                          containerClassName={"pagination"}
                          activeClassName={"active"}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {showType === "grid" ? (
                  <div className="product-show__grid">{displayProductGrid}</div>
                ) : (
                  <div className="product-show__list">{displayProductList}</div>
                )}
                <div className="control-bar">
                  <div className="control-bar__show">
                    <div className="grid" onClick={() => setShowType("grid")}>
                      <i
                        className={
                          showType === "grid"
                            ? "fa fa-th-large active"
                            : "fa fa-th-large"
                        }
                      ></i>
                    </div>
                    <div className="list" onClick={() => setShowType("list")}>
                      <i
                        className={
                          showType === "list"
                            ? "fa fa-list active"
                            : "fa fa-list"
                        }
                      ></i>
                    </div>
                  </div>
                  <div className="control-bar__page">
                    <div className="pagination-wrapper">
                      {showType === "grid" ? (
                        <ReactPaginate
                          forcePage={pageNumber}
                          previousLabel={<i className="fa fa-caret-left"></i>}
                          nextLabel={<i className="fa fa-caret-right"></i>}
                          pageCount={pageCount}
                          onPageChange={(selected) => changePage(selected)}
                          containerClassName={"pagination"}
                          activeClassName={"active"}
                        />
                      ) : (
                        <ReactPaginate
                          forcePage={pageNumber}
                          previousLabel={<i className="fa fa-caret-left"></i>}
                          nextLabel={<i className="fa fa-caret-right"></i>}
                          pageCount={pageCountList}
                          onPageChange={(selected) => changePage(selected)}
                          containerClassName={"pagination"}
                          activeClassName={"active"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
