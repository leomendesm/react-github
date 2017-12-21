import React from 'react'
import PropTypes from 'prop-types'

const Search = ({handleSearch})=>(
    <div className='search'>
      <input type='text' placeholder='digite o nome do usuário do github' 
      onKeyUp={handleSearch} />
    </div>
  )
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
export default Search