import React from 'react';
import FillCart from './FillCart';
import honka from '/images/honkaLogo.png';
import stadium from '/images/stadiumLogo.webp';

const Cart = () => {


  return (
    <div>
          <div className="header">
      <div id="images">
        <img src={honka} alt="FC Honka logo" style={{ float: "left", height: "40px"}} />
        <img src={stadium} alt="Stadium Teamsales logo" style={{ float: "right", height: "30px" }} />
      </div>

  
        <ul className="nav">
          <li>1. Select a player &gt; </li>
          <li>2. Choose products &gt; </li>
          <li id="current">3. Check and confirm your order</li>
        </ul>
      </div>


      <div id="whiteBox">
        <div className="typing"></div><br />
        <div className="total"></div>
        <div className="small">* You will get an invoice for your order together with the next team fee invoice.</div>
        <div className="total">Sounds good?</div>
      </div>

      <div className="buttons">
        <button id="Submit">Yes. Submit my order!</button>
        <button id="BackButton" onClick={() => window.location = '/selection' + window.location.search}>No. Back to shopping!</button>
      </div>
      <FillCart />
    </div>
  );
};
export default Cart;