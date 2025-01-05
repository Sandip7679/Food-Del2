import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ image, name, price, desc, id }) => {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency,setMenu } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          // src={url + "/images/" + image}
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            title="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <img src={assets.rating_starts} alt="" />
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{desc}</p>
        <div className="price-order-section">
          <p className="food-item-price">
            {currency}
            {price}
          </p>
          <button
            onClick={() => {
              addToCart(id);
              navigate("/cart");
              window.scrollTo(0,0);
              setMenu("");
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
