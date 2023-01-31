import {Link } from 'react-router-dom'
import {useState} from 'react';
import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const {userName} = useContext(AppContext)
    return (<div className="Home container">
            <h1>This is LOGIn Page and User : {userName}</h1>

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
