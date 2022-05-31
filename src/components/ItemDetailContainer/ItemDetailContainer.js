import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    
    return (
        <div>
            {loading ? <Spinner className="spinner" animation="border" role="status"/> : <ItemDetail/>}
        </div>
    )
}

export default ItemDetailContainer;