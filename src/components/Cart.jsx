import React, { useContext, useState} from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container } from 'react-bootstrap';

 const clearValues = {name: "", phone: "", email: ""}

function Cart() {
  const [values, setValues] = useState();
 const { clear, items } = useContext(CartContext);

  const handleSendOrder = () => {
     const order = {
       buyer: {
         name: "Avantt",
         phone: 33333,
         email: "fweewefff",
       },
       items,
       total: 13600,
     };
 };

const handleChange = (ev) => {
    console.log(ev.target.value)
};

 return (
    <Container>

        <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', width: '1000px', margin: '0 auto'}}>
        {items.map(item => (
            <><div class="cart-item" key={item.id} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid black', marginTop: '30px', marginBottom: '30px', padding: '20px' }}>
                <div style={{ flexBasis: '33.33%', height: '350px' }}>
                    <img src={item.pictureUrl} style={{ maxWidth: '350px', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div style={{ flexBasis: '66.66%', height: '350px' }}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
            </div>
                <form>
                    <div className='input-group'>
                        <label>Name</label>
                        <input type="text" value={values.name} onChange={handleChange} />
                    </div>
                    <div className='input-group'>
                        <label>Phone</label>
                        <input type="text" value={values.phone} onChange={handleChange} />
                    </div>
                    <div className='input-group'>
                        <label>E-Mail</label>
                        <input type="email" value={values.email} onChange={handleChange} />
                    </div>
                </form>
                <button onClick={handleSendOrder}>Buy Cart</button>
                </>
        ))}
        </div>

    </Container>
     );
}

export default Cart;
