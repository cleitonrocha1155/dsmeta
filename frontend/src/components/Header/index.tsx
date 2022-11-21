import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>SpecTech</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.spectech.com.br"> spectech.com.br</a>
                </p>
            </div>
        </header>
    )
}

export default Header
