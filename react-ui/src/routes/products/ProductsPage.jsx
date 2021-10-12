// Components
import ProductCard from "../../components/productsPage/products/ProductCard";
import SearchBar from "../../components/productsPage/search/SearchBar";
// Redux
import { useGetProductsQuery } from "../../redux/services/productsFetch";
import { productsData } from "../../redux/reducers/products";
import { useSelector } from "react-redux";
// using state to capture form data in SearchBar from this(parent) component
import { useState } from "react";

const ProductsPage = () => {

    // fetching data from db with redux-toolkit
    const fetchData = useSelector(productsData);
    const { data, isLoading } = useGetProductsQuery(fetchData);

    // capturing form data
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQuery = (searchQuery) => {
        setSearchQuery(searchQuery);
    }

    

    return (
        <>
        {isLoading ? <h1>Loading...</h1> : 
            <SearchBar 
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
            />
        }
        {isLoading ? <h1>Loading...</h1> : 
            <ProductCard 
                productsData={data} 
                searchQuery={searchQuery}
            />
        }
        </>
    )
}

export default ProductsPage;