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

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value,age:26},
        {name:'Soni',age:30},
        {name:'Kunal',age:27.5}
      ]
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

      const style= {
        backgroundColor:'white',
        font:'inherit',
        padding:'8px',
        border:'1px solid blue',
        cursor:'pointer'
      };

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
              />
            } ) }
          </div>
        );
      }

      return (
        <div className="App">
          <h1>Hi</h1>
          <button
            style={style} 
            onClick={ () => this.togglePersonHandler()} > Swtich Name</button>
            {persons}
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


