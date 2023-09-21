import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [menuObj, setMenuObj] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  //console.log(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const [showIndex, setIndex] = useState(null);

  const setShowIndexProp = (index) => {
    index === showIndex ? setIndex(null) : setIndex(index);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="resMenu-container">
      <div className="restaurantDetails text-center">
        <h3 className="font-bold text-lg">
          Restaurant Name - {resInfo?.cards[0]?.card?.card?.info?.name}
        </h3>
        <div>Area - {resInfo?.cards[0]?.card?.card?.info?.areaName}</div>
        <div>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</div>
      </div>
      {categories.map((cards, index) => (
        <RestaurantCategory
          key={cards?.card?.card?.info?.name}
          cardData={cards?.card?.card}
          clickVal={index === showIndex && true}
          setShowIndex={() => setShowIndexProp(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
