import { useContext } from "react"
import { AppContext } from "../App"

export const Login = () => {
    const {userName} = useContext(AppContext)
    return <div className="Login container">
    <h1>This is LOGIn Page and user: {userName}</h1>



</div>}

