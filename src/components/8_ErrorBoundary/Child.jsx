import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users:[
      {id:'001', name:'Phoebe',age:33},
      {id:'002', name:'Dolly',age:11},
      {id:'001', name:'Ann',age:9},
    ]
    // users:'abc'
  }

  render() {
    return (
      <div>
        <h2>我是Child組件</h2>
        {
          this.state.users.map((userObj)=>{
            return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
          })
        }
      </div>
    )
  }
}
