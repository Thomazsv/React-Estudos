import { useState } from "react";
import "./ItemGastos.css";
function ItemGastos(props) {
  // const titulo = "Item de Gastos";
  const [titulo, setTitulo] = useState(props.titulo);
  const clickHandler = () => {
    console.log("Clicado!!!!");
    setTitulo("Atualizado");
  };
  return (
    <div className="card">
      <h2 className="gastos" style={{ color: "green" }}>
        {titulo}
      </h2>
      <p>{props.preco}</p>
      <p>{props.data}</p>
      <button onClick={clickHandler}>mudar titulo</button>
    </div>
  );
}

export default ItemGastos;
// style={color:red}
