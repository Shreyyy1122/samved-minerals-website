import Layout from "../components/layout/Layout";

import Hero from "../sections/Hero";
import About from "../sections/About";
import WhyChooseUs from "../sections/WhyChooseUs";
import Stats from "../sections/Stats";
import MiningProcess from "../sections/MiningProcess";
import ProductsHighlight from "../sections/ProductsHighlight";
function Home() {
  return (
    <Layout>
      <Hero />
      <ProductsHighlight />
      <About />
      <WhyChooseUs />
      <Stats />
      <MiningProcess />
    </Layout>
  );
}

export default Home;