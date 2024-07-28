import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";


function RegisterUser (){

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[planet, setPlanet] = useState('');


    function sendUser(event) {
        event.preventDefault();

        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Email: " + email);
        console.log("UserName: " + userName);
        console.log("Password: " + password);
        console.log("Planet: " + planet);

        console.log("Inicia llamado a servicio POST");

        axios.post('http://localhost:8080/api/v1/user',{
            name: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password,
            planet: planet
        }).then((response) => {
            console.log("Response: " + response);
        }).catch((error) => {
            console.log("Error: " + error);
        })


        console.log("Finaliza llamado a servicio POST");
    }

    return (
        <>
          <h2>Register User</h2>

          <form onSubmit={sendUser}>

          <TextField  
          label="First Name" 
          variant="outlined" 
          value={firstName}
          onChange={ e => setFirstName(e.target.value)}
          fullWidth 
          sx={{mb: 4}} />

<TextField  
          label="Last Name" 
          variant="outlined" 
          value={lastName}
          onChange={ e => setLastName(e.target.value)}
          fullWidth 
          sx={{mb: 4}} />

<TextField  
          label="email" 
          variant="outlined"
          value={email}
          onChange={ e => setEmail(e.target.value)} 
          fullWidth 
          sx={{mb: 4}} />

<TextField  
          label="User Name" 
          variant="outlined"
          value={userName}
          onChange={ e => setUserName(e.target.value)}
          fullWidth 
          sx={{mb: 4}} />

<TextField  
          label="Password" 
          type="password"
          variant="outlined"
          value={password} 
          onChange={ e => setPassword(e.target.value)}
          fullWidth 
          sx={{mb: 4}} />


<TextField  
          label="Planet" 
          variant="outlined"
          value={planet} 
          onChange={ e => setPlanet(e.target.value)}
          fullWidth 
          sx={{mb: 4}} />


          <Button 
          variant="outlined" 
          color="primary" 
          type="submit">Register User</Button>
   
          </form>


        </>
    )
}

export default RegisterUser;