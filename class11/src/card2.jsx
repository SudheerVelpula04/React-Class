
import React from "react";
class Card2 extends React.Component{

    render(){
        return(
            
            <>
                <h1 style={{textAlign:"center"}}>Card2</h1>
                <div className="container">
                    {this.props.children}
                </div>
            </>

        )
    }
}
export default Card2