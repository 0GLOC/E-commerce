import { useState, useEffect } from "react";
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetail = () => {
    const [detail, setDetail] = useState([]);
    const { detailId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'productos', detailId)
        getDoc(dbQuery)
        .then(resp => setDetail( {id: resp.id, ...resp.data()} ) )
        .catch((err) => console.log(err))
    }, [detailId])

    return (
        <div className="listProductsInfo">
            <div className="SecondProduct">
                <div key={detail.id} className='col-md-4'>
                    <ItemDetailInfo
                        name={detail.name}
                        image={detail.image}
                        price={detail.price}
                        stock={detail.stock}
                        id={detail.id}
                        descripcion={detail.descripcion}
                        desarrollador={detail.desarrollador}
                        categoria={detail.categoria}
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;