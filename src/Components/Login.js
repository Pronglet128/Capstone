const Login=() => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <h2 className="h2_pages">Login to website</h2>
            <p className="p_pages">We are happy to see you again!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login">E-mail</label>
                <input type="email" id="login"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <input className="button" type="submit" value="Login" aria-label="Click to login to site"/>
            </form>
            <br style={{padding:20}}></br>
        </>
    )
};
export default Login;