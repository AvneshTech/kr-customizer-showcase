import Button from "./Button";

// A single product card: image on top, name + "Customize It" pill below.
// The image area is intentionally left blank (empty light box) until an
// asset is provided through the `image` prop.

const FeatureCard = ({ name, image }) => {
  return (
    <div className="flex flex-col">
      {/* Image placeholder — add product image later */}
      <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain p-6"
          />
        ) : null}
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
