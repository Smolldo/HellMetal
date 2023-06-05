import React, { Component } from 'react'
import Item from './item'
export class items extends Component {

  constructor(props) {
      super(props);
      this.state = {
          counter: this.props.counter,
          items: this.props.items
      }
  }

  componentDidMount() {
      this.setState(() => ({
          counter: this.state.items.length
      }))
  }

  componentDidUpdate(prevProps, prevState) {
      console.log(this.props)
      if (prevProps.items !== this.props.items) {
          this.setState(() => ({
              counter: this.props.items.length,
              items: this.props,
          }))
      }

  }

  componentWillUnmount() {
      this.setState(() => ({counter: 0}))
  }

  render() {
  return (
      <main>
        {this.props.items.map(el=>(
            <Item key={el.id} item={el}/>
        ))}
      </main>
  )
}
}

export default items