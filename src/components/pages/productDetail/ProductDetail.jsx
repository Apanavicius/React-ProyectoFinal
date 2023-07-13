import ItemCounter from "../../ItemCounter";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const ProductDetail = ({ productSelected, qty, onAdd }) => {
  const { title, author, description, image, price, stock } = productSelected;

  return (
    <>
      <div>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <h2>{description}</h2>
        <img src={image} alt="portadaLibro" />
        <h3>${price}</h3>
        <h3>Stock: #{stock}</h3>
      </div>
      {productSelected.stock > 0 ? (
        <ItemCounter initial={qty} upperBound={stock} onAdd={onAdd} />
      ) : (
        <h3>No hay Stock disponible</h3>
      )}
    </>
  );
};
