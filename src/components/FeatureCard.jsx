import Button from "./Button";

// A single product card: image on top, name + "Customize It" pill below.
// When `image` is empty the image area stays a clean light placeholder.

const FeatureCard = ({ name, image }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Product image — light gray zone, image always centered on both
          axes regardless of the source photo's own aspect ratio. */}
      <div className="flex aspect-square w-full items-center justify-center border-b border-gray-100 bg-[#F0F4F5] p-4">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="mx-auto my-auto block max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="h-full w-full rounded-md bg-[#E4E9EC]" />
        )}
      </div>

      {/* Meta — min-h keeps the "Customize It" pill aligned across a row
          even when a neighboring title wraps onto a second line. */}
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <h3 className="min-h-[28px] text-lg font-semibold leading-snug text-gray-900">
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
