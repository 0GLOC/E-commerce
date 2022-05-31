import React, {useEffect, useState} from "react";
import Item from "../Item/Item";
import { Spinner } from "react-bootstrap";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


import '../ItemList/ItemList.css'
import { useParams } from "react-router-dom";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const {types} = useParams();

    useEffect(() => {
        if (types) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', types))
            getDocs(queryCollectionFilter)
            .then(resp => setProducts( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) ) )
            .catch((err) => console.log(err))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) ) )
            .catch((err) => console.log(err))
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