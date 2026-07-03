import Button from "./Button";
import heroCollage from "../assets/hero-collage.png";

// Top hero: headline + copy + CTA on the left, product collage image on the right.

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:justify-between lg:gap-12 lg:px-[84px] lg:py-16">
        {/* Left: copy */}
        <div className="w-full max-w-[560px] text-center lg:text-left">
          <h1 className="text-[28px] font-bold leading-[1.2] text-gray-900 sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            Explore Your Style From Fashion to Functional Gear
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500 lg:mt-5">
            Browse the best in Apparel, Accessories, Automotive Essentials,
            Jewelry &amp; Outdoor/Tactical Gear — All in One Place.
          </p>

          <Button className="mt-6 lg:mt-8">Request a Demo</Button>
        </div>

        {/* Right: product collage */}
        <div className="w-full max-w-[560px]">
          <img
            src={heroCollage}
            alt="Customizable products collage — bucket hat, jersey, necklace and truck"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
