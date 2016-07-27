import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit (event) {
    event.preventDefailt();

  }

  render() {
    return (
      <div className = "col-md-6 well col-md-offset-3">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Link to shorten" aria-describedby="basic-addon2" />
              <span className="input-group-addon" id="basic-addon2">.com</span>
            </div>
          </div>

        </form>
        <br />
        <div className = "center">
          <button className = "btn btn-primary"> SHORTEN </button>
        </div>
      </div>
    );
  }
}

export default LinkCreate;
