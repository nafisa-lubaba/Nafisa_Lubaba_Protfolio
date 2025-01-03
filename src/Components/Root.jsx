import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>  
            <div>
        <Navbar />
       <Outlet></Outlet>
        
      </div>

            
        </div>
    );
};

export default Root;