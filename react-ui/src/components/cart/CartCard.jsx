import './cart.css';
import { connect } from 'react-redux';
// import RemoveFromCart from './removeFromCart/RemoveFromCart';

const CartCard = ({ cart }) => {

    console.log(cart);
    return (
        <>
        <div className="product-container">
        {cart.cartItems < 1 ? '' : <h1>Number of Items: {cart.cartItems.length}</h1>}
            {cart.cartItems.map(item => 
            <div className="product" id="product-button" key={item.id}>
                <div className="product-img">
                    <img src={item.product_image} alt={item.product_description} />  
                </div>
                <div className="product-information">
                    <p>{item.product_description}</p>
                    <p>${item.product_price}</p>
                </div>
                {/* <RemoveFromCart item={item}/> */}
            </div>
            )}
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartCard);