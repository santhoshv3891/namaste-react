import { RES_IMG } from "../utils/common";

const ItemList = ({ foodData }) => {
  console.log(foodData);
  return (
    <div className="mt-5">
      {foodData.map((food) => (
        <div className="flex justify-between mb-3" key={food.card.info.id}>
          <div className="w-9/12">
            {food.card.info.name}
            <p>{food.card.info.description}</p>
          </div>
          <div className="max-w-full">
            <img className="w-32 h-32" src={RES_IMG + food.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
