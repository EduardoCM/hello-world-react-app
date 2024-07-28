import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";



function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route path="/createAccount" element={ <RegisterUser />} />
        </Routes>
    )
} 

export default RoutesApp;