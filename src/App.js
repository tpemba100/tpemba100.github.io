import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import Intro from './components/Intro';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Portfolio />
    </div>
  );
}

export default App;
