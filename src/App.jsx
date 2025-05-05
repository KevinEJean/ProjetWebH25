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
import Setting from './component/settings/Setting';
import UserDelete from './component/settings/UserDelete';
import Fifa from './component/sport/soccer/Fifa';
import SeriePage from './component/serie/SeriePage';
import FavoritPage from './component/favorit/FavoritPage';
import ResetPassword from './component/resetPassword/resetPAssword';


function App() {

  // empéche l'accès via l'url sans connection
  // problème react le lit une fois donc lors du changement a true l'url change mais pas la page
  const sessionEtat = sessionStorage.getItem("onlineStatus") === "true";
  
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
<<<<<<< HEAD
          <Route path='/resetPassword' element={<ResetPassword/>}/>        
=======
          {/* <Route path='/forgotPassword' element={<ForgotPassword/>}/>           reste juste a implémenter sgMail */}
          <Route path='/resetPassword' element={<ResetPage/>}/>                 {/* depend de forgotPassword */}
>>>>>>> 1481378a73a855ff91fa9d08149b7fd720ee7f1b
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/userDelete' element={<UserDelete/>}/>
          <Route path='/fifa' element={<Fifa/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
