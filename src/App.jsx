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
import SignUp from './component/profil/SignUp/SignUp';
import ForgotPassword from './component/profil/resetPassword/forgotPassword/ForgotPassword';
import ResetPage from './component/profil/resetPassword/ResetPage';
import Setting from './component/settings/Setting';
import UserDelete from './component/settings/UserDelete';
import Nba from './component/sport/basket/Nba';
import Fifa from './component/sport/soccer/Fifa';
import Carousel1 from './component/movieCard/carousel/Carousel1';
import Carousel2 from './component/movieCard/carousel/Carousel2';
import Carousel3 from './component/movieCard/carousel/Carousel3';
import SeriePage from './component/serie/SeriePage';
import FavoritPage from './component/favorit/FavoritPage';
import { useEffect } from 'react';


function App() {

  // empéche l'accès via l'url sans connection
  // problème react le lit une fois donc lors du changement a true l'url change mais pas la page
  const sessionEtat = sessionStorage.getItem("onlineStatus") === "true";
  
  // let sessionEtat = "";
  // useEffect(() => {
  //   sessionEtat = sessionStorage.getItem("onlineStatus") === "true";
  
  // }, [sessionEtat])
  return (
      <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchMovie/>}/>
          <Route path='/detail/:type/:id/:title' element={<DetailMovie/>}/>  
          <Route path='/movie' element={<MoviePage />}/>  
          <Route path='/serie' element={<SeriePage />}/>  
          <Route path='/favorit' element={sessionEtat ? <FavoritPage /> : <LogIn/>}/>  
          <Route path='/profil' element={<Profil />}/>
          <Route path='/logIn' element={sessionEtat ? <Profil /> : <LogIn/>}/>
          <Route path='/signUp' element={sessionEtat ? <Profil /> : <SignUp/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>           {/* reste juste a implémenter gmail + backend */}
          <Route path='/resetPassword' element={<ResetPage/>}/>                 {/* depend de forgotPassword */}
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
