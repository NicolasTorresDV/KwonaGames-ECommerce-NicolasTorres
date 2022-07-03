import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a KwonaGames. Estas preparado, Gamer?"/>
      <ItemDetailContainer/>
    </>
  )
}


export default App;
