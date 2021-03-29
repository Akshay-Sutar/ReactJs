import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(){
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

        persons = <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
      }

      return (
          <div className={classes.App}>
              <Cockpit  
                showPersons = {this.state.showPersons}
                persons = {this.state.persons}
                clicked={this.togglePersonHandler}
              />
              {persons}
          </div>
      );
    }
}

export default App;

