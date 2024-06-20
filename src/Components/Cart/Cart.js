import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            <h1>YOUR CART</h1>
            <h2>TOTAL: ${totalPrice}</h2>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
                        
        </div>
    )
}

export default Cart;