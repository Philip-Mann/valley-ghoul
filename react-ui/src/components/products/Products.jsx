import './products.css';
import { useGetProductsQuery } from '../../redux/services/productsFetch';
import { productsData } from '../../redux/reducers/products';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
    const fetchData = useSelector(productsData);
    const { data, isLoading } = useGetProductsQuery(fetchData)

    return (
        <div className="product-container">
            {isLoading ? <h1>Loading...</h1> : data?.map(product => 
            
                <div className="product-card">
                    <div className="product-img">
                        <img src={product.product_image} alt={product.product_name} />
                    </div>
                    <div className="product-button">
                        <Link
                            id="product-button"
                            to={`/products/${product.product_id}`}
                        >
                            {product.product_name}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;