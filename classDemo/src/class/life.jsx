import React, { Component } from "react";

export class UnMount extends Component{
    constructor(){
        super();
        this.state={count:0}
    }
    componentDidUpdate(prevValue,prevState){
        console.log("updating")

        if(prevState.count!==this.state.count){
            console.log(`Count changed from ${prevState.count} → ${this.state.count}`)
        }
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <>
                <h1>How are you</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>CLick</button>
            </>
        )
    }
}


export class GameTimer extends Component {
  state = { time: 0 };

  componentDidUpdate(prevState) {
    if (this.state.time === 10 && prevState.time !== 10) {
      clearInterval(this.timer);
      console.log("Game Over");
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prev => ({ time: prev.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>Time: {this.state.time}</h1>;
  }
}


export class UserProfile extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      console.log("User ID changed. Fetch new data.");
      fetch(`https://fakestoreapi.com/products/${this.props.userId}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }

  render() {
    return <h2>User ID: {this.props.userId}</h2>;
  }
}

