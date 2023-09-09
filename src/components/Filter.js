import { useState } from "react";
import resObj from "../utils/mockData";
import Card from "./Card";

const Filter = () => {
  let [resList, setResObj] = useState(resObj);
  return (
    <div>
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.rating > 5);
            setResObj(filteredList);
            console.log(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="card-container">
        {resList.map((res) => (
          <Card key={res._id.$oid} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
