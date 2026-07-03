// Centered section heading + supporting paragraph used before each product grid.

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <h2 className="text-[26px] font-semibold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
