import logo from './logo.svg';
import './Articles.css';
import { Articles } from './pages/Articles';

import { Routes, Route } from 'react-router-dom';
import DetailsArticle from './pages/DetailsArticle';


function App() {
  return (
    <Routes>
      <Route path='/article'>
        <Route path='/article' element={<Articles/>}></Route>
        <Route path='/article/:id' element={<DetailsArticle/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
