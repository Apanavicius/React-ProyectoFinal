import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};
