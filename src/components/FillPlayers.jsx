import React, { useEffect } from 'react';
import { players } from '../data.js';

const FillPlayers = () => {
  useEffect(() => {
    let select = document.getElementById("datalist");
    for (let i = 0; i < players.length; i++) {
      let opt = players[i];
      let element = document.createElement("option");
      element.text = opt;
      element.value = opt;
      select.add(element);
    };
  }, []);
  return (
    <div>
      <form action='/selection'>
        <select name="datalist" className="players" id="datalist"></select>
        <input id="player-selection-button" type="submit" />
      </form>
    </div>
  );
};
export default FillPlayers;