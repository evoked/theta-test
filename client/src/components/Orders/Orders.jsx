import React, { useState } from 'react'

const Orders = () => {
    let [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    // TODO: setup useEffect or refactor as class component to handle GET results
    return ( 
        show ? 
        <div>
            <h2>Customer orders <button onClick={toggle}>X</button></h2>
            <p>orders</p>
        </div> :
        <div>
            <button onClick={toggle}>Show orders</button>
        </div>
     );
}

export default Orders ;