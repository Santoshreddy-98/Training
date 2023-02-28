import React from "react";
import './cart.css'
import {FaRupeeSign} from 'react-icons/fa';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - <small><FaRupeeSign/></small>{price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;