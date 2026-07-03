// A left-aligned section title variant (heading + optional eyebrow + subtitle).
// Useful for sections that aren't centered like the main product grids.

const FeatureTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-[640px] ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-[#3458C4]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-[22px] font-bold text-gray-900 sm:text-[26px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default FeatureTitle;
