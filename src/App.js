import React from "react"
import Candy from './Candy'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      good: false,
      candies: []
    }

  }

  makeCandy = (ev) => {
    ev.preventDefault()
    this.setState({candies: this.state.candies.concat({name: this.state.name, good: this.state.good})})
    this.setState({name: '', good: false})
  }

  showCandy = () => {
    return this.state.candies.map((candy) =>{
      return <Candy name={candy.name} good={candy.good} />
    })
  }

  handleNameChange = (ev) => {
    this.setState({
      name: ev.target.value
    })
  }

  handleGoodness = (ev) => {
    this.setState({
      good: ev.target.checked
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.makeCandy}>
          <input type="text" placeholder="Candy Name" id="name" value={this.state.name} onChange={this.handleNameChange} /> <br/>
          <label>Is it good?</label>
          <input type="checkbox" id="good" checked={this.state.good} onChange={this.handleGoodness} /><br/>
          <input type="submit" />
        </form>
        <div className="candy-list">
          {this.showCandy()}
        </div>
      </div>
    );
  }

}
