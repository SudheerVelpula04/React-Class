import React from "react";
import "./card.css";
class Card extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Card</h1>
        {this.props.list.map((ele) => (
          <div className="container">
            <p>username:{ele.quote}</p>
            <p>Age:{ele.author}</p>
          </div>
        ))}
      </>
    );
  }
}
export default Card;
