import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './ProductDetails.css'

function ProductDetails() {
    const params = useParams();
    // console.log('params', params);
    const url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${url}/${params.productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, []);

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" src={product.image} width="250" alt={product.title} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <Link className="ml-1" to={"/"}>Back</Link>
                                            </div>
                                        </div>

                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.category}</span>
                                            <h5 className="text-uppercase">{product.title}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price">${product.price}</span>
                                            </div>
                                        </div>
                                        <p className="about">{product.description}</p>
                                        <div className="cart mt-4 align-items-center">
                                            <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;