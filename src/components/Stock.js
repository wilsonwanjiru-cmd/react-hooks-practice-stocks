import React from "react";

function Stock({ stock }) {
  // You'll need to destructure 'stock' to access its properties
  const { name, ticker, price } = stock;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
          {/* Add a button here to buy the stock (implement this functionality) */}
        </div>
      </div>
    </div>
  );
}

export default Stock;

