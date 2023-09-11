import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";

const Filter = () => {
  const [resList, setResObj] = useState([]);
  const [filteredListAll, setFilteredObj] = useState([]);
  const [srchText, getSrchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResObj(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredObj(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-searchContainer">
        <div className="search-container">
          <input
            type="text"
            onChange={(e) => {
              getSrchText(e.target.value);
            }}
            value={srchText}
          />
          <button
            className="search-button"
            onClick={() => {
              const searchList = resList.filter((res) => {
                const arrText = res.info.name.toLowerCase();
                if (arrText.includes(srchText.toLowerCase())) {
                  return true;
                }
              });
              setFilteredObj(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = filteredListAll.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredObj(filteredList);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="card-container">
        {filteredListAll.map((res) => (
          <Card key={res.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
