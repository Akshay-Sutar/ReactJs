import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Aux';

class Person extends Component {
    render(){
        return (
            <Aux>
                <p key="i1" onClick={this.props.click}  >I'm {this.props.name}, I'm {this.props.age} years old</p>
                <p key="i2" >{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        ) 
    }
}

export default Person;