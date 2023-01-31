
import '../styles.css';
import {useState} from 'react'


export const Profile = (props) => {
    return (<div className="Profile container">
        <h1>THis is Profiles Page and user : {props.userName} </h1>
        <ChangeProfile setUserName = {props.setUserName} />

    </div>)
}

const ChangeProfile = (props) => {
    const [NewUserName, setNewUserName] = useState("")
    return (
        <div>
            <input onChange={(event)=>setNewUserName(event.target.value)} />
            <button onClick={()=>{props.setUserName(NewUserName)}} >Chnage UserName</button>
        </div>
    )
}

