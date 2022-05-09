import React, {useEffect, useState} from "react";
import { productList } from "../../data/Data";
import Item from "../Item/Item";
import { Spinner } from "react-bootstrap";

import '../ItemList/ItemList.css'

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productList);
        }, 2000);
    });

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

    useEffect(() => {
        getProductsData();
    },);

    return (
        <div className="listProducts">
            {products.length ? (
                <div>
                    {products.map((product) => {
                        return (
                            <div key={product.id} className='ttt'>
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