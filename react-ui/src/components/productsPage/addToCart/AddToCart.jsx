import { useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/reducers/addToCart';

const AddToCart = ({ product }) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(updateCart(product));
    }

    return (
        <div className="a2c-btn">
            <button
                className="butt"
                onClick={handleChange}
            >
                Add To Cart
            </button>
        </div>
    )
}

export default AddToCart;