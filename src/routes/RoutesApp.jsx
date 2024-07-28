import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
import NuevaSolicitudBeca from "../components/NuevaSolicitudBeca";



function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/createAccount" element={ <RegisterUser />} />

            <Route path="/nuevaSolicitud" element={ <NuevaSolicitudBeca />} />
        </Routes>
    )
} 

export default RoutesApp;