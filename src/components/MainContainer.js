import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState(null);
  const [portfolio, setPortfolio] = useState([]); // Define your portfolio state here

  // Function to handle selling a stock
  const onSellStock = (stockToSell) => {
    // Implement logic to remove the sold stock from the portfolio
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== stockToSell.id);
    setPortfolio(updatedPortfolio);
  };

  return (
    <div>
      <SearchBar
        onSortChange={(option) => setSortOption(option)}
        onFilterChange={(option) => setFilterOption(option)}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer sortOption={sortOption} filterOption={filterOption} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStock={onSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;



