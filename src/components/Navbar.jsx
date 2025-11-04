import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/users">Listar Usuarios</Link>
        </li>
        <li>
          <Link to="/">Registrar Usuarios</Link>
        </li>
        <li>
          <Link to="/update">Atualizar Usuario</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
