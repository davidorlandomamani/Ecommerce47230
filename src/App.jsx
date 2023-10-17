import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
