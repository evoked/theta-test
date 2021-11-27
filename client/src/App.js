import React, {useReducer} from 'react'
import NewOrder from './components/Forms/NewOrder'
import Orders from './components/Orders/Orders'

const App = () => {
    return (
        <div>
            
            <NewOrder />
            <Orders />
            {/* TODO: Implement useReducer to calculate total order value from state, or just use Mysql because that's too expensive to hold in state -\o/- */}
            {/* <Total /> */}
            <h3></h3>
        </div>
    )
}

export default App