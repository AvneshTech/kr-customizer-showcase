import Button from "./Button";

// "Get started for free" banner shown just above the footer.

const CTA = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-[84px] py-16">
        <div className="rounded-2xl border border-[#C7D0F5] bg-gradient-to-b from-[#F5F3FF] to-[#EEF1FF] px-8 py-12 text-center">
          <h2 className="text-[26px] font-semibold text-gray-900">
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
