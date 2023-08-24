import './index.css'

const SuggestionItem = props => {
  console.log(props)
  const {recentSearches, onSelected} = props
  const {id, suggestion} = recentSearches

  const onRecentHistory = () => {
    onSelected(id)
  }

  return (
    <li className="history">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        className="arrow"
        alt="arrow"
        onClick={onRecentHistory}
      />
    </li>
  )
}

export default SuggestionItem
