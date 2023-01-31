import './styles.css';
import {  useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Navbar } from './Pages/Home';
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';


function App() {
  const [userName, setUserName] = useState("RAJ")
  return <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home userName={userName} />} />
          <Route path='/profile' element={<Profile setUserName={setUserName} userName={userName}/>} />
          <Route path='/login' element={<Login userName={userName}  />} />
          <Route path='*' element={<h1>Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
}

export default App;
