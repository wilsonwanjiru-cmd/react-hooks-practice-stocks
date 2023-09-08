import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ sortOption, filterOption }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch the stock data from the API and update 'stocks'
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data.stocks))
      .catch((error) => {
        console.error("Error fetching stock data:", error);
      });
  }, []);

  // Define the sorting and filtering logic here based on 'sortOption' and 'filterOption'

  // Check if 'stocks' is defined before mapping
  if (!stocks) {
    return (
      <div>
        <h2>Stocks</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;




