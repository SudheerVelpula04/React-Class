import React from "react";

class Style extends React.Component {
  // external style app.css
  // will use the inline Style

  style={
            color: "red",
            backgroundColor: "black",
            textAlign: "center",
            padding: "10px",
          }
  render() {
    return (
      <>
        <h1
          style={this.style}
        >
          Heading-1
        </h1>
      </>
    );
  }
}
export default Style;
