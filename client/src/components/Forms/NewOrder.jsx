import React, {useState} from 'react';

const NewOrder = () => {
    const [form, setForm] = useState({name: "", product: "", amount: 1})
    // TODO: set response of POST
    // const [response, setResponse] = useState({})
    let [show, setShow] = useState(false)
    
    const handleInput = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    } 

    const serviceAddOrder = (e) => {
        if(form.name.length < 1 || form.product.name < 1) return
        e.preventDefault()
        console.log(form)
        // TODO: handle create order
    }

    const increment = () => {
        if(form.amount >= 10) return
        setForm({...form, amount: form.amount + 1})
    }

    const decrement = () => {
        if(form.amount <= 1) return
        setForm({...form, amount: form.amount - 1})
    }

    const toggle = () => {
        setShow(!show)
    }

    return(
        show ?
        <div>
            <h2 className="header">Add an order <button onClick={toggle}>X</button></h2>
            <form className="order-add">
                <input placeholder="name to add order to" type="text" name="name" onInput={handleInput} />
                <input placeholder="enter a product" type="text" name="product" onInput={handleInput} />
                <label>
                </label>
            </form>
            <p>amount: {form.amount} <button onClick={increment}>+</button><button onClick={decrement}>-</button></p>
            <button onClick={serviceAddOrder}>submit order</button>
        </div> :
        <div>
            <button onClick={toggle}>Add new order</button>
        </div>
        )
}

export default NewOrder