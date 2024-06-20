import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>Order fresh produce now!</h1>
            <div className="categories">
            {['VEGETABLES', 'FRUITS', 'MEATS', 'DAIRY', 'BAKERY', 'ALL'].map((category, index) => <Filter key={index} category={category}/>)}
            </div>
        </div>
    )
}

export default AllCategories;