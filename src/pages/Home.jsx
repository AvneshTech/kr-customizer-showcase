import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { categories } from "../data/features";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Product category sections */}
      <main>
        {categories.map((category, catIndex) => (
          <section
            key={category.id}
            className={`w-full ${catIndex > 0 ? "border-t border-gray-100" : ""}`}
          >
            <div className="container-page section-py">
              <SectionTitle
                title={category.title}
                subtitle={category.subtitle}
              />

              <div className="mt-8 grid grid-cols-1 items-stretch gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </main>

      <CTA />
      <Footer />
    </>
  );
};

export default Home;
