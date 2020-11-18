import React, { Component } from 'react';
import List from './List.js'
import './App.css';
import STORE from './STORE.js';


class App extends Component {
  //if no props are given, there would be empty lists array and allCarcs objects. 
  state = {
    store: STORE,
  };

  handleDeleteCard(cardId){
    console.log('delete card called', { cardId })
  }
  addRandomCard(listId){
    console.log('add random card called', { listId })
  }

  render() {
 
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

/* The App component should render markup matching the design.html: the main element, a header with the h1 and a div with class 'App-list'.
The App component will accept 1 prop, store.
The store prop is an object with 2 keys: lists and allCards.
lists is an array of objects.
allCards is an object where each key is a card's ID and the value is the card object with a title and content.
You'll be given a dummy STORE object to pass to your App.
The App should render a List component for each of the items in the store.lists array.
Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
The header prop is a string for the List's header.
The cards prop will be an array of card objects.
You'll need to combine the cardIds array for the list with the allCards object. */