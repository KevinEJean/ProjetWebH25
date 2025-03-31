import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchMovie from './component/Search/SearchMovie';
import DetailMovie from './component/detailMovie/DetailMovie';
import NavBar from './component/navBar/NavBar';
import NotFoundPage from './component/NotFoundPage';
import MoviePage from './component/movie/MoviePage'
import Home from './component/home/Home';
import Profil from './component/profil/Profil';
import LogIn from './component/profil/logIn/LogIn';
import SignIn from './component/profil/signIn/SignIn';
import ForgotPassword from './component/profil/resetPassword/forgotPassword/ForgotPassword';
import ResetPage from './component/profil/resetPassword/ResetPage';
import Setting from './component/settings/Setting';
import UserDelete from './component/settings/UserDelete';
import Nba from './component/sport/basket/Nba';
import Fifa from './component/sport/soccer/Fifa';
import Carousel1 from './component/movieCard/carousel/Carousel1';
import Carousel2 from './component/movieCard/carousel/Carousel2';
import Carousel3 from './component/movieCard/carousel/Carousel3';

function App() {

  return (
      <>
       {/* <video autoPlay loop muted playsInline>
          <source src={VideoBackground} type="video/mp4"/>
      </video>  */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchMovie/>}/>
          <Route path='/detail/:id/:title' element={<DetailMovie/>}/>  
          <Route path='/movie' element={<MoviePage />}/>  
          <Route path='/test' element={<Carousel3 />}/>  
          <Route path='/profil' element={<Profil/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/resetPassword' element={<ResetPage/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/userDelete' element={<UserDelete/>}/>
          <Route path='/nba' element={<Nba/>}/>
          <Route path='/fifa' element={<Fifa/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App;
