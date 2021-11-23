import React from 'react'
import NewOrder from './components/Forms/NewOrder'
import Orders from './components/Orders/Orders'

const App = () => {
    return (
        <div>
            <NewOrder />
            <Orders />
            {/* <Total /> */}
            <h3></h3>
        </div>
    )
}

export default App