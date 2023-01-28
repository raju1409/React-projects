import styles from './App.module.css';
import { useState} from 'react';

function App() {
  const [data, setData] = useState({
    username : '',
    password : ''
  })
  const {username, password } = data;
  const onChange = event =>{
    setData({...data, [event.target.value]:[event.target.value]})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data.username, data.password);
  }

 
  return <div className={styles.App}>
      <div>
        <center>
          <form onSubmit={handleSubmit}>
            <input name="username" type="text" value={username}
             onChange={onChange} placeholder='Username' /> <br/>

            <input name='password' type='text' value={password}
             onChange={onChange} placeholder='Password' /> <br />

            <input name='submit' type='submit'/>
          </form>
        </center>
      </div>
    </div>
}
export default App;
