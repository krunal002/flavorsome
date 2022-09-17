import { useState } from "react";
import "./styles.css";

var type1 = {
  sweet: "Gulab Jamun",
  spicy: "Chicken 65",
  chinese: "Quick Noodles",
  iceCream: "Italian Ice"
};
var type2 = {
  sweet: "Rasogolla",
  spicy: "Madras Curry",
  chinese: "Spring Rolls",
  iceCream: "Frozen Yogurt"
};
var type3 = {
  sweet: "Kaju Katli",
  spicy: "Cottage Cheese",
  chinese: "Hot Pot",
  iceCream: "Kulfii"
};
var rating1 = {
  sweet: "⭐⭐⭐",
  spicy: "⭐⭐⭐⭐",
  chinese: "⭐⭐",
  iceCream: "⭐⭐⭐⭐"
};
var rating2 = {
  sweet: "⭐⭐⭐⭐",
  spicy: "⭐⭐",
  chinese: "⭐⭐⭐⭐",
  iceCream: "⭐⭐⭐"
};
var rating3 = {
  sweet: "⭐⭐⭐⭐⭐",
  spicy: "⭐⭐⭐",
  chinese: "⭐⭐⭐",
  iceCream: "⭐⭐⭐⭐"
};

var price1 = {
  sweet: "₹ 10 for one",
  spicy: "₹ 200 for one",
  chinese: "₹ 90 for one",
  iceCream: "₹ 50 for one"
};
var price2 = {
  sweet: "₹ 15 for one",
  spicy: "₹ 300 for one",
  chinese: "₹ 130 for one",
  iceCream: "₹ 80 for one"
};
var price3 = {
  sweet: "₹ 12 for one",
  spicy: "₹ 150 for one",
  chinese: "₹ 170 for one",
  iceCream: "₹ 100 for one"
};

export default function App() {
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [typeThree, setTypeThree] = useState("");
  const [ratingOne, setRatingOne] = useState("");
  const [ratingTwo, setRatingTwo] = useState("");
  const [ratingThree, setRatingThree] = useState("");
  const [priceOne, setPriceOne] = useState("");
  const [priceTwo, setPriceTwo] = useState("");
  const [priceThree, setPriceThree] = useState("");

  return (
    <div className="App">
      <h1>😋Flavorsome 🍽🍴</h1>
      <p id="sub-heading">
        Here's menu card of my Hotel with different flavors and type's, have a
        look!
      </p>
      <p id="dish">🥗🍟🍦🍨🥧🍗</p>

      <div id="container">
        <div id="input-container">
          <div id="categiri">
            <p onClick={() => clickHandeler("sweet")}>Sweet 🍰</p>
            <p onClick={() => clickHandeler("spicy")}>Spicy 🥧</p>
            <p onClick={() => clickHandeler("chinese")}>Chinese 🍜</p>
            <p onClick={() => clickHandeler("iceCream")}>Ice-Cream 🍦</p>
          </div>
        </div>

        <div id="output-container">
          <div className="output">
            <strong>{typeOne}</strong>
            <br></br>
            {ratingOne}
            <br></br>
            <p>{priceOne}</p>
          </div>

          <div className="output">
            <strong>{typeTwo}</strong>
            <br></br>
            {ratingTwo}
            <br></br>
            <p>{priceTwo}</p>
          </div>

          <div className="output">
            <strong>{typeThree}</strong>
            <br></br>
            {ratingThree}
            <br></br>
            <p>{priceThree}</p>
          </div>
        </div>
      </div>
    </div>
  );

  function clickHandeler(key) {
    var typeOne = type1[key];
    setTypeOne(typeOne);

    var typeTwo = type2[key];
    setTypeTwo(typeTwo);

    var typeThree = type3[key];
    setTypeThree(typeThree);

    var ratingOne = rating1[key];
    setRatingOne(ratingOne);

    var ratingTwo = rating2[key];
    setRatingTwo(ratingTwo);

    var ratingThree = rating3[key];
    setRatingThree(ratingThree);

    var priceOne = price1[key];
    setPriceOne(priceOne);

    var priceTwo = price2[key];
    setPriceTwo(priceTwo);

    var priceThree = price3[key];
    setPriceThree(priceThree);
  }
}
