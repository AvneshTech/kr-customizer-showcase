// A single testimonial card. `avatar` is left blank until an image is added.

const TestimonialCard = ({ name, role, quote, avatar }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6">
      <blockquote className="flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EEF1F8] text-sm font-semibold text-[#3458C4]">
          {avatar ? (
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          ) : (
            initials
          )}
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
