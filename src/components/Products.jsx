import Product from "./Product";
import { products } from "../data/produtcs";

export default function Products() {
  return (
    <main>
      <div className="container">
        <section className="products-section">
          <h1 className="section-title">Our Products</h1>
          <div className="products-grid" id="productsGrid">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
