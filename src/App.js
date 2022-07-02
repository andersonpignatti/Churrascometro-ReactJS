import logo from './logo.png';
import './App.css';

function App() {
  return (
      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      <h1>Calculadora de Churrasco</h1>
  
  
      <p>Adultos<input type="text" id="adultos" placeholder="Quantidade de adultos"></input></p>
      <p>Crianças<input type="text" id="crianças" placeholder="Quantidade de crianças"></input></p>
      <p>Duração<input type="tel" id="duração" placeholder="Duração do evento em horas"></input></p>
      <button id="botao" onclick={'enviar'}>CALCULAR</button>
      </header>
    </div>
    
  );
}

export default App;
