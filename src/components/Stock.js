import React from "react";

function Stock({stockData, onUpdatePortfolio}) {
  const {name, price} = stockData

  function handleClick(){
    onUpdatePortfolio(stockData)
  }

  return (
    <div>
      <div className="card">
        <div onClick={handleClick} className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
