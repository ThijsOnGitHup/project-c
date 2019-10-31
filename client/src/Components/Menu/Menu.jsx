import React from 'react'
import {Link} from "react-router-dom";

class Menu extends React.Component{
    constructor(){
        super()
    }

    render() {
        return(
            <div className="menu">
                <ul>
                    <li><img id='logo' src="https://i.imgur.com/HVmQHos.png" alt="Logo RoosterIT"/></li>
                    <li><Link to={'/'} className="active">Inloggen</Link></li>
                    <li><Link to={'/Registratie'} >Registreren</Link></li>
                    <li><Link to={"/DataTest"}>Contact</Link></li>
                    <li><Link to={"/Rooster"}>Rooster</Link></li>
                    <li><Link to={"/Home"}>Home(Temp)</Link></li>
                </ul>
            </div>

        )
    }
}
export default Menu