
import '../styles.css';
import {useState} from 'react'
import { useContext } from "react"
import { AppContext } from "../App"


export const Profile = () => {
    const {userName} = useContext(AppContext)
    return (<div className="Profile container">
        <h1>THis is Profiles Page and user : {userName} </h1>
        <ChangeProfile />

    </div>)
}

const ChangeProfile = () => {
    const {setUserName} = useContext(AppContext)
    const [NewUserName, setNewUserName] = useState("")
    return (
        <div>
            <input onChange={(event)=>setNewUserName(event.target.value)} />
            <button onClick={()=>{setUserName(NewUserName)}} >Chnage UserName</button>
        </div>
    )
}

