import React, { useEffect, useState } from "react";
import CategorySelection from "../components/atoms/CategorySelection";
import ProductContainer from "../components/molecules/ProductContainer";
import Navbar from "../components/atoms/Navbar";
import Header from "../components/molecules/Header";
import { useMainContext } from "../context/MainContext";
import { useParams } from "react-router-dom";

const FindProduct = () => {
  const { setActiveCategory, searchQuery } = useMainContext();
  const [filteredProducts, setFilteredProducts] = useState();
  const { cat } = useParams();

  const productFromLS = sessionStorage.getItem("productData");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productFromLS) {
      let categoryEdited = "";

      switch (cat) {
        case "ikan-segar":
          categoryEdited = "Ikan Segar";
          setActiveCategory("Ikan Segar");
          break;
        case "olahan-ikan":
          categoryEdited = "Olahan Ikan";
          setActiveCategory("Olahan Ikan");
          break;
        case "rumput-laut":
          categoryEdited = "Rumput Laut";
          setActiveCategory("Rumput Laut");
          break;
        case "kopi":
          categoryEdited = "Kopi";
          setActiveCategory("Kopi");
          break;
        case "kriya":
          categoryEdited = "Kriya";
          setActiveCategory("Kriya");
          break;
        case "desa-wisata":
          categoryEdited = "Desa Wisata";
          setActiveCategory("Desa Wisata");
          break;
        case "agrikultur":
          categoryEdited = "Agrikultur";
          setActiveCategory("Agrikultur");
          break;

        default:
          break;
      }

      const parsed = JSON.parse(productFromLS);
      const filteredCategory = parsed.filter(
        (product) => product.category === categoryEdited
      );
      const matchesSearch = filteredCategory?.filter((product) => {
        const matched = product.name
          .toLowerCase()
          .includes(searchQuery?.toLowerCase());

        if (searchQuery) {
          return matched;
        } else {
          return product;
        }
      });

      setFilteredProducts(matchesSearch);
    }
  }, [cat, searchQuery]);

  return (
    <div className="overflow-x-hidden">
      <div className="mx-5">
        <div className="-mx-5">
          <Header />
        </div>
        <div className="mt-5">
          <CategorySelection selected />
        </div>
        <div className="mt-5">
          <ProductContainer productData={filteredProducts} />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default FindProduct;
