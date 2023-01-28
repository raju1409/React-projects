import styles from './App.module.css';
import { useState} from 'react';

function App() {
  const [data, setData] = useState({
    username : '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  const {username, email, password, confirmPassword} = data;
  const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const handleSubmit = e =>{
    e.preventDefault();
    // console.log(data.password, confirmPassword.toString())
    // if(password.toString()===confirmPassword.toString()){
    //   console.log("Password matched");
    // }else{
    //   console.log("Password MisMatched")
    // }

    // Validations

    if (username.toString().length < 5){
      alert("Username should have more than 5 Words");
    }else if(password.toString() !== confirmPassword.toString()){
      alert("pasword do not Match");
    }else{
      console.log(data);
    }


    // console.log(password.toString()=== confirmPassword.toString() ? ("Password Matched",password, confirmPassword) :"Password Mismatch")
  }
 
  return <div className={styles.App}>
      <div>
        <center>
          <form onSubmit = {handleSubmit}>
            <input name="username" type="text" value={username}
             onChange={onChange} placeholder='Username' /> <br/>

            <input name="email" type="text" value={email}
             onChange={onChange} placeholder='email' /> <br/>

            <input name='password' type='password' value={password}
             onChange={onChange} placeholder='Password' /> <br />

            <input name='confirmPassword' type='password' value={confirmPassword}
             onChange={onChange} placeholder='confirm Password' /> <br/>
             
            {password.toString() !==confirmPassword.toString() ? <p>Password do not Match</p>:<p>Password Matched</p>}

            <input name='submit' type='submit'/>
          </form>
        </center>
      </div>
    </div>
}
export default App;
