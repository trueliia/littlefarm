
import { useState } from "react";
import { data } from './data';
import './App.css';
import Produce from "./Produce";
import Buttons from "./Buttons";
import EndOfSaleCountdown from "./Countdown";
import TypingText from "./TypingText";

function Shop() {
  const [produce, setProduce] = useState(data);

  const chosenItems = (searchTerm) => {
    const newItems = data.filter(element => element.searchTerm === searchTerm);
    setProduce(newItems);
  }

  return (
    <div>
        <div className="sale">
          <TypingText className="saleLine" text="Get an additional discount if order before Feb, 25! Sale ends in..." />   
        <EndOfSaleCountdown />
        </div>
      <Buttons filteredItems={chosenItems}/>
      <Produce itemsForSale={ produce }/>
    </div>
  );
}

export default Shop;