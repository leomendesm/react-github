import React from 'react'

const Actions = ({getRepos})=>(
  <div className='actions'>
    <button onClick={getRepos}>Ver Repositórios</button>
    <button>Ver Favoritos</button>
  </div>
)
export default Actions