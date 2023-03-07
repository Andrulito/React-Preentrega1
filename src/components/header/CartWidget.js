import cart from "../../img/cart.svg"

const CartWidget = () =>{
    return(
        <div className="containerLength">
            <img src={cart} alt="cart"></img>
            <spam classname="cantCart">
                1
            </spam>
        </div>
    )
}

export default CartWidget;