import React from "react";
import ReactDOM from "react-dom/client";

const Cards = (props) => {
  const { restaurant } = props;
  const { name, type_of_food, rating } = restaurant;
  return (
    <div className="res-container">
      <h2>{name}</h2>
      <span>{type_of_food}</span>
      <span>{rating}</span>
    </div>
  );
};

const resObj = [
  {
    URL: "http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu",
    _id: { $oid: "55f14312c7447c3da7051b26" },
    address: "228 City Road",
    "address line 2": "Cardiff",
    name: ".CN Chinese",
    outcode: "CF24",
    postcode: "3JH",
    rating: 5,
    type_of_food: "Chinese",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-atthai-ss9/menu",
    _id: { $oid: "55f14312c7447c3da7051b27" },
    address: "376 Rayleigh Road",
    "address line 2": "Essex",
    name: "@ Thai",
    outcode: "SS9",
    postcode: "5PT",
    rating: 5.5,
    type_of_food: "Thai",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-atthairestaurant/menu",
    _id: { $oid: "55f14312c7447c3da7051b28" },
    address: "30 Greyhound Road Hammersmith",
    "address line 2": "London",
    name: "@ Thai Restaurant",
    outcode: "W6",
    postcode: "8NX",
    rating: 4.5,
    type_of_food: "Thai",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-atthairestaurant/menu",
    _id: { $oid: "55f14312c7447c3da7051b29" },
    address: "30 Greyhound Road Hammersmith",
    "address line 2": "London",
    name: "@ Thai Restaurant",
    outcode: "W6",
    postcode: "8NX",
    rating: 4.5,
    type_of_food: "Thai",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-indiancom-ch4/menu",
    _id: { $oid: "55f14312c7447c3da7051b2a" },
    address: "9 Broughton Hall Road",
    "address line 2": "Broughton",
    name: "@Indian.com",
    outcode: "CH4",
    postcode: "0QR",
    rating: 6,
    type_of_food: "Curry",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-007takeaway-s65/menu",
    _id: { $oid: "55f14312c7447c3da7051b2b" },
    address: "6 Drummond Street",
    "address line 2": "Rotherham",
    name: "007 Takeaway",
    outcode: "S65",
    postcode: "1HY",
    rating: 6,
    type_of_food: "Pizza",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
    _id: { $oid: "55f14312c7447c3da7051b2c" },
    address: "885 High Road Leytonstone",
    "address line 2": "London",
    name: "042 Restaurant \u0026 Bar",
    outcode: "E11",
    postcode: "1HR",
    rating: 3,
    type_of_food: "African",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
    _id: { $oid: "55f14312c7447c3da7051b2d" },
    address: "885 High Road Leytonstone",
    "address line 2": "London",
    name: "042 Restaurant \u0026 Bar",
    outcode: "E11",
    postcode: "1HR",
    rating: 3,
    type_of_food: "African",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
    _id: { $oid: "55f14312c7447c3da7051b2e" },
    address: "885 High Road Leytonstone",
    "address line 2": "London",
    name: "042 Restaurant \u0026 Bar",
    outcode: "E11",
    postcode: "1HR",
    rating: 3,
    type_of_food: "African",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu",
    _id: { $oid: "55f14312c7447c3da7051b2f" },
    address: "Unit 4 Spencer House",
    "address line 2": "Swalwell",
    name: "1 2 3 Chinese",
    outcode: "NE16",
    postcode: "3DS",
    rating: 4.5,
    type_of_food: "Chinese",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu",
    _id: { $oid: "55f14312c7447c3da7051b30" },
    address: "Unit 4 Spencer House",
    "address line 2": "Swalwell",
    name: "1 2 3 Chinese",
    outcode: "NE16",
    postcode: "3DS",
    rating: 4.5,
    type_of_food: "Chinese",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-100-degrees-chinese-restaurant-pontypridd/menu",
    _id: { $oid: "55f14312c7447c3da7051b31" },
    address: "67 Park Street",
    "address line 2": "Treforest",
    name: "100 Degrees Chinese Restaurant",
    outcode: "CF37",
    postcode: "1SN",
    rating: 5,
    type_of_food: "Chinese",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-100menu-wn1/menu",
    _id: { $oid: "55f14312c7447c3da7051b32" },
    address: "50 Wallgate",
    "address line 2": "Wigan",
    name: "100 Menu",
    outcode: "WN1",
    postcode: "1JU",
    rating: 5,
    type_of_food: "Chinese",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-104-turkish-BBQ/menu",
    _id: { $oid: "55f14312c7447c3da7051b33" },
    address: "104 Tanners Lane",
    "address line 2": "Essex",
    name: "104 Turkish BBQ",
    outcode: "IG6",
    postcode: "1QE",
    rating: 5,
    type_of_food: "Turkish",
  },
  {
    URL: "http://www.just-eat.co.uk/restaurants-109restaurant-w2/menu",
    _id: { $oid: "55f14312c7447c3da7051b34" },
    address: "109 Westbourne Park Road",
    "address line 2": "London",
    name: "109 Ristorante",
    outcode: "W2",
    postcode: "5QL",
    rating: 5,
    type_of_food: "Pizza",
  },
];

const AppTemplate = () => {
  return (
    <div className="main-container">
      <h1>All Restaurants</h1>
      {resObj.map((res) => (
        <Cards key={res._id.$oid} restaurant={res} />
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppTemplate />);
