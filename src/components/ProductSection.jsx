import ProductCard from "./ProductCard";

const ProductSection = ({ title, subtitle, items }) => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <ProductCard key={`${item.name}-${idx}`} name={item.name} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
