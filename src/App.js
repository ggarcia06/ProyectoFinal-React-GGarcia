import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos!!!'} /> } />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenidos!!!'} /> }/>
          <Route path="/item/:id" element={<ItemDetailContainer /> }/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
