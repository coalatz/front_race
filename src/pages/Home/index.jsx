import "./style.css";
import Trash from "../../assets/icons8-lixeira.svg";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputCpf = useRef();
  const inputAge = useRef();
  const inputHeight = useRef();
  const inputWeight = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/user/users");
    console.log(usersFromApi.data);
    setUsers(usersFromApi.data);
  }

  async function postUsers() {
    await api.post("/user/register", {
      name: inputName.current.value,
      cpf: inputCpf.current.value,
      age: inputAge.current.value,
      height: inputHeight.current.value,
      weight: inputWeight.current.value,
    });
  }

  async function deleteUsers(id) {
    await api.delete(`/user/delete/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de Usuarios</h1>
          <input placeholder="Nome Completo" type="nome" ref={inputName} />
          <input placeholder="CPF" type="cpf" ref={inputCpf} />
          <input placeholder="Idade" type="idade" ref={inputAge} />
          <input placeholder="Altura" type="altura" ref={inputHeight} />
          <input placeholder="Peso" type="peso" ref={inputWeight} />
          <button onClick={postUsers}>Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default Home;
