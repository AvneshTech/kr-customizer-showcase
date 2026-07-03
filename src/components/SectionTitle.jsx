// Centered section heading + supporting paragraph used before each product grid.

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-[36px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-500">
          {subtitle}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
