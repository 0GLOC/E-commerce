import React from "react";
import { Button } from "react-bootstrap";
import '../AddCart/AddCart.css'

const AddCart = () => {
    return(
        <div>
           <div className="d-grid gap-2">
                <Button variant="dark" size="lg">
                    Agregar al Carrito
                </Button>
            </div> 
        </div>
    );
};

export default AddCart;
