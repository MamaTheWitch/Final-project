import React from 'react';
import FillProducts from './FillProducts';
import honka from '/images/honkaLogo.png';
import cart from '/images/cart.png';
import stadium from '/images/stadiumLogo.webp';
import styled from "styled-components";

const Select = () => {

  return (
    <div>
          <div className="header">
      <div id="images">
        <img src={honka} alt="FC Honka logo" style={{ float: "left", height: "40px"}} />
        <img src={stadium} alt="Stadium Teamsales logo" style={{ float: "right", height: "30px" }} />
      </div>

  
        <ul className="nav">
          <li>1. Select a player &gt; </li>
          <li id="current">2. Choose products &gt; </li>
          <li>3. Check and confirm your order</li>
        </ul>
      </div>

      <div className="topbar">

        <div className="reviewButton">
          <button onClick={() => window.location = '/cart' + window.location.search}>Review and submit my order!</button>
        </div>

        <div className="cartIcon">
          <img src={cart} />
          <div id="cartAmount"></div>
        </div>

      </div>

      <FillProducts />

      <footer>
        <div id="snackbar">Item added to cart 👍</div>
      </footer>
    </div>
  );
};
export default Select;
