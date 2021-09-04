import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LazyLoading from './components/LazyLoading';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
        <Home />
        <About age={20} name="lindos" />
        {/* <LazyLoading /> */}
    </div>
  );
}

export default App;
