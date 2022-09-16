import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  state = {carName:'BMW'}

  changeCar = () =>{
    // this.setState({carName:'Benz'})

    const obj = this.state
    obj.carName = 'Benz'
    console.log(obj === this.state)
    this.setState(obj)
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log(this.props,this.state) //目前的props和state
  //   // console.log(nextProps,nextState) //接下要變化的目標props, 目標state
  //   return !this.state.carName === nextState.carName
  // }

  render() {
    console.log('Parent---render')
    const {carName} = this.state
    return (
      <div className='parent'>
        <h3>我是Parent組件</h3>
        <span>我的車名字是:{carName}</span><br/>
        <button onClick={this.changeCar}>點我換車</button>
        <Child carName="Audi" />
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.props,this.state) //目前的props和state
  //   console.log(nextProps,nextState) //接下要變化的目標props, 目標state
  //   return !this.props.carName === nextState.carName
  // }

  render() {
    console.log('Child---render')
    return (
      <div className='child'>
        <h3>我是Child組件</h3>
        <span>我接到的車是: {this.props.carName}</span>
      </div>
    );
  }
}

