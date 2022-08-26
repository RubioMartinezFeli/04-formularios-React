import logo from './logo.svg';
import './App.css';
import { FomularioComponent } from './components/FomularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <FomularioComponent />
      </header>
    </div>
  );
}

export default App;
