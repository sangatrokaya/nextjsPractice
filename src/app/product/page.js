'use client'
const Product = () => {
    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div>
            <input onChange={handleClick}/>
            <button onClick={handleClick} style={{width:'67px', height:'33px', backgroundColor:'red'}}>Click me</button>
        </div>
    )
}


export default Product


