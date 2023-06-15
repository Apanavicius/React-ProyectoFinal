import { useCount } from "../hooks/useCount";

const ItemCounter = ({ initial, upperBound, onAdd }) => {
  console.log("upperBound:", upperBound);

  const { count, decrement, increment } = useCount(initial, upperBound);

  return (
    <>
      <div className="count-container">
        <button onClick={decrement}> - </button>
        <span> {count} </span>
        <button onClick={increment}> + </button>
        <button
          onClick={() => {
            count;
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCounter;
