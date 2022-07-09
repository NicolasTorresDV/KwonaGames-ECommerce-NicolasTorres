import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a KwonaGames. Estas preparado, Gamer?"/>} />
          <Route path='/Categories/:categoryid' element={ <ItemListContainer greeting="Bienvenidos a KwonaGames. Estas preparado, Gamer?"/> } />
          <Route path='/Products/:id' element={ <ItemDetailContainer/> } />        
          <Route path='/Cart' element={ <Cart/> } />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
