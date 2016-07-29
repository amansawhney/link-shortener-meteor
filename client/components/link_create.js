import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit (event) {
    event.preventDefault();
    console.log(this.refs.input.value);
    Meteor.call('links.insert', this.refs.input.value);
  }

  render() {
    return (
      <div className = "col-md-6 well col-md-offset-3">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group">
              <input ref='input' type="text" className="form-control" placeholder="Link To Shorten" aria-describedby="basic-addon2" />
              <span className="input-group-addon" id="basic-addon2">.com</span>
            </div>
            <br />
            <button className = "btn btn-primary"> SHORTEN </button>
        </form>
      </div>
    );
  }
}

export default LinkCreate;
