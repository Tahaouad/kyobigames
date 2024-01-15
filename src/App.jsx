import logo from './logo.svg';
import './App.css';
import NavBar from './composants/NavBar';
import Home from './composants/Home';
import Shop from './composants/Shop';
import Collections from './composants/Collections';
import Reviews from './composants/Reviews';
import Copyright from './composants/Copyright';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Shop />
      <Collections />
      <Reviews />
      <Copyright />
    </div>
  );
}

export default App;
