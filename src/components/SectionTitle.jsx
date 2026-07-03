// Centered section heading + supporting paragraph used before each product grid.

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-[720px] px-2 text-center">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-[36px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
