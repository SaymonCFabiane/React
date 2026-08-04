import "./App.css";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
// import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
      <Contador />
      
    </div>
  );
}

export default App;
