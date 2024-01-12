const Product = () => {

    return (
        <div>
            <input/>
            <Cart chocolate = "KitKat"/>
            <WishList chocolate = "Orange Ball"/>
        </div>
    )
}

const Cart = (props) => {

    return (
        <div>
            <button>Chocolate Name: {props.chocolate}</button>
        </div>
    )
}

const WishList = (props) => {

    return (
        <div>
            WishList
            <Auth chocolate = {props.chocolate}/>
        </div>
    )
}

const Auth = (props) => {

    return (
        <button>Chocolate Name: {props.chocolate}</button>
    )
}

export default Product


