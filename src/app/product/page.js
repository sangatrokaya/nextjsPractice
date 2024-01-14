'use client'
const Product = () => {
    const callMe = ()=> {
        console.log("I am called")
    }
    return (
        <div>
            <input/>
            <Cart chocolate="kitkat" callMe={callMe}/>
        </div>
    )
    }
    const Cart = (props)=>{
    return (
        <div>
            <button onClick={props.callMe}>Click Me</button>
        </div>
    )
}


export default Product


