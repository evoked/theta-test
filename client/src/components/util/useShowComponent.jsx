import { useState } from 'react';

const ShowComponent = () => {
    let [show, setShow] = useState(false)
    const toggle = () => setShow(!show)
    return {show, toggle};
}

export default ShowComponent;