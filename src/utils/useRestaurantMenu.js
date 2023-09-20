import { RES_URL } from "./common";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  // const fetchMenu = async () => {
  //   return fetch(RES_URL + resId)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (json) {
  //       return json;
  //     });
  // };

  // fetchMenu().then(function (result) {
  //   setResInfo(result?.data);
  // });

  return resInfo;
};

export default useRestaurantMenu;
