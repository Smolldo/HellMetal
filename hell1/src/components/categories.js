import React, { Component } from 'react'
import Items from './items'

export class categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[
                {
                    key:'ALL',
                    name:'ALL'
                },
                {
                    key:'PRIKOLY',
                    name:'PRIKOLY'
                },
                {
                    key:'GUITARS',
                    name:'GUITARS'
                },
                {
                    key:'DRUMS',
                    name:'DRUMS'
                },
                {
                    key:'MERCH',
                    name:'MERCH'
                },
            ]
        }
    }
  render() {
    return (
        
      <div className='categories'>

        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
        
      </div>
      
    )
  }
}

export default categories