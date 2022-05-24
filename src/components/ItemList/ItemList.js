import React, {useEffect, useState} from "react";
import { productList } from "../../data/Data";
import Item from "../Item/Item";
import { Spinner } from "react-bootstrap";


import '../ItemList/ItemList.css'
import { useParams } from "react-router-dom";

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const {types} = useParams();

    useEffect(() => {
        if (types) {
            const getProducts = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productList.filter((prods) => prods.categoria === types));
                }, 1000);
            }, []);
        
            const getProductsData = async () => {
                try {
                  const result = await getProducts;
                  setProducts(result);
                }
                catch (error) {
                  console.log(error);
                  alert('No podemos mostrar los productos en este momento');
                }
            };

            getProductsData();
        } else {
            const getProducts = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(productList);
                }, 2000);
            }, []);
        
            const getProductsData = async () => {
                try {
                  const result = await getProducts;
                  setProducts(result);
                }
                catch (error) {
                  console.log(error);
                  alert('No podemos mostrar los productos en este momento');
                }
            };
            getProductsData();
        }
    }, [types])


    return (
        <div className="listProducts">
            {products.length ? (
                <div className="onlyProduct">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className='col-sm-4'>
                                <Item
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    stock={product.stock}
                                    id={product.id}
                                />
                            </div>
                            );
                        })
                    }
                </div>
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
        </div>
    );
};

export default ItemList;