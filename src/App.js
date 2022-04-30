import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo={'Ejemplo de prop greeting'}/>
    </div>
  );
}

export default App;
