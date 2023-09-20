import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [menuObj, setMenuObj] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="resMenu-container">
      <div className="restaurantDetails">
        <h3>Restaurant Name - {resInfo?.cards[0]?.card?.card?.info?.name}</h3>
        <div>Area - {resInfo?.cards[0]?.card?.card?.info?.areaName}</div>
        <div>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</div>
      </div>
      <div className="resMenu-details">
        <ul>
          {resInfo?.cards[0]?.card?.card?.info?.resCards?.map((cards) => (
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
