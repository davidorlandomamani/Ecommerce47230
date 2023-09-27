import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la Tienda de Bruno"} />
    </>

  );
}

export default App;
