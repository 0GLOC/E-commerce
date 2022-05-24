import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    
    return (
        <div>
            {loading ? <Spinner animation="border" role="status"/> : <ItemDetail/>}
        </div>
    )
}

export default ItemDetailContainer;