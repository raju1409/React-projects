// import { useCountdown } from "./hooks/useCountdown";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { name, email, password, confirmPassword } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    //result.json will create a new json format for out data
    axios.post("https://practice-react-5-default-rtdb.firebaseio.com/result.json", data)
    .then(()=>alert("Data submitted !!!"))
  }
  const handleChange = (event) => {
    setData({...data, [event.target.name]:event.target.value });
  };

    return (
      <div>
        <center>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter Name.."
            />
            <br></br>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email.."
            />
            <br></br>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter passeord.."
            />
            <br></br>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password.."
            />
            <br></br>
            <input type="submit" name="submit"/>
          </form>
        </center>
      </div>
    );
  };


export default App;
