import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";



function NuevaSolicitudBeca() {


    const[nombreCompleto, setNombreCompleto] = useState('');
    const[escuela, setEscuela] = useState('');
    const[beca, setBeca] = useState('');


    function enviarSolicitud(event) {
        event.preventDefault();

        console.log("Nombre: " + nombreCompleto);
        console.log("Escuela: " + escuela);
        console.log("Beca: " + beca);


        axios.post('http://localhost:8080/api/beca', {
            nombre: nombreCompleto,
            escuela: escuela,
            beca: beca
        }).then((response) => {
            console.log("Response: " + response);
        }).catch((error) => {
            console.log("Error: " + error);
        })
    }


    return (
        <>
            <h2>Crear nueva solicitud</h2>
            <hr />

            <form onSubmit={enviarSolicitud}>

                <TextField
                    label="Nombre Completo:"
                    variant="outlined"
                    value={nombreCompleto}
                    onChange={e => setNombreCompleto(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField
                    label="Escuela"
                    variant="outlined"
                    value={escuela}
                    onChange={e => setEscuela(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField
                    label="Beca"
                    variant="outlined"
                    value={beca}
                    onChange={e => setBeca(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />


                <Button
                    variant="outlined"
                    color="primary"
                    type="submit">Enviar Solicitud</Button>

            </form>

        </>
    )
}


export default NuevaSolicitudBeca;