import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About text={{name: 'peter'}} data="About Data" />
      </header>
    </div>
  );
}

export default App;
