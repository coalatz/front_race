import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Trash from "../../assets/icons8-lixeira.svg";

const List = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromApi = await api.get("/user/users");
    console.log(usersFromApi.data);
    setUsers(usersFromApi.data);
  }

  async function deleteUsers(id) {
    await api.delete(`/user/delete/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user) => (
    <div key={user.userId} className="card">
      <div>
        <p>
          Name: <span>{user.name}</span>
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
      <div className="Trash">
        <button onClick={() => deleteUsers(user.userId)}>
          <img src={Trash} alt="" />
        </button>
      </div>
    </div>
  ));
};

export default List;
