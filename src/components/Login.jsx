import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";



function Login (){


    return (
        <>
          <h2>Login</h2>

          <form>

          <TextField  
          label="username or email" 
          variant="outlined" 
          fullWidth 
          sx={{mb: 4}} />

         <TextField  
          label="Password" 
          variant="outlined" 
          fullWidth 
          sx={{mb: 4}} />

         <Button variant="contained">Login</Button>
          </form>

          <small>Create account <Link to="/createAccount"> Here</Link> </small>
          <br />

          <small>My first request <Link to="/nuevaSolicitud"> Here! </Link> </small>
        </>
    )
}

export default Login;