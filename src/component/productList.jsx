import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import { SkeletonLoader } from "./skeleton";
import { ErrorPage } from "./error";

export const ProductList = () => {
  const { filteredProducts, loading, filterByCategory, searchProducts, error } =
    useProducts();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header onSearch={searchProducts} onFilter={filterByCategory} />

      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <ErrorPage message={error} />
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-4 lg:mt-16 sm:mt-8 md:mt-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 gap-2 ">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="bg-[#00DEE2] text-white py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              className="bg-[#00DEE2] text-white py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
