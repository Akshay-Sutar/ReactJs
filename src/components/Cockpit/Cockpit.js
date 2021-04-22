import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect( ()=>{
        console.log('[Cockpit.js] useEffect');

        setTimeout( ()=>{
            alert('Saving data');
        },1000 );

        return ()=>{
            console.log('[Cockpit.js] Clean up in useEffect');
        }
    },[] );

    useEffect( ()=>{
        console.log('[Cockpit.js] 2nd useEffect');

        return ()=>{
            console.log('[Cockpit.js] Clean up in 2nd useEffect');
        }
        
    } );

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <=2) {
    assignedClasses.push(classes.red);
    }

    if (props.personsLength <=1) {
    assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')} >This is a React list</p>
            <button
              className={btnClass}
              alt={props.showPersons}
              onClick={props.clicked} > Swtich Name</button>
        </div>
    );
}

export default React.memo(cockpit) ;