import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchMovie from './component/Search/SearchMovie';
import Test from './component/Test';
import Home  from './component/Home';
import DetailMovie from './component/detailMovie/DetailMovie';

function App() {

  return (
    <BrowserRouter>
    {/* <Sidebar />  */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
        <Route path='/detail/:title' element={<DetailMovie/>}/>  
        <Route path='/test' element={<Test/>}/>  
      </Routes> 
    </BrowserRouter>
  )
}

export default App
