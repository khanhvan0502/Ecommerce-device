import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const addToWishList = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname == "/product" ? `gr-${grid}` : "col-3"
              } `}
            >
              <Link
                to={`${
                  location.pathname == "/"
                    ? "/product/:id"
                    : location.pathname == "/product/:id"
                    ? "/product/:id"
                    : ":id"
                }`}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => {
                      addToWishList(item?._id);
                    }}
                  >
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={item?.images[0]?.url ? item?.images[0]?.url : watch}
                    className="img-fluid"
                    alt="product image"
                  />
                  {/* <img
                    src={item?.images.length && item?.images[0].url}
                    className="img-fluid mx-auto"
                    width={160}
                    alt="product image"
                  /> */}
                  <img
                    src={item?.images[1]?.url ? item?.images[1]?.url : watch2}
                    className="img-fluid"
                    alt="product image"
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={item?.totalrating.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">$ {item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="prodcompare" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={view} alt="view" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={addcart} alt="add car" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;

//TODO
