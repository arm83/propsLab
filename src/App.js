// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends Component {

// Establish a function that we are going to be passing
// into the Todo Component.
fun(event){
  alert("Lets go to the store");
}

handleClick(event) {
  console.log(event.target.value)
}

  render(){
    //debugger
    return (
      <div>
      <Todo alert ={this.fun}/>

      <input onChange={(event) => this.handleClick(event)} />

      <button onClick={() => this.fun()}>Alaaaaarm</button>
    </div>
    )
  }
}


// Fix all the errors that are plaguing this application thus far.
// After you're done with that, please follow the instructions below.

// 1. Create some default Props and pass them along to your
// child component.

// 2. Display that content in either an h tag or a p tag.

// 2. Pass the funMe function to your child component and when
// someone clicks on a button, it will show the alert on from this component.


App.defaultProps={
  allTasks: [{
  task: 'do your homework',
  importance: '1',
  completed: false
  }]
}


export default App;
