const Login=() => {
    return (
        <>
            <h2 className="h2_pages">Login to website</h2>
            <p className="p_pages">We are glad to see you again!</p>
            <form>
                <label htmlFor="login">Login</label>
                <input type="text" id="login"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <input className="button" type="submit" value="Login" />
            </form>
            <br style={{padding:20}}></br>
        </>
    )
};
export default Login;