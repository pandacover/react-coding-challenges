import Quantity from "../quanity";
import styles from "./product.module.scss";

const Product = ({ name, description, price, image_url, rating }) => {
  return (
    <article className={styles.product}>
      <figure>
        <img
          width="400px"
          height="200px"
          style={{ objectFit: "cover" }}
          loading="lazy"
          src={image_url}
        />
      </figure>
      <section>
        <h3>{name}</h3>
        <details title={description}>
          {description}
          <summary>Description</summary>
        </details>
        <div className={styles.metadata}>
          <strong>${price}</strong>
          <span>{rating} / 5</span>
        </div>
      </section>
      <footer className="quantityContainer">
        <Quantity
          btnText="Add to cart"
          btnTitle="Adding to cart will replace the item amount"
        />
      </footer>
    </article>
  );
};

export default Product;
