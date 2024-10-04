import { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/logoTest.svg";

export const Header = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 max-w-6xl mx-auto bg-white drop-shadow-lg p-4 rounded-md">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-28 h-auto" />
        <h3 className="text-2xl font-bold">Cari Product</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search Item"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-lg py-2 px-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men Clothing</option>
          <option value="women's clothing">Women Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};
