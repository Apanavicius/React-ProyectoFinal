import ItemCounter from "../../ItemCounter";

export const ProductDetail = ({ productSelected }) => {
  const { title, author, description, image, price, stock } = productSelected;
  console.log("Ingresé a productDetail");
  console.log("Stock dentro del ProductDetail:", stock);

  const onAdd = (aNumber) => {
    let data = {
      ...productSelected,
      quantity: aNumber,
    };
    console.log("stock del ProductDetail:", stock);
    console.log("DATA:", data);
  };

  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
      <div>{description}</div>
      <img src={image} alt="portadaLibro" />
      <div>${price}</div>
      <div>Stock: #{stock}</div>
      <ItemCounter initial={1} upperBound={stock} onAdd={onAdd} />
    </>
  );
};
