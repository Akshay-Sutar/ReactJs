import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      persons:[
        { id:'asd', name:'Akshay',age:26},
        { id:'zxc', name:'Soni',age:30},
        { id:'qwe', name:'Kunal',age:27}
      ],
      otherState:'other state for testing',
      showPersons:false,
      showCockpit:true
    };
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps( props, state ){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount()
  {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] componentDidUpdate');
    return true;
  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />
    }

    return (
        <Aux classes={classes.App}>
            <button
              onClick={ ()=>{ this.setState({showCockpit:false}) } }
            >Remove Cockpit</button>
            {
              this.state.showCockpit ? <Cockpit
              appTitle={this.props.appTitle}  
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked={this.togglePersonHandler}
            /> : null
            }
            {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App );

