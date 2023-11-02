import logo from '../images/react.png'
function Nav() {
    return (
        <nav className='nav'>
        <img 
        className='img'
        src = {logo} 
        alt = "photo goes here"
        />
        <h1 className='h1'>ReactFacts</h1>
        <h1 className='h12'>React Course Project-1</h1>
        </nav>

    )
}

export default Nav