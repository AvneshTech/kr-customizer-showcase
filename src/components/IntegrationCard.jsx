// A single integration card. `icon` is left blank until a logo asset is added.

const IntegrationCard = ({ name, description, icon }) => {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
      {/* Logo placeholder */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F0F4F5]">
        {icon ? (
          <img src={icon} alt={name} className="h-6 w-6 object-contain" />
        ) : null}
      </span>

      <div>
        <h3 className="text-[15px] font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntegrationCard;
