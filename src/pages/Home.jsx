// const Home = () => {
//   return (
//     <main>
//       <h1 className="text-4xl font-bold text-center mt-10">
//         Home Page
//       </h1>
//     </main>
//   );
// };

// export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// These components don't exist yet, so don't import them until you create them.
// import Features from "../components/Features";
// import Integrations from "../components/Integrations";
// import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Add these after creating them */}
      {/* <Features /> */}
      {/* <Integrations /> */}
      {/* <Testimonials /> */}

      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;


