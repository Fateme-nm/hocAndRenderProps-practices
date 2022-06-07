import React, {useState} from 'react';

const Resetpassword = ({user}) => {
    const [inputs, setInputs] = useState({})
    const [validUser, setValidUser] = useState(false)
    const [newPass, setNewPass] = useState(null)

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let userr = user.load(`${inputs.username} ${inputs.password}`)
        if (userr !== null) {
            setValidUser(true)
        }
        else {
            alert('It is not Valid!')
        }
        if (newPass !== null) {
            user.remove(`${inputs.username} ${inputs.password}`)
            user.save(`${inputs.username} ${inputs.password}`, JSON.stringify({...inputs,...newPass}))
            alert('Your Password Updated!')
        }
    }

    const handleChangeNewPass = e => {
        const name = e.target.name
        const value = e.target.value
        setNewPass({[name]: value})
    }
 
    const newPasswordField = () => {
        return (
            <>
                <label>Enter your newPassword:
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => handleChangeNewPass(e)} />
                </label><br></br>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>ResetPassword</h2>
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
            {validUser ? newPasswordField() : null}
            <input type="submit" value={validUser ? 'updatePassword' : 'checkedUser'}/>
        </form>
    );
}

export default Resetpassword;
