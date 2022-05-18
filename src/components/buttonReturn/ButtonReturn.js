import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";

import './ButtonReturn.css'

const ButtonReturn = () => {
    return(
        <div className="SmallButtonContainer">
        <Link to='/cart'>
            <Button variant="dark" size="sm" className="SmallButton" onClick={() => console.log('ir al cart')}>Ir al carrito</Button>
        </Link>
        <Link to='/'>
            <Button variant="dark" size="sm" className="SmallButton" onClick={() => console.log('ir al home')}>Seguir comprando</Button>
        </Link>
        </div>
    )
}

export default ButtonReturn;