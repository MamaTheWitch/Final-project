import React, { useState, useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

const FillCart = () => {
  useEffect(() => {

      let mutation = `mutation InsertP13($player: String, $product: String, $item: String, $price: String, $image: String, $size: String, $print: Boolean, $price2: Float) {
  insert_p13(objects: {player: $player, product: $product, item: $item, price: $price, image: $image, size: $size, print: $print, price2: $price2}) {
    affected_rows
  }
}`

  let basket = JSON.parse(localStorage.getItem("data")) || [];

  let queryDict = location.search.substr(1).split("=")[1];
  let queryName = queryDict.split("+");
  let fullName = `${queryName[0]} ${queryName[1]}`;
  let greeting = "Here's your order summary for " + fullName + ":";
  document.getElementsByClassName("typing")[0].innerText = String(greeting);

  function GenerateCartItems() {
    if (basket.length !== 0) {
      let Product = document.getElementById("template");

      for (let i = 0; i < basket.length; i++) {
        let clone = Product.cloneNode(true)
        clone.id = i

        function printOption() {
          if (basket[i].print == true) { return "YES"; }
          else { return "NO"; }
        };

        clone.getElementsByClassName("thumb-image")[0].src = basket[i].image;
        clone.getElementsByClassName("product-name")[0].innerText = basket[i].product;
        clone.getElementsByClassName("item-name")[0].innerText = basket[i].item;
        clone.getElementsByClassName("number")[0].innerText = "Number print: " + String(printOption());
        clone.getElementsByClassName("size")[0].innerText = "Selected size: " + String(basket[i].size);
        clone.getElementsByClassName("price")[0].innerText = basket[i].price;

        clone.getElementsByClassName("delete-button")[0].addEventListener("click", function() {
          basket.splice(i, 1);
          localStorage.setItem("data", JSON.stringify(basket));
          window.location.reload();
        });

        document.body.append(clone);
      };

      let sum = basket.map(o => o.price2).reduce((a, c) => { return a + c });
      let summary = "You have " + basket.length + " items in your cart. Total: " + (sum).toFixed(2) + " euros. *";
      document.getElementsByClassName("total")[0].innerText = String(summary);

      return;
    }
    else { document.getElementsByClassName("total")[0].innerText = "Your cart is empty 🤷"; }
  };

  GenerateCartItems()

  document.getElementById("Submit").addEventListener("click", function() {
    for (var i = 0, len = basket.length; i < len; i++) {
      async function postData(url = 'https://honka-server.hasura.app/v1/graphql', data = basket) {
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'omit',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: mutation, variables: data[i] })
        });
        let myJason = await response.json();
        console.log(myJason);
        return myJason;
      };
      postData();
      localStorage.clear();
      window.location = '/thanks' + window.location.search;
    }
  });

  }, []);
  return (
      <div className="cart-card" id="template">
        <img className="thumb-image" src="" alt="image" />
        <div className="names">
          <div className="product-name"></div>
          <div className="item-name"></div>
        </div>
        <hr id="line" />
        <div className="info">
          <div className="number"></div>
          <div className="size"></div>
        </div>
        <hr id="line" />
        <div className="price"></div>
        <button className="delete-button">🗑️</button>
      </div>
  );
};
export default FillCart;