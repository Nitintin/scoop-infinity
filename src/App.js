import './App.css';
import Navbar from './Components/Views/Navbar'
import Feature from './Components/Views/Feature'
import CardList from './Components/Logic/CardList'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Feature/>
      <CardList/>
    </div>
  );
}

export default App;
