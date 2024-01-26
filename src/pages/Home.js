import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { CircularProgress, Skeleton } from "@mui/material";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <CircularProgress color="secondary" variant="indeterminate" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2">
          {data?.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
