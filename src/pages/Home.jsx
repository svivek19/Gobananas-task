import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar";
import Card from "../Component/Card";
import ScrollToTopButton from "../Component/ScrollToTopButton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  console.log(products);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-28">
      <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid md:grid-cols-3 mt-5 md:mt-10 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center md:text-end text-gray-600 font-semibold text-2xl mt-10">
            No Products Found
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
