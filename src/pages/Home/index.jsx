import "./style.css";
import Trash from "../../assets/icons8-lixeira.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const usersFromApi = await api.get("/user/users");

    setUsers(usersFromApi.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de Usuarios</h1>
          <input placeholder="Nome Completo" type="nome" />
          <input placeholder="CPF" type="cpf" />
          <input placeholder="Idade" type="idade" />
          <input placeholder="Altura" type="altura" />
          <input placeholder="Peso" type="peso" />
          <button>Cadastrar</button>
        </form>
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                CPF: <span>{user.cpf}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Altura: <span>{user.height}</span>
              </p>
              <p>
                Peso: <span>{user.weight}</span>
              </p>
              <p>
                IMC: <span>{user.imc}</span>
              </p>
            </div>
            <div id="trash">
              <button>
                <img src={Trash} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
