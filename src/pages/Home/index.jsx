import "./style.css";
import Trash from "../../assets/icons8-lixeira.svg";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Home() {
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    age: "",
    height: "",
    weight: "",
  });
  const [errors, setErros] = useState(false);

  async function postUsers(event) {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.cpf ||
      !formData.age ||
      !formData.height ||
      !formData.weight
    ) {
      setErros(true);
      return;
    }
    setErros(false);
    await api.post("/user/register", formData);
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={postUsers}>
          <h1>Cadastro de Usuarios</h1>
          <input
            name="name"
            placeholder={
              errors && !formData.name ? "Nome Obrigatorio" : "Nome Completo"
            }
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            style={{ borderColor: errors && !formData.name ? "red" : "black" }}
          />
          <input
            name="cpf"
            placeholder={errors && !formData.cpf ? "CPF Obrigatorio" : "CPF"}
            type="text"
            value={formData.cpf}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            style={{ borderColor: errors && !formData.cpf ? "red" : "black" }}
          />
          <input
            name="age"
            placeholder={
              errors && !formData.age ? "Idade obrigatoria" : "Idade"
            }
            type="number"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            style={{ borderColor: errors && !formData.age ? "red" : "black" }}
          />
          <input
            name="height"
            placeholder={
              errors && !formData.height ? "Altura obrigatoria" : "Altura"
            }
            type="number"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            style={{
              borderColor: errors && !formData.height ? "red" : "black",
            }}
          />
          <input
            name="weight"
            placeholder={
              errors && !formData.weight ? "Peso obrigatorio" : "Peso"
            }
            type="number"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            style={{
              borderColor: errors && !formData.weight ? "red" : "black",
            }}
          />
          <button type="submit">Cadastrar</button>
          <Popup open={popup} onClose={() => setPopup(false)}>
            <div className="popup-text">Usuario Cadastrado</div>
          </Popup>
        </form>
      </div>
    </>
  );
}

export default Home;
