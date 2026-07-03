import Button from "./Button";

// NOTE: not currently used by any page — Home.jsx renders FeatureCard instead.
// Kept in sync with FeatureCard's structure in case this variant gets wired in.

const ProductCard = ({ name, image }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex aspect-square w-full items-center justify-center bg-gray-50 p-6">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <h3 className="text-[15px] font-semibold text-gray-900">{name}</h3>
        <Button variant="pill" className="mt-auto px-5 text-sm">
          Customize It
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
