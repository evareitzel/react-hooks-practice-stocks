import React from "react";
import Stock from "./Stock";

function PortfolioContainer({isInPortfolio, onUpdatePortfolio}) {

  const renderPortfolioStocks = isInPortfolio.map(stockData => (
  <Stock onUpdatePortfolio={onUpdatePortfolio} stockData={stockData} key={stockData.id} />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
