import React, { Component } from 'react'

export class Item extends Component {
  static countCh=0;
  constructor(props) {
   
    super(props);
    this.state = {
      agreement: false
    };
  }

  
  handleChange = e => this.setState({ agreement: e.target.checked});

  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.decs}</p>
        <p>{this.state.count}</p>
        <div className='price'>
        <p>{this.props.item.price}</p>
        <p className='che'> <input type="checkbox" 
              checked={this.state.agreement} 
              onChange={this.handleChange} />add
        </p>
        </div>
      </div>
      
    )
  }
}

export default Item