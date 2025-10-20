import "./style.css";
import Trash from "../../assets/icons8-lixeira.svg";

function Home() {
  const users = [
    {
      id: "1",
      name: "coala",
      cpf: "123.456.456-09",
      age: "23",
      height: "1.79",
      weight: "91",
      imc: "24.0",
    },
    {
      id: "2",
      name: "silva",
      cpf: "123.456.456-09",
      age: "20",
      height: "1.60",
      weight: "90",
      imc: "35.0",
    },
  ];

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
