
function UncontrolledLogin() {
    const user = {};

    

    function handleUsernameChange(event) {
        const username = event.target.value;
        return user.username = username;
    }

    function handlePasswordChange(event) {
        const password = event.target.value;
        return user.password = password;
    }

    function handleRememberChange(event) {
        const checked = event.target.checked;
        return user.checked = checked;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(user);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" onChange={handleUsernameChange} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={handlePasswordChange} />
            <label htmlFor="remember">Remember:</label>
            <input id="remember" type="checkbox" onChange={handleRememberChange} />

            <button type="submit" >Submit</button>
            {/* <button type="button" onClick={resetForm}>Reset form</button> */}
        </form>
    )
}

export default UncontrolledLogin