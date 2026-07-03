import Button from "./Button";
import heroCollage from "../assets/hero-collage.png";

// Top hero: headline + copy + CTA on the left, product collage image on the right.

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container-page section-py grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px] lg:text-[56px]">
            Explore Your Style From Fashion to Functional Gear
          </h1>

          <p className="mx-auto mt-4 max-w-[480px] text-base leading-relaxed text-gray-500 lg:mx-0">
            Browse the best in Apparel, Accessories, Automotive Essentials,
            Jewelry &amp; Outdoor/Tactical Gear — All in One Place.
          </p>

          <Button className="mt-8">Request a Demo</Button>
        </div>

        {/* Right: product collage */}
        <div className="flex items-center justify-center">
          <img
            src={heroCollage}
            alt="Customizable products collage — bucket hat, jersey, necklace and truck"
            className="h-auto w-full max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
