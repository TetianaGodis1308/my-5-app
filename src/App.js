import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Singin from './pages/main/Singin';
import Singup from './pages/main/Singup';
import ForgPassword from './pages/main/ForgPassword';
import Success from './pages/main/Success';
import Entered from './pages/main/Entered';
function App() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='sing_in'>Sing in</Link>
        <Link to='sing_up'>Sing up</Link>
      </nav>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='sing_in'>
          <Route index element={<Singin/>} />
          <Route path='forg_password' element={<ForgPassword/>} />
          <Route path='not_available' element={<Singup/>} />
          <Route path='success' element={<Success/>} />
        </Route>
        <Route path='sing_up'>
          <Route index element={<Singup/>}/>
          <Route path='singin' element={<Singin/>}/>
          <Route path='entered' element={<Entered/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;


