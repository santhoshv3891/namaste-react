import Card from "./Card";
import resObj from "../utils/mockData";
import Header from "./Header";
import Filter from "./Filter";

const MainTemplate = () => {
  return (
    <div className="main-container">
      <Header />
      <Filter />
    </div>
  );
};

export default MainTemplate;
