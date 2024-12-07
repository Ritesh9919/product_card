const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Product Name
          </div>
          <p className="mt-2 text-gray-500">
            This is a short description of the product. It gives a brief
            overview of the product's features and benefits.
          </p>
          <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
