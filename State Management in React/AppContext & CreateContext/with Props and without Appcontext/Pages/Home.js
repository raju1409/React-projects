import {Link } from 'react-router-dom'
import {useState} from 'react';
// import ReaderIcon from "@material-ui/icons/Reader";
// import SearchIcon from "@material-ui/icons/Search";

export const Home = (props) => {
    return (<div className="Home container">
            <h1>This is LOGIn Page and User : {props.userName}</h1>

    </div>)
}

export const Navbar = () => {
    const [showLinks , setShowLinks] = useState(true);
    return (
    <nav className="Navbar" >

        <div className='leftSide' >
            <div className='Links' id={showLinks ? "hidden" : ""}>
            <Link to="/" > Home</Link>
            <Link to="/profile" > Profile </Link>
            <Link to="/login" > LogIN </Link>

            </div>
            <button onClick={() => {setShowLinks(!showLinks)}} >OPEN</button>
        </div>
        <div className='rightSide'>
            <input placeholder='Search'/>
            <button> Search </button>
        </div>

  </nav>)
}
