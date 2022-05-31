import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <section>
            {loading ? <Spinner className="spinner" animation="border" role="status"/> : <ItemList/>}
        </section>
    )
}

export default ItemListContainer