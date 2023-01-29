import './styles.css';
// import {  useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Navbar } from './Pages/Home';
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';


function App() {

  return <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h1>Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
}
export default App;
