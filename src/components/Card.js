import { RES_IMG } from "../utils/common";

const Card = (props) => {
  const { restaurant } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.info;
  return (
    <div className="res-container w-52 bg-gray-200 m-2 px-2 hover:bg-gray-300 py-3">
      <img
        className="max-w-full w-full h-40 rounded-md mb-3"
        src={RES_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <div>Cuisines: {cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
    </div>
  );
};

export const promoted = (Card) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
