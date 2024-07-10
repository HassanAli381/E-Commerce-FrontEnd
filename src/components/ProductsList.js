import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
    const endpoint_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(endpoint_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        fetch(`${endpoint_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }


    const getProductsInCategory = (catName) => {
        console.log(catName);
        fetch(`${endpoint_url}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center">
                    <button className="btn btn-info mx-2 mb-4" onClick={() => getProducts()}>All</button>
                    {
                        categories.map((cat) => {
                            return <button key={cat} className="btn btn-info mx-2 mb-4" onClick={() => getProductsInCategory(cat)}>{cat}</button>
                        })
                    }
                </div>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-3" key={product.id}>
                                    <Product product={product} />
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default ProductsList;