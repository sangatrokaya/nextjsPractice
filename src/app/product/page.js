import Link from 'next/link'


const test = () => {
    const app = 'Uber'
    const productList = [
        {id:32, name: 'double fish tt bat', price: 12, quantity: 20, imageLink:'https://icon2.cleanpng.com/20171220/wpq/ping-pong-racket-png-image-5a3ab2aa32aee2.0990068315137962662076.jpg'},
        {id:45, name: 'hawkins cooker', price: 4442, quantity: 2, imageLink:'https://w7.pngwing.com/pngs/308/565/png-transparent-prestige-cooker-pressure-cooker-thumbnail.png'},
        {id:56, name: 'toy car', price: 50, quantity: 10, imageLink:'https://w7.pngwing.com/pngs/425/792/png-transparent-model-car-toy-toys-child-photography-truck-thumbnail.png'}
    ]
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {productList.map((item, id) => {
                    return <Link href={`/product/${item.id}`}><div className="card">
                        <img style={{width:'80px', margin:'10px', height:'100px'}} src={item.imageLink}/>
                        {item.name}
                        <p>{item.price}</p>
                        </div></Link>
                })}

            </div>
            
        </div>
    )
}

export default test


