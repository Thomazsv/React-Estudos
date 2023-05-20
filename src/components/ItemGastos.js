import "./ItemGastos.css";
function ItemGastos(props) {
  // const titulo = "Item de Gastos";
  return (
    <div className="card">
      <h2 className="gastos" style={{ color: "green" }}>
        {props.titulo}
      </h2>
      <p>{props.preco}</p>
      <p>{props.data}</p>
    </div>
  );
}

export default ItemGastos;
// style={color:red}
