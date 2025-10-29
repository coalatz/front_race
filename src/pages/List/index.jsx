import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Trash from "../../assets/icons8-lixeira.svg";

const List = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

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

  async function searchByName(name) {
    console.log(`Buscando por NOME: ${name}`);
    try {
      const response = await api.get(`/user/name/${name}`);
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar por nome:", error);
      getUsers([]);
    }
  }

  async function searchByCpf(cpf) {
    console.log(`Buscando por CPF: ${cpf}`);
    try {
      const response = await api.get(`/user/cpf/${cpf}`);
      const data = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar por cpf:", error);
      getUsers();
    }
  }

  useEffect(() => {
    if (filter.trim() === "") {
      getUsers();
      return;
    }
    const timer = setTimeout(() => {
      if (/^[0-9]+$/.test(filter.trim())) {
        searchByCpf(filter);
      } else {
        searchByName(filter);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <>
      <div className="search-user">
        <input
          type="text"
          placeholder="Pesquisar por nome ou CPF..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {users.map((user) => (
        <div key={user.userId} className="card">
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
          <div className="Trash">
            <button onClick={() => deleteUsers(user.userId)}>
              <img src={Trash} alt="" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
