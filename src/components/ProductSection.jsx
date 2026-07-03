import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

// NOTE: not currently used by any page — Home.jsx builds category sections
// inline with SectionTitle + FeatureCard instead. Kept in sync with that
// same container-page / section-py layout system in case this gets wired in.

const ProductSection = ({ title, subtitle, items }) => {
  return (
    <section className="container-page section-py">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <ProductCard key={`${item.name}-${idx}`} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
