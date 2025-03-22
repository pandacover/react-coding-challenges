const Quantity = ({ quantity, handleChangeQuantity, btnText, btnTitle }) => {
  return (
    <>
      <input type="number" defaultValue={0} min={0} max={5} />
      <button className="addToCart" title={btnTitle}>{btnText}</button>
    </>
  );
};

export default Quantity;
