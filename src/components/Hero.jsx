import Button from "./Button";
import heroCollage from "../assets/hero-collage.png";

// Top hero: headline + copy + CTA on the left, product collage image on the right.

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container-page grid min-h-[480px] grid-cols-1 items-center gap-10 py-16 lg:min-h-[600px] lg:grid-cols-2 lg:gap-12 lg:py-24">
        {/* Left: copy */}
        <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">
          <h1 className="text-[32px] font-bold leading-[1.15] text-gray-900 sm:text-[40px] lg:text-[56px]">
            Explore Your Style From Fashion to Functional Gear
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-500">
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
            className="h-auto w-full max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
