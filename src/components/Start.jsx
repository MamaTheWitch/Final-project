import React from 'react';
import FillPlayers from './FillPlayers';
import '../start.css';
import honka from '/images/honkaLogo.png';
import stadium from '/images/stadiumLogo.webp';

const Start = () => {

  return (
    <div>

      <div id="images">
        <img src={honka} alt="FC Honka logo" style={{ float: "left", height: "40px", marginBottom: "5rem" }} />
        <img src={stadium} alt="Stadium Teamsales logo" style={{ float: "right", height: "30px" }} />
      </div>

      <div>
        <ul className="nav">
          <li id="current">1. Select a player &gt; </li>
          <li>2. Choose products &gt; </li>
          <li>3. Check and confirm your order</li>
        </ul>
      </div>

      <div className="centerTXT">Hi there, P2013 Green{'\n'}FC Honka player!
        {'\n'}Welcome to place your order for the team gear from Stadium.
        {'\n'}Please select a player that you are ordering for:{'\n'}

        <FillPlayers />


        {'\n'}Make sure to list your wishes by the
        <span style={{ backgroundColor: "black" }}> end of Sunday, November 20th!</span>
      </div>
    </div>
  );
};
export default Start;