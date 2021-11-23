import React, { useState } from 'react'
import useShowComponent from '../util/useShowComponent'

const Orders = () => {
    let toggle = useShowComponent()

    // TODO: setup useEffect or refactor as class component to handle GET results
    return ( 
        toggle.show ? 
        <div>
            <h2>Customer orders <button onClick={toggle.toggle}>X</button></h2>
            <p>orders</p>
        </div> :
        <div>
            <button onClick={toggle.toggle}>Show orders</button>
        </div>
     );
}

export default Orders;