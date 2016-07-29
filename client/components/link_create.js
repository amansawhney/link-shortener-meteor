import React, { Component } from 'react';
import AlertContainer from 'react-alert';

class LinkCreate extends Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };
    this.state = { error: ''};
  }
  handleSubmit (event) {
    event.preventDefault();
    console.log(this.refs.input.value);
    Meteor.call('links.insert', this.refs.input.value, (error) => {
      if (error) {
        this.setState({error: "Enter vaild URL dude"})
        msg.show("That is not a valid URL", {
          time: 2000,
          type: 'error',
        });
      } else {
        this.setState({error: ''})
        this.refs.input.value = '';
      }
    });
  }

  render() {
    return (
      <div>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        <div className = "col-md-6 well col-md-offset-3">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <input ref='input' type="text" className="form-control" placeholder="Link To Shorten" aria-describedby="basic-addon2" />
              </div>
              <br />
              <button className = "btn btn-primary"> SHORTEN </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LinkCreate;
