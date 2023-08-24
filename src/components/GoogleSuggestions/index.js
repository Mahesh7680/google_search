import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

const initialSuggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {suggestionsList: initialSuggestionsList}

  onSearch = event => {
    const {suggestionsList} = this.state
    const searchvalue = event.target.value

    const filteredSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchvalue.toLowerCase()),
    )

    this.setState({suggestionsList: filteredSuggestions})
  }

  onSelected = id => {
    console.log('working')
  }

  render() {
    const {suggestionsList} = this.state

    return (
      <div className="bg-container">
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            className="search-logo"
            alt="search icon"
          />
          <input
            type="search"
            placeholder="  search google"
            onChange={this.onSearch}
            alt="search icon"
          />
          <div className="inner-container">
            <ul>
              {suggestionsList.map(each => (
                <SuggestionItem
                  recentSearches={each}
                  key={each.id}
                  onSelected={this.onSelected}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
