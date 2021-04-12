import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import logo from '../../assets/img/header/Logo_ML@2x.png'
import "./header.scss"

const Header = ({ parentHistory }) => {

  const [query, setQuery] = useState('')

  useEffect(() => {
    if (parentHistory.location.search !== '') {
      const newQuery = parentHistory.location.search.split('=')[1]
      setQuery(newQuery)
    }
  }, [parentHistory.location.search])

  const redirectToItemSearch = () => {
    if (query.trim().length === 0) return

    parentHistory.push({
      pathname: '/items',
      search: `?search=${query.trim()}`,
    })
  }

  const onClickSearch = (e) => {
    e.preventDefault()
    redirectToItemSearch()
  }

  const onClickRedirectHome = (e) => {
    e.preventDefault()
    parentHistory.push({pathname: '/'})
  }

  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter') {
      redirectToItemSearch()
    }
  }

  return (
    <header className="header">
      <div className="logo" onClick={onClickRedirectHome}>
        <img src={logo} />
      </div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
          onKeyPress={onKeyPressEnter}
        />
        <a onClick={onClickSearch} className="search-btn"></a>
      </div>
    </header>
  )
}

Header.propTypes = {
  parentHistory: PropTypes.object.isRequired,
}

export default Header
