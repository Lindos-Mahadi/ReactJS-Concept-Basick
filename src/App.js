import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <About />
      </header>
    </div>
  );
}

export default App;
