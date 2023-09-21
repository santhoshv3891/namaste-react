import { useState, useEffect, useContext } from "react";
import Card, { promoted } from "./Card";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Filter = () => {
  const [resList, setResObj] = useState([]);
  const [filteredListAll, setFilteredObj] = useState([]);
  const [srchText, getSrchText] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data);
    setResObj(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredObj(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  const WithPromoted = promoted(Card);

  if (onlineStatus === false)
    return <h1>You're offline! Please check your internet connection!</h1>;
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-searchContainer flex mx-2 my-6">
        <div className="search-container mx-2">
          <input
            className="border-black border mr-2 pl-1 rounded-md"
            type="text"
            onChange={(e) => {
              getSrchText(e.target.value);
            }}
            value={srchText}
          />
          <button
            className="bg-green-200 px-2 py-1"
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
            className="bg-green-200 px-2 py-1"
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
        <div>
          <input
            className="border-black border mx-2 pl-1 rounded-md"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="card-container flex flex-wrap mx-4">
        {filteredListAll.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.promoted ? (
              <WithPromoted resList={res} />
            ) : (
              <Card key={res.info.id} restaurant={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
