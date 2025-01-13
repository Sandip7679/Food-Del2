import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        {/* Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time. */}
        Indulge in a wide range of mouthwatering dishes, crafted to satisfy
        every craving. Each meal is made with the finest ingredients, ensuring
        an unforgettable dining experience
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <a
              href="#explore-menu"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </a>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
