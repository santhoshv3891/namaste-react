import { RES_IMG } from "../utils/common";

const Card = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.info;
  return (
    <div className="res-container">
      <img src={RES_IMG + cloudinaryImageId} />
      <h3>{name}</h3>
      <div>Cuisines: {cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
    </div>
  );
};

export default Card;
