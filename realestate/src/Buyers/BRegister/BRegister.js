import React, { useState } from "react";
import './BRegister.css';
import { useHistory} from "react-router";

import axios from "axios";
const BRegister = () =>{
    const history = useHistory()

    const [user , setUser ] = useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        cpassword:""
    })

    const handlechange = e =>{
        const { name , value } = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () =>{
        const {name , email , password , cpassword} = user
        if(name && email && password && (password === cpassword)){
            axios.post('http://localhost:5002/register',user)
            .then(res =>{alert(res.data.message)
            history.push('/login')
        })
        }else{
            alert('invalid input');
        }
       
    }

    return(
        <div>
            <div className='container'>
                {console.log('user', user)}
            <form>
                <h1>Registeration Page for Buyers</h1>
                
                <input className='textfield' name='name' value={user.name} type="text" placeholder='Enter Name' onChange = { handlechange }/><br/>
                <input className='textfield' name='contact' value={user.contact} type="text" placeholder='Phone Number' onChange = { handlechange } /><br/>
                <input className='textfield' name='email' value={user.email} type="text" placeholder='Enter E mail' onChange = { handlechange } /><br/>
                <input className='textfield' name='password' value={user.password} type = "password" placeholder='Enter password' onChange = { handlechange } /><br/>
                <input className='textfield' name='cpassword' value={user.cpassword} type="password" placeholder='Confirm password' onChange = { handlechange } /><br/>
                <input className='buttonfield' type = 'button' onClick={register} value='Register'/><br/>
                
                <input className='buttonfield' type = 'button' onClick={()=>history.push('/blogin')} value='Login'/>
                
            </form>
        </div>
        </div>
    );
}

export default BRegister;