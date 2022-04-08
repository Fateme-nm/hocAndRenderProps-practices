import React, {useState} from 'react';

const Login = ({user}) => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        user.save(`${inputs.username} ${inputs.password}`, JSON.stringify(inputs))
        alert('You are Rejesterd!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Enter your name:
                <input 
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                />
            </label><br></br>
            <label>Enter your password:
                <input 
                    type="password" 
                    name="password" 
                    value={inputs.password || ""} 
                    onChange={handleChange}
                />
            </label><br></br>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default Login;
