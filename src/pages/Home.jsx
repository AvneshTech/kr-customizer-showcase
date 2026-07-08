import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroConfigurator from "../components/HeroConfigurator";
import TopFeatures from "../components/TopFeatures";
import FeaturesGrid from "../components/FeaturesGrid";
import ResultsSection from "../components/ResultsSection";
import WhyDifferent from "../components/WhyDifferent";
import HowItWorks from "../components/HowItWorks";
import ProductCatalog from "../components/ProductCatalog";
import CategoriesGrid from "../components/CategoriesGrid";
import Integrations from "../components/Integrations";
import RoiCalculator from "../components/RoiCalculator";
import PricingTiers from "../components/PricingTiers";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Full merged KR Customizer site: every section from Frontend_KDS-main
// plus this project's own real product catalog, combined into one
// coherent one-page flow (light marketing bands alternating with the
// dark interactive/product sections).
const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <HeroConfigurator />
        <TopFeatures />
        <FeaturesGrid />
        <ResultsSection />
        <WhyDifferent />
        <HowItWorks />
        <ProductCatalog />
        <CategoriesGrid />
        <Integrations />
        <RoiCalculator />
        <PricingTiers />
        <Testimonials />
        <FaqSection />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Home;
