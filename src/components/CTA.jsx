import Button from "./Button";

// "Get started for free" banner shown just above the footer.

const CTA = () => {
  return (
    <section className="w-full">
      <div className="container-page section-py">
        <div className="rounded-3xl border border-[#D0D8F0] bg-gradient-to-b from-[#FBFCFF] to-[#F2F5FC] px-6 py-14 text-center shadow-[0_4px_24px_rgba(52,88,196,0.06)] sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-[36px]">
              Get started for free
            </h2>

            <p className="text-base text-gray-500">
              Play around with Customizer and set up your docs for free. Add
              your team and pay when you&rsquo;re ready.
            </p>
          </div>

          <Button className="mt-8">Request a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
