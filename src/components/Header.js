import logo from '../img/logo.png'

const Header = () => {
    return (
        <header>
            <img className='Logo' src={logo} alt='logo'></img>
            <p className='Title'>Memory Game</p>
        </header>
    )
}

export default Header