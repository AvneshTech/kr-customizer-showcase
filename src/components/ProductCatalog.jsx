import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { categories } from "../data/features";

// Our own real product catalog (jewelry, fashion, weapons, print-on-demand,
// automotive) — kept from the original "New folder" build and given its own
// section here so nothing from the original site is lost while merging in
// the Frontend_KDS-main marketing sections.
const ProductCatalog = () => {
  return (
    <section id="catalog" className="w-full bg-white">
      <div className="container-page section-py">
        <SectionTitle
          title="Explore Our Product Catalog"
          subtitle="Real, ready-to-customize products across every category we support — see exactly what shoppers can personalize."
        />
      </div>

      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          className={`w-full ${catIndex > 0 ? "border-t border-gray-100" : ""}`}
        >
          <div className="container-page section-py !py-14">
            <SectionTitle
              title={category.title}
              subtitle={category.subtitle}
            />

            <div className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <FeatureCard
                  key={`${category.id}-${index}`}
                  name={item.name}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default ProductCatalog;
