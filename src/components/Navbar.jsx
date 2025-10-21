import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="">Listar Usuarios</a>
        </li>
        <li>
          <a href="">Registrar Usuarios</a>
        </li>
        <li>
          <a href="">Atualizar Usuario</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
