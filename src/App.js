import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'eelll', name: 'Max', age: 28 },    
      { id: 'sdfff', name: 'Manu', age: 29 },    
      { id: 'mmhhg', name: 'Zenon', age: 99 },    
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },    
        { name: 'Manu', age: 29 },    
        { name: 'Zenon', age: 999 },    
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.persons];
    people.splice(personIndex, 1);
    this.setState({persons: people});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
               return <Person 
                        key={index}
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                      />  
            })}
          </div>
    )
  };
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
