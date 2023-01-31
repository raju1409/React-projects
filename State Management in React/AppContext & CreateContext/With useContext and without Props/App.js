import './styles.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Navbar } from './Pages/Home';
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';
import { createContext, useState } from 'react';

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("RAJ")

  return <div className="App">
      <AppContext.Provider value={{userName, setUserName}} >
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h1>Page not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
}

export default App;
