import React,{ useState } from 'react'

function Login() {
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const formHandler=(event)=>
    {  
    event.preventDefault();
    if(userName.length==0 && Password.length==0)
    {
        setError(true);
    }
    if(userName && Password)
        {
        const loginObj={
            name:userName,
            pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
    }
    }
    return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username :<input type="text" value={userName} placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/><br></br><pre></pre>
    {error && userName.length == 0 ?
    <label style = {{color:"red"}}> Username is required</label>:""}<br></br>    
    Password :<input type="password" value={Password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br></br><pre></pre>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login