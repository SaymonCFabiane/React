import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}

export default Contador;
