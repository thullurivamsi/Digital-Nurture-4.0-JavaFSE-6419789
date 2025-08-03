import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };
    
    // Binding methods to use 'this' keyword
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  // Task 1: Increment and Decrement handlers
  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Task 1b: Multiple method invocation
  incrementValue() {
    this.setState({ counter: this.state.counter + 1 });
  }

  sayHello() {
    this.setState({ 
      message: 'Hello! This is a static message from the Increase button.' 
    });
  }

  handleIncrease() {
    this.incrementValue();
    this.sayHello();
  }

  // Task 2: Function with argument
  sayWelcome(greeting) {
    this.setState({ 
      message: `${greeting}! Welcome to React Event Handling.` 
    });
  }

  // Task 3: Synthetic event handler
  handleOnPress(syntheticEvent) {
    console.log('=== Synthetic Event Details ===');
    console.log('Event Object:', syntheticEvent);
    console.log('Event Type:', syntheticEvent.type);
    console.log('Target Element:', syntheticEvent.target);
    console.log('Current Target:', syntheticEvent.currentTarget);
    console.log('Timestamp:', syntheticEvent.timeStamp);
    console.log('Is Trusted:', syntheticEvent.isTrusted);
    console.log('================================');
    
    this.setState({ 
      message: 'I was clicked - Synthetic Event Triggered! Check console for event details.' 
    });
  }

  clearMessage() {
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Event Examples App</h1>
          <p>Demonstrating Event Handling, Synthetic Events, and 'this' keyword usage</p>
        </header>

        <main className="App-main">
          {/* Message Display */}
          {this.state.message && (
            <div className="message-container">
              <div className="message">
                {this.state.message}
                <button onClick={this.clearMessage} className="close-btn">×</button>
              </div>
            </div>
          )}

          <div className="container">
            {/* Task 1: Counter with Increment/Decrement */}
            <div className="card">
              <h2>Task 1: Counter Controls</h2>
              <div className="counter-display">
                <div className="counter-value">{this.state.counter}</div>
                <div className="button-group">
                  <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-success"
                  >
                    Increment
                  </button>
                  <button 
                    onClick={this.handleDecrement} 
                    className="btn btn-danger"
                  >
                    Decrement
                  </button>
                </div>
              </div>
            </div>

            {/* Task 1b: Multiple Method Invocation */}
            <div className="card">
              <h2>Task 1b: Multiple Methods</h2>
              <p>This button calls multiple methods using 'this' keyword</p>
              <button 
                onClick={this.handleIncrease} 
                className="btn btn-purple"
              >
                Increase (Multiple Methods)
              </button>
            </div>

            {/* Task 2: Function with Argument */}
            <div className="card">
              <h2>Task 2: Function with Argument</h2>
              <button 
                onClick={() => this.sayWelcome('Welcome')} 
                className="btn btn-blue"
              >
                Say Welcome
              </button>
            </div>

            {/* Task 3: Synthetic Event */}
            <div className="card">
              <h2>Task 3: Synthetic Event</h2>
              <p className="event-info">Check browser console for synthetic event details</p>
              <button 
                onClick={this.handleOnPress} 
                className="btn btn-orange"
              >
                OnPress (Synthetic Event)
              </button>
            </div>
          </div>

          {/* Currency Converter Component */}
          <div className="converter-section">
            <h2>Currency Converter Component</h2>
            <CurrencyConverter />
          </div>

          {/* Event Information Panel */}
          <div className="info-panel">
            <h3>React Event Handling Concepts Demonstrated:</h3>
            <ul>
              <li><strong>Event Handlers:</strong> Functions that respond to user interactions</li>
              <li><strong>Synthetic Events:</strong> React's cross-browser wrapper around native events</li>
              <li><strong>Event Naming Convention:</strong> camelCase (onClick, onChange, onSubmit)</li>
              <li><strong>'this' keyword:</strong> Proper binding in class components</li>
              <li><strong>State Management:</strong> Using this.setState() for updates</li>
              <li><strong>Multiple Event Handlers:</strong> Calling multiple functions from one event</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
