import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          {/* Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time. */}
          Explore a diverse menu filled with mouthwatering dishes, crafted with
          the finest ingredients and expert culinary techniques. Whether you're
          craving comfort food or something new, we’re here to satisfy your
          taste and elevate your dining experience
        </p>
        <a href="#explore-menu">View Menu</a>
      </div>
      <div className="header-right">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
