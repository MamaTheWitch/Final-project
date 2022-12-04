import React, { useState, useEffect } from 'react';
import { players } from '../data.js';

const FillPlayers = () => {
  let select = document.getElementById("datalist");
  for (let i = 0; i < players.length; i++) {
    let opt = players[i];
    let element = document.createElement("option");
    element.text = opt;
    element.value = opt;
    select.add(element);
  };
  return (
    <form action="selection.html">
      <select name="datalist" className="players" id="datalist"></select>
      <input id="player-selection-button" type="submit" />
    </form>
  );
};
export default FillPlayers;