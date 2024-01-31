
function Buttons({filteredItems}){
    return(<div className="cont">
        <button className="change" onClick={() => filteredItems("vegetables")}>Vegetables</button>
        <button className="change" onClick={() => filteredItems("fruits")}>Fruits</button>
        <button className="change" onClick={() => filteredItems("meats")}>Meats</button>
        <button className="change"onClick={() => filteredItems("bakery")}>Bakery</button>
        <button className="change" onClick={() => filteredItems("desserts")}>Desserts</button>
        <button className="change" onClick={() => filteredItems("dairy")}>Dairy</button>
    </div>)
}

export default Buttons