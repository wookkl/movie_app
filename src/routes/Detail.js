import React from "react";
import { Redirect } from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined ){
            history.push("/");  
        }
    }
    
    render(){
        const {location} = this.props;
        //year, title, summary, poster, genres

        return <span>location..t</span>
    }
}

export default Detail;