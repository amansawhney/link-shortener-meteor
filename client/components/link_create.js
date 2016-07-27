import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit (event) {
    event.preventDefault();

    console.log(this.refs.input.value);

  }

  render() {
    return (
      <div className = "col-md-6 well col-md-offset-3">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label> Link to Shorten </label>
              <input ref='input' className='form-control' />
            </div>
            <button className = "btn btn-primary"> SHORTEN </button>
        </form>
      </div>
    );
  }
}

export default LinkCreate;
