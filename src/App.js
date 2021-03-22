import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(){
    {
      super();
      this.state={
        persons:[
          {name:'Akshay',age:26},
          {name:'Soni',age:30},
          {name:'Kunal',age:27}
        ],
        otherState:'other state for testing'
      };      
    }
  }
  switchClickHandler = (newName) => {
    this.setState({
      persons:[
        {name:newName,age:26},
        {name:'Soni',age:30},
        {name:'Kunal',age:27.5}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value,age:26},
        {name:'Soni',age:30},
        {name:'Kunal',age:27.5}
      ]
    });
  }

    render() {
      return (
        <div className="App">
          <h1>Hi</h1>
          <button onClick={ () => this.switchClickHandler('Akshay007')} > Swtich Name</button>
          <Person
            changed={this.nameChangeHandler}
            click={this.switchClickHandler.bind(this,'James Bond')}
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>I love food</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }
    

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  
}

export default App;

// state={
//   persons:[
//     {name:'Akshay',age:26},
//     {name:'Soni',age:30},
//     {name:'Kunal',age:27}
//   ]
// };


