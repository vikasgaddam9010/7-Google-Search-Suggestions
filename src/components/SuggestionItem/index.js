import {Component} from 'react'
import './index.css'

const Suggestions = props => {
  const {each, updateSearchInput} = props
  const {suggestion} = each

  const onClickBtn = () => {
    updateSearchInput(suggestion)
  }

  return (
    <div>
      <li>
        <p className="list">{suggestion}</p>
        <button onClick={onClickBtn}>
          <img
            alt="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </li>
    </div>
  )
}

export default Suggestions
