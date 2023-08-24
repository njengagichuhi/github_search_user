import React from 'react'

const Nav = () => {
  return (
    <>
   
    <nav className=' container bg-secondary d-flex justify-content-between'>
        <h1>GITHUB SEARCH</h1>
        <button className='m-2 rounded bg-light'>search user</button>
        <button className='m-2 rounded bg-light'>search repos</button>
    
    </nav>
    </>
  )
}

export default Nav