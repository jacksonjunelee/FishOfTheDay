import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(e) {
    e.preventDefault();
    // first grab text from the box
    console.log(this.storeInput.value);
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e)}>
      {/* <form className="store-selector" onSubmit={this.goToStore.bind(this)}> */}
        { /* Hello */}
        <h2> Please Enter A Store </h2>
        <input type="test" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit"> Visit Store </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;

// Other ways to create a React Component
// var StorePicker = React.createClass({
//   goToStore() { console.log(this)},
//   render() {return <p> test </p>}
// })
