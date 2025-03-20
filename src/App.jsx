import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchMovie from './component/search/SearchMovie';
import DetailMovie from './component/detailMovie/DetailMovie';
import NavBar from './component/navBar/NavBar';
import NotFoundPage from './component/NotFoundPage';
import MoviePage from './component/movie/MoviePage'
import Home from './component/home/Home';
import MainMovieCard from './component/movieCard/MainMovieCard';
import Profil from './component/profil/Profil';
import LogIn from './component/profil/logIn/LogIn';
import SignIn from './component/profil/signIn/SignIn';
import ForgotPassword from './component/profil/resetPassword/forgotPassword/ForgotPassword';
import ResetPage from './component/profil/resetPassword/ResetPage';
import Setting from './component/settings/Setting';
import UserDelete from './component/settings/UserDelete';

function App() {

  return (
      <>
       {/* <video autoPlay loop muted playsInline>
          <source src={VideoBackground} type="video/mp4"/>
      </video> */}
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
        <Route path='/detail/:id/:title' element={<DetailMovie/>}/>  
        <Route path='/movie' element={<MoviePage />}/>  
        <Route path='/test' element={<MainMovieCard />}/>  
        <Route path='/profil' element={<Profil/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword' element={<ResetPage/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/userDelete' element={<UserDelete/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>  
      </Routes> 
    </BrowserRouter>
            </>
  )
}

export default App;
