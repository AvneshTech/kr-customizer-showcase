const ProductCard = ({ name, image }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col items-start gap-3">
        <h3 className="text-[15px] font-semibold text-gray-900">{name}</h3>
        <button className="text-xs font-medium text-[#3B5BDB] border border-[#3B5BDB] rounded-full px-4 py-1.5 hover:bg-[#3B5BDB] hover:text-white transition-colors">
          Customize It
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
