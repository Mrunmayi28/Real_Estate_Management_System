import React from "react";

import './Home.css';

const Home = ({setLoginUser}) =>{
    return(
        <div>
    <h4>Home paage</h4>
    <input className='buttonfield' type = 'button' onClick={()=>setLoginUser({})} value='Logout'/>
    </div>
    );
}

export default Home;