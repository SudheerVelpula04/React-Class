import React, { Component } from "react";
import "./home.css"
class Home extends Component{
    constructor(){
        super();
        this.state={
            isOnline:true
        }
    }
    render(){
        return(
            <>
                <h1 className="online">HOME page</h1>
                <h1 className={this.state.isOnline?"online":"offline"} className={this.state.isOnline?"border":"borderRadius"}>{this.state.isOnline?"user is online":"user is Offline"}</h1>
                
            </>
        )
    }
}
export default Home