import PropTypes from "prop-types";

export const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md w-64">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-sm text-yellow-500">
        Rating: {product.rating.rate} / 5 ({product.rating.count})
      </p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
