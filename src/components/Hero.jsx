import Button from "./Button";

// Top hero: headline + copy + CTA on the left, product collage on the right.
// The collage image is left blank (light box) until the asset is added.

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

        {/* Right: image collage placeholder */}
        <div className="w-full max-w-[560px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#ECF0F4] to-[#EEF1F8]">
            {/* Floating editor toolbar */}
            <div className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-3 rounded-lg bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-3.5 w-3.5 rounded-sm border border-gray-300" />
              <span className="h-3.5 w-3.5 rounded-full border border-gray-300" />
              <span className="h-3.5 w-3.5 rounded-sm border border-gray-300" />
              <span className="text-gray-400">···</span>
            </div>

            {/* Colored control dots */}
            <div className="absolute left-6 top-1/2 flex -translate-y-1/2 flex-col gap-3">
              <span className="h-3 w-3 rounded-full bg-[#F87171]" />
              <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
              <span className="h-3 w-3 rounded-full bg-[#3B82F6]" />
            </div>

            {/* Product image goes here later */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
