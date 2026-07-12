import Layout from "../components/layout/Layout";
import ProductsSection from "../sections/Products";

function Products() {
  return (
    <Layout>
      <section className="pt-24">
        <ProductsSection />
      </section>
    </Layout>
  );
}

export default Products;