import Button from "./Button";

// A single product card: image on top, name + "Customize It" pill below.
// When `image` is empty the image area stays a clean light placeholder.

const FeatureCard = ({ name, image }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Product image — light gray zone, image always centered on both
          axes regardless of the source photo's own aspect ratio. */}
      <div className="flex h-[250px] w-full items-center justify-center bg-[#FAFAFA]">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="max-h-[180px] max-w-[90%] object-contain"
          />
        ) : (
          <div className="h-[180px] w-[90%] rounded-md bg-[#E4E9EC]" />
        )}
      </div>

      {/* Meta — min-h keeps the "Customize It" pill aligned across a row
          even when a neighboring title wraps onto a second line. */}
      <div className="flex flex-1 flex-col items-start gap-4 p-6">
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-snug text-gray-900">
          {name}
        </h3>

        <Button variant="pill" className="mt-auto w-fit">
          Customize It
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;
