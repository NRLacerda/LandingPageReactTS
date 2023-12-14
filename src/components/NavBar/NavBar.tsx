import './Style.css'
import logoComTexto from './ORG ICON COM TEXTO (1).png'
import logo from './orgIcon.png'

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
      <nav>
        <div className="navbar">
        <img className="navbar-brand" width={100} height={100} src={logo} alt="" />
          <ul className="navbar-nav">
            <li className="nav-item">HOME</li>
            <li className="nav-item">SOBRE</li>
            <li className="nav-item">CONTATO</li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;
