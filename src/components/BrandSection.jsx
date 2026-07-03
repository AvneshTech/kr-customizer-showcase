import IntegrationCard from "./IntegrationCard";
import FeatureTitle from "./FeatureTitle";
import { integrations } from "../data/integrations";

// "Works with your stack" section — a responsive grid of integration cards.
// Kept as a ready-to-use block; drop <BrandSection /> into a page to render it.

const BrandSection = () => {
  return (
    <section className="w-full">
      <div className="container-page section-py">
        <FeatureTitle
          eyebrow="Integrations"
          title="Works with the tools you already use"
          subtitle="Connect Customizer to your store, payments and workflow in a few clicks."
          align="center"
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {integrations.map((item) => (
            <IntegrationCard
              key={item.name}
              name={item.name}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
