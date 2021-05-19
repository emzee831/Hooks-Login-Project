import React, {useState} from 'react';

import Welcome from './success'
import Wrong from './failure'


function Login() {
    const userName = "mauzap"
    const password = "456123"

    const [savedName, setName] = useState("");
    const [savedPassword, setPassword] = useState("");
    const [showLogin, setShowLogin] = useState("");

    function check(e) {
        e.preventDefault();
        if (userName === savedName && password === savedPassword) {
            setShowLogin (<Welcome userName={userName} />)
        } else {setShowLogin(<Wrong />)}

    }

    
    return (
        <div className="form">
            <form onSubmit={check}>
                <label>User Name:
                    <input type="text" id="name" value={savedName} onChange={(e) => setName(e.target.value)}/><br></br>
                </label><br></br>    
                <label>Password:
                    <input type="text" id="password" value={savedPassword} onChange={(e) => setPassword(e.target.value)}/><br></br>
                </label><br></br>
                    <input type="submit" value="Submit"></input>
                    <div>{showLogin}</div>
            </form>
        </div>
    );
}

export default Login
