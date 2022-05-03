import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo={'Ejemplo de prop greeting'}/>
      <ItemCount/>
    </div>
  );
}

export default App;
