import React, { Fragment } from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

// In order to access THIS on a custom method - you must follow below syntax or constructor/super : setting this.method = this.method.bind(this*comp);

  goToStore = (event) => {
    event.preventDefault();
  }

  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>
        </form>
    )
  }
}

export default StorePicker;