import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './Formulario.css'
import swal from 'sweetalert';

const Formulario = () => {

    const { cartList, precioTotal, clear } = useCartContext()
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function generarOrden() {
        
        let orden = {}

        orden.buyer = {name: name, apellidos: apellidos, email: email, phone: phone}
        orden.total = precioTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.count
            const cantidad = cartItem.count

            return {id, nombre, precio, cantidad}
        })

        const db = getFirestore()

        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => clear())

        const queryCollectionStock = collection(db, 'productos')
        const queryActualizarStock = query(
            queryCollectionStock,
            where( documentId() , 'in', cartList.map(it => it.id) )
        )

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).count
        })))
        batch.commit()

        swal({
            title: 'Compra realizada con exito!',
            icon: "success"
        })
    }

    
    return(
        <div className="form-register">
            <h4>Formulario de compra</h4>
            <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" autoComplete='off' onChange={ev => setName(ev.target.value)}/>
            <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" autoComplete='off' onChange={ev => setApellidos(ev.target.value)}/>
            <input className="controls" type="email" name="correo" id="email" placeholder="Ingrese su Correo" autoComplete='off' onChange={ev => setEmail(ev.target.value)}/>
            <input className="controls" type="number" name="correo" id="phone" placeholder="Ingrese su Número Telefonico" autoComplete='off' onChange={ev => setPhone(ev.target.value)}/>
            {cartList.length === 0 ? null : <Button variant="light" size="lg" onClick={generarOrden}>Comprar</Button>}
            {cartList.length === 0 ? <Link to='/'><Button variant="info" className='regresar' size="lg">Regresar</Button></Link> : <Link to='/cart'><Button variant="info" className='regresar' size="lg">Regresar</Button></Link>}
        </div>
    );
};


export default Formulario;