import { useState } from 'react';

const useShowComponent = () => {
    let [show, setShow] = useState(false)
    const toggle = () => setShow(!show)
    return {show, toggle};
}

export default useShowComponent;