import React,{useState} from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register',
                {name,email,password},
                {
                    headers:{
                        'Content-Type': 'application/json',
                    },
                }
            );
            history.push('/login');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="register">
            <div className="register__box"> 
                <div className="register__container">
                    <h3>Create Account</h3>
                    <form>
                        <div className="register__input">
                            <input placeholder="Name"  type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="register__input">
                            <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="register__input">
                            <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </form>
                    
                    <div className="login">
                        <Link to="/login" className="login"> Already an User ? <span>Login Here !</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
