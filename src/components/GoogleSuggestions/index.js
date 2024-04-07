// Write your code here
import {Component} from 'react'
import Suggestions from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClick = event => {
    const searchedInputValue = event.target.value
    console.log(searchedInputValue)
    this.setState({searchInput: searchedInputValue})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachDestination =>
      eachDestination.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-img"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-and-list">
          <div className="search-box">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              placeHolder="Search Google"
              className="width"
              value={searchInput}
              type="search"
              onChange={this.onClick}
            />
          </div>
          <ul>
            {searchResults.map(each => (
              <Suggestions
                key={each.id}
                each={each}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
