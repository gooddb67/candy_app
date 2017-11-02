import React from "react"

export default class Candy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.name}: {(this.props.good) ? "Good" : "Bad"}
      </div>
    );
  }
}
