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
            <div className="mx-auto max-w-[1440px] px-[84px] py-14">
              <SectionTitle
                title={category.title}
                subtitle={category.subtitle}
              />

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
