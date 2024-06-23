import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContest } from "../Contest/StoreContest";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContest);

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id]?(
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon}
            alt="Add"
          />
        ):(<div className="food-item-counter">
            <img
              className="minus-icon"
              onClick={() => removeFromCart(id)}
              src={assets.minus_icon}
              alt="Remove"
            />
            <p className="counter">{cartItems[id]}</p>
            <img
              className="plus-icon"
              onClick={() => addToCart(id)}
              src={assets.plus_icon}
              alt="Add"
            />
          </div>
        )}
        <div className="food-item-info">
          <p className="food-item-name">{name}</p>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
