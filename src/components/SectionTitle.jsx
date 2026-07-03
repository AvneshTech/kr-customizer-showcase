// Centered section heading + supporting paragraph used before each product grid.
// Wrapped in one shared max-w-3xl container so every section heading in the
// app has identical width, alignment, and heading-to-paragraph spacing.

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-[36px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
