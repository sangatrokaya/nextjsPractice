const test = () => {
    const app = 'Uber'
    const navItems = ['Home', 'About', 'Contact us', 'Carrer', 'Blogs', 'Newsletter']
    return (
        <div>
            <div style={{display:'flex'}}>
            {navItems.map((item, id) => {
                return <div className="card">{item}</div>
            })}
            
            </div>
            {app}
            <br />
            <h2>Welcome to the login section</h2>
            <input placeholder="Enter username" />
            <br />
            <input placeholder="Enter password" type="password" />
            <br />
            <button>Submit</button>
        </div>
    )
}

export default test