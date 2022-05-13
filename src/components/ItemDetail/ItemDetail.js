import { productList } from "../../data/Data";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";
import { useParams } from "react-router-dom";


const ItemDetail = () => {
    const [detail, setDetail] = useState([]);

    const { detailId } = useParams()

    const getDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productList);
        }, 2000);
    }, []);

    const getDetailData = async () => {
        try {
          const result = await getDetail;
          setDetail(result);
        }
        catch (error) {
          console.log(error);
          alert('No podemos mostrar los productos en este momento');
        }
    };

    useEffect(() => {
        getDetailData();
    });

    const singular = detail.find (datos => datos.id.toString() === detailId.toString());

    return (
        <div className="listProductsInfo">
        {detail.length ? (
            <div className="SecondProduct">
                {detail.reduce((det) => {
                    return (
                        <div key={det.id} className='col-md-4'>
                            <ItemDetailInfo
                                name={singular.name}
                                image={singular.image}
                                price={singular.price}
                                stock={singular.stock}
                                id={singular.id}
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

export default ItemDetail;