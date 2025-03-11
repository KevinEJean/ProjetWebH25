import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchMovie from './component/Search/SearchMovie';
import DetailMovie from './component/detailMovie/DetailMovie';
import NavBar from './component/navBar/NavBar';
import NotFoundPage from './component/NotFoundPage';
import MoviePage from './component/movie/MoviePage'
import Home from './component/home/Home';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
        <Route path='/detail/:id/:title' element={<DetailMovie/>}/>  
        <Route path='/movies' element={<MoviePage />}/>  
        {/* <Route path='/movies' element={<MoviePage/>}/>   */}
        <Route path='/*' element={<NotFoundPage/>}/>  
      </Routes> 
    </BrowserRouter>
  )
}

export default App;
