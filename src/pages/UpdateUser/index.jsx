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
      <div key={user.userId} className="card">
        <div>
          <input
            type="text"
            value={input}
            placeholder="CPF"
            onChange={(e) => setInput(e.target.value)}
          />

          <label>Nome:</label>
          <input
            type="text"
            value={user.name}
            onChange={handleEditChange}
            name="name"
          />

          <label>CPF:</label>
          <input type="text" value={user.cpf} />

          <label>Idade:</label>
          <input
            type="number"
            value={user.age}
            onChange={handleEditChange}
            name="age"
          />

          <label>Altura:</label>
          <input
            type="text"
            value={user.height}
            name="height"
            onChange={handleEditChange}
          />

          <label> Peso:</label>
          <input
            type="text"
            value={user.weight}
            name="weight"
            onChange={handleEditChange}
          />

          <label> IMC:</label>
          <input type="text" value={user.imc} />
          <button onClick={updateUser}>Atualizar</button>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
