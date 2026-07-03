import Button from "./Button";

// "Get started for free" banner shown just above the footer.

const CTA = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-[84px] lg:py-16">
        <div className="rounded-2xl border border-[#D0D8F0] bg-gradient-to-b from-[#FBFCFF] to-[#F2F5FC] px-6 py-10 text-center sm:px-8 sm:py-12">
          <h2 className="text-[22px] font-semibold text-gray-900 sm:text-[26px]">
            Get started for free
          </h2>

          <p className="mx-auto mt-3 max-w-[520px] text-sm text-gray-500">
            Play around with Customizer and set up your docs for free. Add your
            team and pay when you&rsquo;re ready.
          </p>

          <Button className="mt-6">Request a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
