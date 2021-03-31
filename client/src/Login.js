import axios from 'axios';
import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Register.css';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError] = useState();
    const history = useHistory();

    const handleLogin = async(e) => {
        e.preventDefault();
        setError(null);
        try {
           const res=  await axios.post('http://localhost:5000/auth/login',
                {email,password},
                {
                    headers:{
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(res.data);
            localStorage.setItem('token',res.data.token);
            history.replace('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="register">
            <div className="register__box"> 
                <div className="register__container">
                    <h3>Login</h3>
                    <form>
                        <div className="register__input">
                            <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="register__input">
                            <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        {
                            error ? <p style={{color:"red"}}>{error}</p>:null
                        }
                        <button onClick={handleLogin}>Login</button>
                    </form>
                    
                    <div className="login">
                        <Link to="/register" className="login"> Don't have an account ? <span>Register Here !</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
