import { useCallback } from "react";

import Product from "../../components/product";

import MOCK_PRODUCTS from "../../constants/mock-products";

import styles from "./products.module.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const renderProduct = useCallback(
    (product, id) => (
      <li key={id} className={styles.productItem}>
        <Product {...product} />
      </li>
    ),
    [],
  );

  return (
    <section>
      <header className={styles.header}>
        <h1>Products</h1>
        <Link to="/cart">
          🛒 Goto Cart
        </Link>
      </header>
      <ul className={styles.products}>{MOCK_PRODUCTS.map(renderProduct)}</ul>
    </section>
  );
};

export default Products;
