import React from "react"
import {Link} from "react-router-dom";

interface IProps {
    person:string
    messageId:number
    imageLink:string
    apiLink:string
}




class NotificationItem extends React.Component<IProps> {
    render() {
        let messages = [" wil een dienst ruilen.", " heeft zich ziek gemeld.", " gaat op vakantie.", " heeft je rooster bijgewerkt."];
        return (
            <Link to={(this.props.messageId == 0) ? "/Rooster" : (this.props.messageId == 1) ? "/ZiekMeld" : (this.props.messageId == 2) ? null : "/Rooster"}>
                <div className='NotifItem'>
                    <img className='avatar' src={this.props.imageLink.length>0 && this.props.apiLink+"/avatar/"+ this.props.imageLink} alt='profielfoto'/>
                    <p>{this.props.person}{messages[this.props.messageId]}</p>
                </div>
            </Link>
        )
    }
}

export default NotificationItem