import React, { Component } from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

import ListItems from './ListItems';

class App extends Component {
  state = {
    items: [], 
    currentItems: {
      text: "",
      key: ""
    }
  }

  handleChange = e => {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItems;
    // console.log(newItem);
    if (newItem !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: { // to make it empty values
          text: '', 
          key: ''
        } 
      })
    }
  }

  deleteItem = (key) => {
    const filterItem = this.state.items.filter(item => item.key !== key);
    this.setState({items: filterItem})
  }

  setUpdated = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {

    return (
      <div className='container'>
        <header className="todo-list">
          <form onSubmit={this.addItem}>
            <input type='text' placeholder='Enter text'
              value={this.state.currentItems.text}
              onChange={this.handleChange}/>
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}
        deleteItem={this.deleteItem}
        setUpdated={this.setUpdated}
        />
      </div>
    );

  }
  
}

export default App;
