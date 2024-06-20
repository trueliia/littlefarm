
import './App.css';
import EndOfSaleCountdown from "./Countdown";
import TypingText from "./TypingText";

import AllCategories from './Components/Filter/AllCategories';
import Products from './Components/ProductsComponents/Products';

function Shop() {
  

  return (
    <div>
        <div className="sale">
          <TypingText className="saleLine" text="Get an additional discount if order before Jul, 10th! Sale ends in..." />   
        <EndOfSaleCountdown />
        
        </div>
        <div className="block">
        <AllCategories/>
        </div>
        <div className="block">
        
        <Products/>
        
        </div>
    </div>
  );
}

export default Shop;