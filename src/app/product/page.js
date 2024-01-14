'use client'
import { useState } from "react"
// functional components are statless component
const Cart = () => {
    const [num, setNum] = useState(10)
    const addSum = () => {
        // num = num + 1  --> states cannot be changed
        setNum(num + 1)
    }
    return (
        <div>
            {num}
            <button onClick={addSum}>Increment</button>
        </div>
    )
}


export default Cart


