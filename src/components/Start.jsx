// import Board from './Board';
import '../start.css';
import '../data.js';
import honka from '/images/honkaLogo.png';
import stadium from '/images/stadiumLogo.webp';

const Start = () => {

  function fillPlayers() {
    var select = document.getElementById("datalist");
    for (var i = 0; i < players.length; i++) {
      var opt = players[i];
      var element = document.createElement("option");
      element.text = opt;
      element.value = opt;
      select.add(element);
    };

  };
  return (
    <div>
      <p><img src={honka} alt="FC Honka logo" style="float:left;height:40px;" />
        <img src={stadium} alt="Stadium Teamsales logo" style="float:right;height:30px;" /></p>

      <header>
        <ul className="nav">
          <li id="current">1. Select a player &gt; </li>
          <li>2. Choose products &gt; </li>
          <li>3. Check and confirm your order</li>
        </ul>
      </header>

      <div className="centerTXT">Hi there, P2013 Green{'\n'}FC Honka player!
        {'\n'}Welcome to place your order for the team gear from Stadium.
        {'\n'}Please select a player that you are ordering for:{'\n'}

        <form action="selection.html">
          <select name="datalist" className="players" id="datalist"></select>
          <input id="player-selection-button" type="submit" />
        </form>

        {'\n'}Make sure to list your wishes by the
        <span style="background-color:black">end of Sunday, November 20th!</span>
      </div>
    </div>
  );
};
export default Start;