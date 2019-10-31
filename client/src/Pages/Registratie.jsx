import React from 'react';
import {Link} from "react-router-dom";

class Registratie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // Globale variabelen.
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            phone: '',
            birth: '',
            img_link: '',
            isWerkgever: false
        };
        // Lijst om uit te lezen voor het POST request.
        this.lijst=["firstName","lastName","email","pass","phone","birth","img_link", "isWerkgever"];
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Converteer de waarden uit de state naar een JSON string om die in een POST request te plaatsen en te versturen.
    handleSubmit() {
        var object={};
        this.lijst.forEach((value)=>{
            var returnValue=this.state[value]
            if(typeof returnValue==='boolean'){
                returnValue=returnValue?1:0
            }else if (value==="birth"){
                returnValue=new Date(returnValue).toLocaleDateString('en-US',{year:'2-digit',month:"2-digit",day:"2-digit"},"UTC")
            }
            object[value]=returnValue
        });
        console.log("sending");
        console.log(object);
        fetch(this.props.apiLink+"/api/addgebruiker",{method:"POST",
            body:JSON.stringify(object),
            headers:{
                "content-type":"application/json"
            }}).then((value)=>{
            value.json().then(value1 => {console.log(value1.message)})
        });
    }

    // Ververs de waarden wanneer deze veranderd worden door de gebruiker.
    handleInputChange(event) {
        const target = event.target;
        // Laat de waarde de waarde zijn van het actieve veld. Als het input-type een checkbox is is de waarde of deze aangevinkt is of niet.
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    // Verzamel de inputs van de gebruiker om die in de state op te slaan.
    render() {
        return(
        <div id="reg">
            <form>
            <table>
                <tbody>
                <tr>
                    <label>Voornaam</label>
                    <td><input type='text' name="firstName" value={this.state.firstName} placeholder="Voornaam" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Achternaam</label>
                    <td><input type='text' name="lastName" value={this.state.lastName} placeholder="Achternaam" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Email</label>
                    <td><input type='email' name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Telefoonnummer</label>
                    <td><input type='text' name="phone" value={this.state.phone} placeholder="Telefoonnummer" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Geboortedatum</label>
                    <td><input type='date' name="birth" value={this.state.birth} placeholder="Geboortedatum" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>URL gebruikersafbeelding</label>
                    <td><input type='text' name="img_link" value={this.state.img_link} placeholder="URL gebruikersafbeelding" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Wachtwoord</label>
                    <td><input type='password' name="pass" value={this.state.pass} placeholder="Wachtwoord" onChange={this.handleInputChange}/></td>
                </tr>
                <tr>
                    <label>Account voor werkgever</label>
                    <td><input type='checkbox' name="isWerkgever" value={this.state.isWerkgever} placeholder="false" onChange={this.handleInputChange}/></td>
                </tr>
                <button onClick={this.handleSubmit}>Registreer</button>
                </tbody>
            </table>
            </form>
        </div>
        )
    }
}
export default Registratie
