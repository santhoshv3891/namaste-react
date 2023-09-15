import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RES_URL } from "../utils/common";

const RestaurantMenu = () => {
  const [menuObj, setMenuObj] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    return fetch(RES_URL + resId)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        return json;
      });
  };

  fetchMenu().then(function (result) {
    setMenuObj(result?.data);
  });

  console.log(menuObj);

  if (menuObj === null) return <Shimmer />;

  return (
    <div className="resMenu-container">
      <div className="restaurantDetails">
        <h3>Restaurant Name - {menuObj?.cards[0]?.card?.card?.info?.name}</h3>
        <div>Area - {menuObj?.cards[0]?.card?.card?.info?.areaName}</div>
        <div>{menuObj?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</div>
      </div>
      <div className="resMenu-details">
        <ul>
          {menuObj?.cards[0]?.card?.card?.info?.resCards?.map((cards) => (
            <li>{cards.card.info.name}</li>
          ))}
          <li>Biriyani</li>
          <li>Chicken Tikka</li>
          <li>Paneer Butter Masala</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
