import React from "react";
import ItemGastos from "./components/ItemGastos";

function App() {
  const dados = [{ titulo: "Item de Gastos", preco: 50, data: "10/01/22" }];

  return (
    <div>
      <h1>Ola mundo!</h1>
      <p>rfce é muito brabo!</p>
      <ItemGastos
        titulo={dados[0].titulo}
        preco={dados[0].preco}
        data={dados[0].data}
      />
      <ItemGastos
        titulo={dados[0].titulo}
        preco={dados[0].preco}
        data={dados[0].data}
      />
    </div>
  );
}

export default App;
