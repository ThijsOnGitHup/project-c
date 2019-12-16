import React from "react";
import Notification from "../Components/Notification";

interface IProps{
    apiLink:string
}

interface IState{
    notifs:{name:string,messageType:number,profielFotoLink:string, roosterItemId:number, notifId:number}[]
}

class NotifList extends React.Component<IProps, IState> {

    constructor(props:IProps) {
        super(props);
        this.state={
            notifs:[]
        }
    }

    componentDidMount() : void{
        this.getnotifs()
    }


    getnotifs = () => {
        fetch("http://localhost:5000/api/getnotifs")
            .then(
                (u) => {
                    try{
                        return u.json()
                    }
                    catch(error){
                        console.error(error)
                    }
                }
            )
            .then(
                (json) => {
                    console.log(json);
                    this.setState({notifs:json})
                }
            )
    };


    render() {
        return(
            <div className='Notifs'>
                <h1>Meldingen</h1>
                <div className="notifList">
                    {this.state.notifs.map(notif => <Notification person={notif.name} messageId={notif.messageType} imageLink={notif.profielFotoLink} apiLink={this.props.apiLink} roosterItemId={notif.roosterItemId} notifId={notif.notifId}/>)}
                </div>
            </div>
        )
    }
}

export default NotifList