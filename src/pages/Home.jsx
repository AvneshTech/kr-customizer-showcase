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
        {categories.map((category) => (
          <section key={category.id} className="w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-[84px] lg:py-14">
              <SectionTitle
                title={category.title}
                subtitle={category.subtitle}
              />

              <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-10 lg:grid-cols-3">
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
