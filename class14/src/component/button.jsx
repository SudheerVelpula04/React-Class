import Products from "./product";
import React from "react";
class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
  }

  btnClick(value) {
    this.setState({ value: value });
  }

  render() {
    return (
      <>
        <div style={{display:"flex",justifyContent:"space-evenly",width:"500px"}}>
          <button className="btn" onClick={() => this.btnClick(true)}>
            View
          </button>
          <button className="btn" onClick={() => this.btnClick(false)}>
            Close
          </button>
        </div>
        {this.state.value === true ? <Products /> : <h1>no products</h1>}
      </>
    );
  }
}
export default Btn;
