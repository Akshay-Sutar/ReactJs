import React, { Component } from 'react';
import { render } from 'react-dom';

import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  constructor(){
    {
      super();
      this.state={
        persons:[
          { id:'asd', name:'Akshay',age:26},
          { id:'zxc', name:'Soni',age:30},
          { id:'qwe', name:'Kunal',age:27}
        ],
        otherState:'other state for testing',
        showPersons:false
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

  nameChangeHandler = (event, id) => {

    const pIndex = this.state.persons.findIndex( p => p.id === id );
    const person = { ...this.state.persons[pIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[pIndex] = person;

    this.setState({
      persons:persons
    });
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons:persons});
  }

    render() {

      let persons = null;

      if (this.state.showPersons) {

        persons = (
          <div>
            { this.state.persons.map( (person, index) => {
              return <Person 
                key={person.id}
                name={person.name}
                age={person.age}
                click={()=>this.deletePersonHandler(index)}
                changed={ (event)=> this.nameChangeHandler(event, person.id) }
              />
            } ) }
          </div>
        );
      }

      const classes = [];

      if (this.state.persons.length <=2) {
        classes.push('red');
      }

      if (this.state.persons.length <=1) {
        classes.push('bold');
      }

      

      return (
          <div className="App">
            <h1>Hi</h1>
            <p className={classes.join(' ')} >This is a React list</p>
            <button
              className="button"
              alt={this.state.showPersons}
              onClick={ () => this.togglePersonHandler()} > Swtich Name</button>
              {persons}
          </div>
      );
    }
}

export default App;

