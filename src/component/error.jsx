import PropTypes from "prop-types";

export const ErrorPage = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <p className="text-gray-500">
          Please try refreshing the page or come back later.
        </p>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired,
};
