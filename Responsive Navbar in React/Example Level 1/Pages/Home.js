// import {Link } from 'react-router-dom'
import {useState} from 'react';
// import ReaderIcon from "@material-ui/icons/Reader";
// import SearchIcon from "@material-ui/icons/Search";

export const Home = () => {
    return (<div className="Home container">
            <h1>This is LOGIn Page</h1>

    </div>)
}

export const Navbar = () => {
    const [showLinks , setShowLinks] = useState(true);
    return (
    <nav className="Navbar" >

        <div className='leftSide' >
            <div className='Links' id={showLinks ? "hidden" : ""}>
            <a href="/" > Home</a>
            <a href="/profile" > Profile </a>
            <a href="/login" > LogIN </a>

            </div>
            <button onClick={() => {setShowLinks(!showLinks)}} >OPEN</button>
        </div>
        <div className='rightSide'>
            <input placeholder='Search'/>
            <button> Search </button>
        </div>

  </nav>)
}