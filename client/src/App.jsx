import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Login } from './views/Login';
import {Register} from './views/Register';
import { Navbar } from './components/Navbar';

function App() {
  
  return <>

    <BrowserRouter>
    <Navbar />

      <Routes>

      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/register' element={ <Register/> }/>
      </Routes>

    </BrowserRouter>

  </>
  
}

export default App
