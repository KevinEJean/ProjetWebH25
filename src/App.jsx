import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchMovie from './component/Search/SearchMovie';
import DetailMovie from './component/detailMovie/DetailMovie';
import NavBar from './component/navBar/NavBar';
import NotFoundPage from './component/NotFoundPage';
import Home from './component/home/Home';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
        <Route path='/detail/:title' element={<DetailMovie/>}/>  
        <Route path='/*' element={<NotFoundPage/>}/>  
      </Routes> 
    </BrowserRouter>
  )
}

export default App;
