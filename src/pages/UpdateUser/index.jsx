import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

const UpdateUser = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  async function searchUserCpf(input) {
    const userFromApi = await api.get(`/user/cpf/${input}`);
    console.log(`BUSCANDO CPF: ${input}`);
    setUser(userFromApi.data);
  }

  async function updateUser() {
    const userId = user.userId;
    const userFromApi = await api.patch(`/user/update/${userId}`, user);
    setUser(userFromApi.data);
  }

  const handleEditChange = (e) => {
    const fildName = e.target.name;
    const newValue = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [fildName]: newValue,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchUserCpf(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <>
      <input
        className="input-up"
        type="text"
        value={input}
        placeholder="Pesquisar usurio por CPF"
        onChange={(e) => setInput(e.target.value)}
      />
      <div key={user.userId} className="card-up">
        <h1>Atualizar Usuario</h1>
        <div className="elements">
          <p>Nome</p>
          <input
            type="text"
            value={user.name}
            onChange={handleEditChange}
            name="name"
          />

          <p>CPF</p>
          <input type="text" value={user.cpf} readOnly />

          <p>Idade</p>
          <input
            type="number"
            value={user.age}
            onChange={handleEditChange}
            name="age"
          />

          <p>Altura</p>
          <input
            type="number"
            value={user.height}
            name="height"
            onChange={handleEditChange}
          />

          <p> Peso</p>
          <input
            type="number"
            value={user.weight}
            name="weight"
            onChange={handleEditChange}
          />

          <p>IMC</p>
          <input type="text" value={user.imc} readOnly />
          <button onClick={updateUser}>Atualizar</button>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
