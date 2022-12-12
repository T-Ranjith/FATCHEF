import axios from 'axios'
import React, { Component } from 'react'

export default class Getex extends Component {
    constructor(props) {
      super(props)
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(((response)=>{
            console.log(response)
            this.setState({post:response.data})
    }))
}
  render() {
    const {posts}=this.state
    return (
      <div>Getex</div>
    )
  }
}
