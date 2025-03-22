import { useCallback, useMemo } from "react";

import Quantity from "../../components/quanity";

import styles from "./cart.module.scss";

const _noop = () => { }

// NOTE: You can modify { items, handleUpdateItems, handleCheckout } source if needed
const Cart = ({ items = [], handleUpdateItems = _noop, handleCheckout = _noop }) => {
  const isCheckoutDisabled = items.length === 0;

  const renderItems = useCallback(({ id, name, price, quantity }) => {
    const totalAmount = price * quantity;

    return (
      <li key={id} className={styles.item}>
        <header className={styles.item__header}>
          <h3>{name}</h3>
          <strong>${totalAmount}</strong>
        </header>
        <div className="quantityContainer">
          <Quantity
            handleChangeQuantity={handleUpdateItems(id)}
            quantity={quantity}
            btnText="Update item quantity"
            btnTitle="Adding item will replace quantity"
          />
        </div>
      </li>
    );
  }, [items, handleUpdateItems]);

  return (
    <section className={styles.cart}>
      <header className={styles.header}>
        <h1>Cart</h1>
        <button onClick={handleCheckout} disabled={isCheckoutDisabled}>Checkout</button>
      </header>
      <ul>{items.map(renderItems)}</ul>
    </section>

  );
};

export default Cart;
