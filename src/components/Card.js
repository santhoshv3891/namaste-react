const Card = (props) => {
  const { restaurant } = props;
  const { name, type_of_food, rating } = restaurant;
  return (
    <div className="res-container">
      <h3>{name}</h3>
      <div>Cuisines: {type_of_food}</div>
      <div>Rating: {rating}</div>
    </div>
  );
};

export default Card;
