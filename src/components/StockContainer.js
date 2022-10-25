import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onUpdatePortfolio}) {

  const renderStocks = stocks.map(stockData => <Stock stockData={stockData} onUpdatePortfolio={onUpdatePortfolio} key={stockData.id} />)
  
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
