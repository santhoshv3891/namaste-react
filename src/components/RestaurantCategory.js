import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ cardData, clickVal, setShowIndex }) => {
  const handleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <div className="border p-6 mb-3">
          <h1
            onClick={handleAccordion}
            className="font-bold text-base cursor-pointer"
          >
            {cardData.title}
          </h1>
          {clickVal && <ItemList foodData={cardData.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
