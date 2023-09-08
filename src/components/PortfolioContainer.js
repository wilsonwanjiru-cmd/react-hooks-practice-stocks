import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {/* Check if portfolio is defined before mapping */}
      {portfolio && portfolio.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          onSellStock={onSellStock}
          // Add functionality to sell the stock (implement onSellStock)
          // Example: <button onClick={() => onSellStock(stock)}>Sell</button>
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;


