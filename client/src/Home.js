import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';

function Home() {
    const[user,setUser] = useState(null);
    const history = useHistory();
    const getUser =async()=>{
        const res = await axios.get('http://localhost:5000/auth',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`,
            },
        });
        setUser(res.data);
    }
    useEffect(()=>{
        getUser();
    },[])

    const Logout =(e)=>{
        e.preventDefault();
        localStorage.removeItem("token");
        history.push('/login');
    }
    if(!localStorage.getItem("token"))
    {
        history.push('/login');
    }
    return (
        <div>
            <h1>Welcome {user && user.name}</h1>
            <button onClick={Logout}>
                Logout
            </button>
        </div>
    )
}

export default Home
