import React, { useEffect, useState } from "react";

const UseLocalStorage = (key, initial) => {

    const [state, setState] = useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : initial
    })

    useEffect(() => {
        window.localStorage.setItem(key, initial)

    }, [initial, key])
    return [state, setState]
}

export default UseLocalStorage;