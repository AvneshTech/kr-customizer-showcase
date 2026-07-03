import Button from "./Button";

// A single product card: image on top, name + "Customize It" pill below.
// When `image` is empty the image area stays a clean light placeholder.

const FeatureCard = ({ name, image }) => {
  return (
    <div className="flex flex-col">
      {/* Product image */}
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="h-full w-full rounded-md bg-[#F0F4F5]" />
        )}
      </div>

      {/* Meta */}
      <h3 className="mt-3 text-[15px] font-medium text-gray-900">{name}</h3>

      <Button variant="pill" className="mt-2 w-fit">
        Customize It
      </Button>
    </div>
  );
};

export default FeatureCard;
