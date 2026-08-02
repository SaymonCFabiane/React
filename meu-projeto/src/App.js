import "./App.css";

function App() {
  const name = "Matheus";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "http://via.placeholder.com/150";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>soma: {sum(2, 3)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
