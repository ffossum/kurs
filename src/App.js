import React, { Component } from 'react';
import 'todomvc-app-css/index.css';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <div className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" />
        </div>
        
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <ul className="todo-list">
            <li>
              <div>
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
