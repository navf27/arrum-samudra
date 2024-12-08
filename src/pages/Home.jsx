import React, { useEffect } from "react";
import Header from "../components/molecules/Header";
import BannerGradient from "../components/atoms/BannerGradient";
import GetingCloserToArrum from "../components/atoms/GetingCloserToArrum";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductTypeSelection from "../components/atoms/ProductTypeSelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import { useMainContext } from "../context/MainContext";
import productJson from "../data/products.json";
import newsJson from "../data/news.json";

const Home = () => {
  const {
    setDataToState,
    setFilteredProducts,
    products,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  } = useMainContext();

  useEffect(() => {
    setActiveCategory("");
    setSearchQuery(null);
    localStorage.setItem("productData", JSON.stringify(productJson));
  }, []);
  useEffect(() => {
    setActiveCategory("");
    setSearchQuery(null);
    localStorage.setItem("newsData", JSON.stringify(newsJson));
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("productData");
    if (savedData) {
      setDataToState(JSON.parse(savedData));
      setFilteredProducts(JSON.parse(savedData));
    }
  }, []);

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery?.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <Navbar />
      <Header />
      <div className={`${searchQuery ? "hidden" : null}`}>
        <div className="mx-5">
          <BannerGradient />
          <GetingCloserToArrum />
          <CategorySelection category />
          {/* <ProductTypeSelection /> */}
          <div className="mt-5">
            <ProductContainer
              showCategory
              productData={products?.slice(0, 6)}
            />
          </div>
        </div>
      </div>
      {searchQuery && (
        <div className="mt-8">
          <ProductContainer showCategory productData={filteredProducts} />
        </div>
      )}
    </>
  );
};

export default Home;
