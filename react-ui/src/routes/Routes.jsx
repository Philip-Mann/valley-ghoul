import { Route } from "react-router-dom";
import About from "./about/About"
import Cart from "./cart/Cart";
import Landing from "./landing/Landing";
import ProductsPage from "./products/ProductsPage";


const Routes = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Landing />}
            />
            <Route
                exact
                path="/products"
                render={() => <ProductsPage />}
            />
            <Route
                exact
                path="/about"
                render={() => <About />}
            />
            <Route
                exact
                path="/cart"
                render={() => <Cart />}
            />
        </>
    )
}

export default Routes;