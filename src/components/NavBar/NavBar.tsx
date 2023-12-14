//import styles from './Style.css'

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
      <nav>
        <div className="navbar">
          <div className="navbar-brand">{title}</div>
          <ul className="navbar-nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;
