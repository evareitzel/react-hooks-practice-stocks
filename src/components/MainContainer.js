import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [isInPortfolio, setIsInPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  const API = 'http://localhost:3001/stocks'

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setStocks)
    }, [])

  function handleUpdate(stock){
    setIsInPortfolio([...isInPortfolio, stock])
  }

  function handleRemove(removeStock){
    const updated = isInPortfolio.filter(stock => stock.id !== removeStock.id)
    setIsInPortfolio(updated)
  }

  const sorted = [...stocks].sort((stock1, stock2) => {
    if(sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    }else{
      return stock1.price - stock2.price
    }
  })

  const filtered = sorted.filter(
    stock => stock.type === filterBy
  )

  return (
    <div>
      <SearchBar 
        sortBy={sortBy} 
        onChangeSort={setSortBy} 
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filtered} onUpdatePortfolio={handleUpdate}/>
        </div>
        <div className="col-4">
          <PortfolioContainer isInPortfolio={isInPortfolio} onUpdatePortfolio={handleRemove}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
