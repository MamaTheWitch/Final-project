import React from 'react';
import FillPlayers from './FillPlayers';
import honka from '/images/honkaLogo.png';
import stadium from '/images/stadiumLogo.webp';

const Start = () => {

  return (
    <div>
          <div className="header">
      <div id="images">
        <img src={honka} alt="FC Honka logo" style={{ float: "left", height: "40px"}} />
        <img src={stadium} alt="Stadium Teamsales logo" style={{ float: "right", height: "30px" }} />
      </div>

  
        <ul className="nav">
          <li id="current">1. Select a player &gt; </li>
          <li>2. Choose products &gt; </li>
          <li>3. Check and confirm your order</li>
        </ul>
      </div>

      <div className="center">
        <p>Hi there, P2013 Green FC Honka player!
        <br />Welcome to place your order for the team gear from Stadium.
        <br />Please select a player that you are ordering for: </p>

        <FillPlayers />


        
        <span style={{ backgroundColor: "black" }}>Make sure to list your wishes by the<br /> end of Sunday, December 11th!</span>
      </div>
    </div>
  );
};
export default Start;