import React, { Component } from 'react'

export default class SearchBar extends Component {
  // constructor (props) {
  //   super(props)
  //   // this.onFormSubmit = this.onFormSubmit.bind(this)
  //   // this.onInputChange = this.onInputChange.bind(this)
  // }

  state = {
    term: ''
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    })
  } 

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form"
        onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input type = "text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}
